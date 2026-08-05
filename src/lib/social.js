import {
  doc, getDoc, setDoc, updateDoc, deleteField, deleteDoc,
  collection, query, where, orderBy, limit, getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db, storage } from "../firebase";

const MAX_PHOTOS = 3;

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// ---- profile ----

export async function upsertProfile(user) {
  await setDoc(
    doc(db, "users", user.uid),
    {
      email: user.email || "",
      emailLower: (user.email || "").toLowerCase(),
      displayName: user.displayName || "",
      displayNameLower: (user.displayName || "").toLowerCase(),
      photoURL: user.photoURL || "",
    },
    { merge: true }
  );
}

export async function getProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

async function setPicksCount(uid, count) {
  await setDoc(doc(db, "users", uid), { picksCount: count }, { merge: true });
}

// ---- search ----

export async function searchUsers(text, myUid) {
  const q = text.trim().toLowerCase();
  if (!q) return [];
  const end = q + "";

  const nameQ = query(
    collection(db, "users"),
    orderBy("displayNameLower"),
    where("displayNameLower", ">=", q),
    where("displayNameLower", "<", end),
    limit(8)
  );
  const emailQ = query(
    collection(db, "users"),
    orderBy("emailLower"),
    where("emailLower", ">=", q),
    where("emailLower", "<", end),
    limit(8)
  );

  const [nameSnap, emailSnap] = await Promise.all([getDocs(nameQ), getDocs(emailQ)]);
  const byUid = new Map();
  [...nameSnap.docs, ...emailSnap.docs].forEach((d) => {
    if (d.id !== myUid) byUid.set(d.id, { uid: d.id, ...d.data() });
  });
  return [...byUid.values()];
}

// ---- friend requests ----
// deterministic id so we can't double-send and can look up in either direction

function requestId(fromUid, toUid) {
  return `${fromUid}_${toUid}`;
}

export async function sendFriendRequest(fromUser, toUid) {
  if (fromUser.uid === toUid) throw new Error("That's you.");

  const alreadyFriends = await getDoc(doc(db, "users", fromUser.uid, "friends", toUid));
  if (alreadyFriends.exists()) throw new Error("Already friends.");

  const reverse = await getDoc(doc(db, "friendRequests", requestId(toUid, fromUser.uid)));
  if (reverse.exists()) throw new Error("They already sent you a request — check your incoming requests.");

  await setDoc(doc(db, "friendRequests", requestId(fromUser.uid, toUid)), {
    from: fromUser.uid,
    to: toUid,
    fromEmail: fromUser.email || "",
    status: "pending",
    createdAt: Date.now(),
  });
}

export async function cancelFriendRequest(fromUid, toUid) {
  await deleteDoc(doc(db, "friendRequests", requestId(fromUid, toUid)));
}

export async function fetchIncomingRequests(uid) {
  const snap = await getDocs(query(collection(db, "friendRequests"), where("to", "==", uid)));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter((r) => r.status === "pending");
}

export async function fetchOutgoingRequests(uid) {
  const snap = await getDocs(query(collection(db, "friendRequests"), where("from", "==", uid)));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })).filter((r) => r.status === "pending");
}

export async function acceptFriendRequest(request) {
  const { from, to } = request;
  await Promise.all([
    setDoc(doc(db, "users", to, "friends", from), { addedAt: Date.now() }),
    setDoc(doc(db, "users", from, "friends", to), { addedAt: Date.now() }),
  ]);
  await deleteDoc(doc(db, "friendRequests", requestId(from, to)));
}

export async function declineFriendRequest(request) {
  await deleteDoc(doc(db, "friendRequests", requestId(request.from, request.to)));
}

export async function fetchFriends(uid) {
  const snap = await getDocs(collection(db, "users", uid, "friends"));
  const friends = await Promise.all(
    snap.docs.map(async (d) => {
      const profile = await getProfile(d.id);
      return profile;
    })
  );
  return friends.filter(Boolean);
}

export async function removeFriend(uid, friendUid) {
  await Promise.all([
    deleteDoc(doc(db, "users", uid, "friends", friendUid)),
    deleteDoc(doc(db, "users", friendUid, "friends", uid)),
  ]);
}

// ---- picks ----

export async function getPicks(uid) {
  const snap = await getDoc(doc(db, "userPicks", uid));
  return snap.exists() ? snap.data().picks || {} : {};
}

export async function saveEaten(uid, name, { notes, photos }, currentPicks) {
  const next = { status: "eaten", notes: notes || "", photos: photos || [], updatedAt: Date.now() };
  await setDoc(doc(db, "userPicks", uid), { picks: { [name]: next } }, { merge: true });
  await syncPicksCount(uid, currentPicks, name, next);
}

export async function removePick(uid, name, currentPicks) {
  await updateDoc(doc(db, "userPicks", uid), { [`picks.${name}`]: deleteField() });
  await syncPicksCount(uid, currentPicks, name, undefined);
}

async function syncPicksCount(uid, currentPicks, name, next) {
  const willHave = new Set(Object.keys(currentPicks));
  if (next) willHave.add(name);
  else willHave.delete(name);
  await setPicksCount(uid, willHave.size);
}

// ---- photos ----

export async function uploadEatenPhotos(uid, restaurantName, files) {
  const slug = slugify(restaurantName);
  const uploads = files.slice(0, MAX_PHOTOS).map(async (file, i) => {
    const path = `eatenPhotos/${uid}/${slug}/${Date.now()}-${i}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    const fileRef = ref(storage, path);
    await uploadBytes(fileRef, file);
    return { url: await getDownloadURL(fileRef), path };
  });
  return Promise.all(uploads);
}

export async function deletePhoto(path) {
  try {
    await deleteObject(ref(storage, path));
  } catch {
    // already gone or never uploaded by us — ignore
  }
}

export const MAX_PHOTOS_PER_REVIEW = MAX_PHOTOS;
