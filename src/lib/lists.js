import {
  doc, getDoc, setDoc, updateDoc, deleteDoc,
  collection, query, where, getDocs, arrayUnion, arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";
import { getProfile } from "./social";

export async function createList(user, name) {
  const ref = doc(collection(db, "lists"));
  await setDoc(ref, {
    name,
    ownerId: user.uid,
    ownerName: user.displayName || "",
    memberIds: [user.uid],
    createdAt: Date.now(),
  });
  return ref.id;
}

export async function fetchMyLists(uid) {
  const snap = await getDocs(query(collection(db, "lists"), where("memberIds", "array-contains", uid)));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => a.createdAt - b.createdAt);
}

export async function getList(listId) {
  const snap = await getDoc(doc(db, "lists", listId));
  return snap.exists() ? { id: listId, ...snap.data() } : null;
}

export async function renameList(listId, name) {
  await updateDoc(doc(db, "lists", listId), { name });
}

export async function deleteList(listId) {
  await deleteDoc(doc(db, "lists", listId));
}

export async function inviteToList(listId, uidToAdd) {
  await updateDoc(doc(db, "lists", listId), { memberIds: arrayUnion(uidToAdd) });
}

export async function leaveList(listId, uid) {
  await updateDoc(doc(db, "lists", listId), { memberIds: arrayRemove(uid) });
}

export async function fetchListMembers(list) {
  const members = await Promise.all(list.memberIds.map((uid) => getProfile(uid)));
  return members.filter(Boolean);
}

export async function fetchListItems(listId) {
  const snap = await getDocs(collection(db, "lists", listId, "items"));
  return snap.docs.map((d) => ({ name: d.id, ...d.data() }));
}

export async function addItemToList(listId, restaurantName, user) {
  await setDoc(doc(db, "lists", listId, "items", restaurantName), {
    addedBy: user.uid,
    addedByName: user.displayName || "",
    addedAt: Date.now(),
  });
}

export async function removeItemFromList(listId, restaurantName) {
  await deleteDoc(doc(db, "lists", listId, "items", restaurantName));
}

// Which of the current user's lists already contain this restaurant.
export async function fetchListMembershipForRestaurant(myLists, restaurantName) {
  const results = await Promise.all(
    myLists.map(async (list) => {
      const snap = await getDoc(doc(db, "lists", list.id, "items", restaurantName));
      return snap.exists() ? list.id : null;
    })
  );
  return new Set(results.filter(Boolean));
}

export async function fetchComments(listId, restaurantName) {
  const snap = await getDocs(collection(db, "lists", listId, "items", restaurantName, "comments"));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => a.createdAt - b.createdAt);
}

export async function addComment(listId, restaurantName, user, text) {
  const ref = doc(collection(db, "lists", listId, "items", restaurantName, "comments"));
  await setDoc(ref, {
    authorId: user.uid,
    authorName: user.displayName || "",
    authorPhoto: user.photoURL || "",
    text,
    createdAt: Date.now(),
  });
}

export async function deleteComment(listId, restaurantName, commentId) {
  await deleteDoc(doc(db, "lists", listId, "items", restaurantName, "comments", commentId));
}
