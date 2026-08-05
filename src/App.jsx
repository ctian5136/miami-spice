import React, { useEffect, useState } from "react";
import { LogOut, User } from "lucide-react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { styles, keyframes, colors } from "./styles";
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
  const [profileOpen, setProfileOpen] = useState(false);

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

  return (
    <div style={styles.page}>
      <style>{keyframes}</style>

      <header style={styles.posterGrid} className="poster-grid">
        <div style={styles.posterMain} className="poster-main">
          <div style={styles.posterKicker}>Miami</div>
          <h1 style={styles.posterWord}>SPICE</h1>
          <div style={styles.posterSubcap}>25th Anniversary · Aug 1 – Sep 30, 2026</div>
        </div>
        <div style={styles.posterRail} className="poster-rail" />
        <div style={styles.posterMeta}>
          <button style={styles.posterProfile} onClick={() => setProfileOpen((o) => !o)}>
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || "User"} style={styles.posterProfileImg} />
            ) : (
              <User size={16} color={colors.accent} strokeWidth={2.5} />
            )}
          </button>
          {profileOpen && (
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
          )}

          <div style={styles.posterRule} />
          <div style={styles.posterStats}>
            <div>
              <div style={styles.statNum}>{wantCount}</div>
              <div style={styles.statLabel}>Want to eat</div>
            </div>
            <div>
              <div style={styles.statNum}>{eatenCount}</div>
              <div style={styles.statLabel}>Eaten</div>
            </div>
          </div>

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
        </div>
      </header>

      {tab === "browse" && (
        <BrowseView
          picks={picks}
          onToggleWant={handleToggleWant}
          onMarkEaten={handleMarkEaten}
          onRemove={handleRemove}
          user={user}
        />
      )}

      {tab === "mylists" && (
        <MyListsView
          picks={picks}
          onToggleWant={handleToggleWant}
          onMarkEaten={handleMarkEaten}
          onRemove={handleRemove}
          user={user}
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
