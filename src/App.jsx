import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { styles, keyframes } from "./styles";
import { upsertProfile, getPicks, setWant, saveEaten, removePick } from "./lib/social";
import BrowseView from "./components/BrowseView";
import MyListsView from "./components/MyListsView";
import FriendsView from "./components/FriendsView";
import EatenDialog from "./components/EatenDialog";

const TABS = [
  { id: "browse", label: "Browse" },
  { id: "mylists", label: "My Lists" },
  { id: "friends", label: "Friends" },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [picks, setPicks] = useState({});
  const [tab, setTab] = useState("browse");
  const [eatenDialogFor, setEatenDialogFor] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
      if (u) upsertProfile(u);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      setPicks({});
      return;
    }
    getPicks(user.uid).then(setPicks);
  }, [user]);

  const login = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  const handleToggleWant = async (name) => {
    await setWant(user.uid, name, picks);
    setPicks(await getPicks(user.uid));
  };

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

  const wantCount = Object.values(picks).filter((p) => p.status === "want").length;
  const eatenCount = Object.values(picks).filter((p) => p.status === "eaten").length;

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
        <style>{keyframes}</style>
        <div style={styles.heat} />
        <div style={styles.signInCard}>
          <div style={styles.eyebrow}>Aug 1 — Sep 30, 2026 · 25th Anniversary</div>
          <h1 style={styles.signInTitle}>
            Miami Spice<br /><span style={styles.titleAccent}>2026</span>
          </h1>
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

  return (
    <div style={styles.page}>
      <style>{keyframes}</style>

      <header style={styles.hero}>
        <div style={styles.heat} />
        <div style={styles.heroInner}>
          <div style={styles.headerUserRow}>
            <div style={styles.eyebrow}>Aug 1 — Sep 30, 2026 · 25th Anniversary</div>
            <div style={styles.userRow}>
              {user.photoURL && (
                <img src={user.photoURL} alt={user.displayName || "User"} style={styles.avatar} />
              )}
              <span style={styles.userName}>{user.displayName}</span>
              <button onClick={logout} style={styles.signOutButton}>
                <LogOut size={13} strokeWidth={2.5} />
                Sign out
              </button>
            </div>
          </div>
          <h1 style={styles.title}>
            Miami Spice<br /><span style={styles.titleAccent}>2026</span>
          </h1>
          <p style={styles.sub}>
            The standouts from 300+ menus — starred rooms, group scenes, date nights,
            and the deals worth clearing a night for. Track what you want to try, log what you've
            eaten, and see what your friends are picking.
          </p>
          <div style={styles.tracker}>
            <div style={styles.trackerPill}>
              <span style={styles.trackerNum}>{wantCount}</span>
              <span style={styles.trackerLabel}>want to eat</span>
            </div>
            <div style={styles.trackerPill}>
              <span style={styles.trackerNum}>{eatenCount}</span>
              <span style={styles.trackerLabel}>eaten</span>
            </div>
          </div>
        </div>
      </header>

      <nav style={styles.tabs}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{ ...styles.tabButton, ...(tab === t.id ? styles.tabButtonActive : {}) }}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {tab === "browse" && (
        <BrowseView
          picks={picks}
          onToggleWant={handleToggleWant}
          onMarkEaten={handleMarkEaten}
          onRemove={handleRemove}
        />
      )}

      {tab === "mylists" && (
        <MyListsView
          picks={picks}
          onToggleWant={handleToggleWant}
          onMarkEaten={handleMarkEaten}
          onRemove={handleRemove}
        />
      )}

      {tab === "friends" && <FriendsView user={user} />}

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
