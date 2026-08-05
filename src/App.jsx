import React, { useEffect, useRef, useState } from "react";
import { LogOut, User } from "lucide-react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { styles, keyframes, colors, COMPACT_BAR_HEIGHT } from "./styles";
import { upsertProfile, getPicks, saveEaten, removePick, fetchIncomingRequests } from "./lib/social";
import { fetchMyLists, createList, addItemToList, setListPersonal } from "./lib/lists";
import Sidebar from "./components/Sidebar";
import BrowseView from "./components/BrowseView";
import MyListsView from "./components/MyListsView";
import FriendsView from "./components/FriendsView";
import EatenDialog from "./components/EatenDialog";

export default function App() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [picks, setPicks] = useState({});
  const [myLists, setMyLists] = useState([]);
  const [tab, setTab] = useState("browse");
  const [openListId, setOpenListId] = useState(null);
  const [incomingCount, setIncomingCount] = useState(0);
  const [eatenDialogFor, setEatenDialogFor] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [compactVisible, setCompactVisible] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
      if (u) upsertProfile(u);
    });
  }, []);

  const refreshLists = async () => {
    if (!user) return;
    setMyLists(await fetchMyLists(user.uid));
  };

  useEffect(() => {
    if (!user) {
      setPicks({});
      setMyLists([]);
      return;
    }
    (async () => {
      const [fetchedPicks, lists] = await Promise.all([getPicks(user.uid), fetchMyLists(user.uid)]);
      setPicks(fetchedPicks);

      // Every user gets a personal "Want to Eat" list that can't be deleted
      // or shared. Folds in any legacy "want" picks from before the
      // multi-list rework, so nothing looks lost.
      if (lists.length === 0) {
        const wantNames = Object.entries(fetchedPicks)
          .filter(([, p]) => p.status === "want")
          .map(([name]) => name);
        const listId = await createList(user, "Want to Eat", { isPersonal: true });
        if (wantNames.length > 0) {
          await Promise.all(wantNames.map((name) => addItemToList(listId, name, user)));
        }
        setMyLists(await fetchMyLists(user.uid));
        return;
      }

      // One-time backfill: the default "Want to Eat" list predates the
      // personal/shared distinction, so mark it personal if it was never tagged.
      const legacyWantList = lists.find((l) => l.name === "Want to Eat" && l.ownerId === user.uid && !l.isPersonal);
      if (legacyWantList) {
        await setListPersonal(legacyWantList.id, true);
        setMyLists(await fetchMyLists(user.uid));
        return;
      }

      setMyLists(lists);
    })();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    fetchIncomingRequests(user.uid).then((reqs) => setIncomingCount(reqs.length));
  }, [user, tab]);

  useEffect(() => {
    if (!sentinelRef.current) return;
    const observer = new IntersectionObserver(([entry]) => setCompactVisible(!entry.isIntersecting), {
      rootMargin: "-1px 0px 0px 0px",
    });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [user]);

  const login = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  const handleMarkEaten = (name) => setEatenDialogFor(name);

  const handleSaveEaten = async (notes, photos) => {
    await saveEaten(user.uid, eatenDialogFor, { notes, photos }, picks);
    setPicks(await getPicks(user.uid));
    setEatenDialogFor(null);
  };

  const handleRemove = async (name) => {
    await removePick(user.uid, name, picks);
    setPicks(await getPicks(user.uid));
  };

  const eatenCount = Object.values(picks).filter((p) => p.status === "eaten").length;
  const firstName = user?.displayName?.split(" ")[0];
  const trackerNameLine = firstName ? `${firstName}'s` : "Your";

  if (!authReady) {
    return (
      <div style={styles.loadingScreen}>
        <style>{keyframes}</style>
        <div style={styles.loadingText}>Loading…</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={styles.signInScreen}>
        <div style={styles.signInCard}>
          <div style={styles.signInKicker}>Miami</div>
          <h1 style={styles.signInWord}>SPICE</h1>
          <p style={styles.signInSub}>
            Sign in to build your list of picks — it'll be saved to your account and follow you
            across devices.
          </p>
          <button onClick={login} style={styles.signInButton}>
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  const profileMenu = profileOpen && (
    <>
      <div style={styles.posterOverlay} onClick={() => setProfileOpen(false)} />
      <div style={styles.posterProfileMenu}>
        <div style={styles.profileWho}>
          Signed in as
          <span style={styles.profileWhoName}>{user.displayName}</span>
        </div>
        <button
          style={styles.profileMenuBtn}
          onClick={() => {
            setProfileOpen(false);
            logout();
          }}
        >
          <LogOut size={13} strokeWidth={2.5} style={{ marginRight: 6, verticalAlign: -2 }} />
          Sign out
        </button>
      </div>
    </>
  );

  return (
    <div style={styles.page}>
      <style>{keyframes}</style>

      <div style={{ ...styles.compactBar, ...(compactVisible ? styles.compactBarVisible : {}) }}>
        <div style={styles.compactWord}>
          <span style={styles.compactWordKicker}>Miami</span>SPICE
        </div>
        <div style={styles.compactRight}>
          <div style={styles.compactStats}>
            <div style={styles.compactStat}>
              <span style={styles.compactStatNum}>{myLists.length}</span>
              <span style={styles.compactStatLabel}>Lists</span>
            </div>
            <div style={styles.compactStat}>
              <span style={styles.compactStatNum}>{eatenCount}</span>
              <span style={styles.compactStatLabel}>Eaten</span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <button style={styles.compactAvatarBtn} onClick={() => setProfileOpen((o) => !o)}>
              {user.photoURL ? (
                <img src={user.photoURL} alt={user.displayName || "User"} style={styles.posterProfileImg} />
              ) : (
                <User size={16} color={colors.accent} strokeWidth={2.5} />
              )}
            </button>
            {profileMenu}
          </div>
        </div>
      </div>

      <header style={styles.posterGrid} className="poster-grid">
        <div style={styles.posterMain} className="poster-main">
          <div style={styles.posterKicker}>Miami</div>
          <h1 style={styles.posterWord}>SPICE</h1>
          <div style={styles.posterSubcap}>25th Anniversary · Aug 1 – Sep 30, 2026</div>
        </div>
        <div style={styles.posterRail} className="poster-rail" />
        <div style={styles.posterMeta}>
          <div style={styles.posterMetaRow}>
            <div style={styles.posterMetaTitle}>
              <div>{trackerNameLine}</div>
              <div>Spice Tracker</div>
            </div>
            <div style={{ position: "relative" }}>
              <button style={styles.posterProfile} onClick={() => setProfileOpen((o) => !o)}>
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || "User"} style={styles.posterProfileImg} />
                ) : (
                  <User size={16} color={colors.accent} strokeWidth={2.5} />
                )}
              </button>
              {profileMenu}
            </div>
          </div>

          <div style={styles.posterRule} />
          <div style={styles.posterStats}>
            <div>
              <div style={styles.statNum}>{myLists.length}</div>
              <div style={styles.statLabel}>Lists</div>
            </div>
            <div>
              <div style={styles.statNum}>{eatenCount}</div>
              <div style={styles.statLabel}>Eaten</div>
            </div>
          </div>
        </div>
      </header>
      <div ref={sentinelRef} />

      <div style={styles.appShell}>
        <div style={styles.appBody}>
          <div style={styles.sidebarColumn}>
            <div style={{ ...styles.sidebarSticky, top: compactVisible ? COMPACT_BAR_HEIGHT : 16 }}>
              <Sidebar
                tab={tab}
                setTab={setTab}
                myLists={myLists}
                openListId={openListId}
                onOpenList={setOpenListId}
                incomingCount={incomingCount}
              />
            </div>
          </div>

          <div style={styles.mainCol}>
            {tab === "browse" && (
              <BrowseView
                picks={picks}
                onMarkEaten={handleMarkEaten}
                onRemove={handleRemove}
                user={user}
                myLists={myLists}
                onListsChanged={refreshLists}
                stickyTop={compactVisible ? COMPACT_BAR_HEIGHT : 16}
              />
            )}

            {tab === "mylists" && (
              <MyListsView
                picks={picks}
                onMarkEaten={handleMarkEaten}
                onRemove={handleRemove}
                user={user}
                myLists={myLists}
                onListsChanged={refreshLists}
                openListId={openListId}
                onOpenList={setOpenListId}
              />
            )}

            {tab === "friends" && <FriendsView user={user} />}
          </div>
        </div>
      </div>

      {eatenDialogFor && (
        <EatenDialog
          uid={user.uid}
          restaurantName={eatenDialogFor}
          initialNotes={picks[eatenDialogFor]?.notes}
          initialPhotos={picks[eatenDialogFor]?.photos}
          onClose={() => setEatenDialogFor(null)}
          onSave={handleSaveEaten}
        />
      )}
    </div>
  );
}
