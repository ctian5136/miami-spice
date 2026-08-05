import React, { useEffect, useMemo, useState } from "react";
import { X, Search, Plus } from "lucide-react";
import { styles, colors } from "../styles";
import { inviteToList } from "../lib/lists";
import { searchUsers, fetchFriends } from "../lib/social";

export default function InviteModal({ list, user, onClose, onListsChanged }) {
  const [friends, setFriends] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [extraResults, setExtraResults] = useState([]);

  useEffect(() => {
    fetchFriends(user.uid).then(setFriends);
  }, [user.uid]);

  useEffect(() => {
    const q = searchText.trim();
    if (!q) {
      setExtraResults([]);
      return;
    }
    let cancelled = false;
    searchUsers(q, user.uid).then((found) => {
      if (!cancelled) setExtraResults(found);
    });
    return () => {
      cancelled = true;
    };
  }, [searchText, user.uid]);

  const people = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    const byUid = new Map();
    friends.forEach((f) => byUid.set(f.uid, f));
    extraResults.forEach((p) => byUid.set(p.uid, p));
    const all = [...byUid.values()];
    if (!q) return friends;
    return all.filter(
      (p) => (p.displayName || "").toLowerCase().includes(q) || (p.email || "").toLowerCase().includes(q)
    );
  }, [friends, extraResults, searchText]);

  const handleInvite = async (uid) => {
    await inviteToList(list.id, uid);
    await onListsChanged();
  };

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBox} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div>
            <h3 style={styles.dialogTitle}>Invite to your list</h3>
            <p style={styles.dialogSub}>
              People you invite can add and mark restaurants on <strong>{list.name}</strong>
            </p>
          </div>
          <button onClick={onClose} style={styles.removeBtn}>
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        <div style={styles.searchInputWrap}>
          <span style={styles.searchInputIcon}>
            <Search size={15} strokeWidth={2.5} />
          </span>
          <input
            style={{ ...styles.input, width: "100%", paddingLeft: 38 }}
            placeholder="Search friends or enter an email"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />
        </div>

        <p style={styles.detailSectionTitle}>{searchText.trim() ? "Search results" : "Friends"}</p>

        {people.length === 0 ? (
          <p style={styles.detailEmptyNote}>
            {searchText.trim() ? "No one found with that name/email." : "You haven't added any friends yet."}
          </p>
        ) : (
          people.map((p) => {
            const onList = list.memberIds.includes(p.uid);
            return (
              <div key={p.uid} style={styles.personRow}>
                {p.photoURL ? (
                  <img src={p.photoURL} alt="" style={styles.personAvatar} />
                ) : (
                  <div
                    style={{
                      ...styles.personAvatar,
                      background: colors.accentDark,
                      color: colors.cream,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 15,
                    }}
                  >
                    {(p.displayName || p.email || "?").charAt(0).toUpperCase()}
                  </div>
                )}
                <div style={styles.personInfo}>
                  <p style={styles.personName}>{p.displayName || p.email}</p>
                  {p.displayName && p.email && <p style={styles.personMeta}>{p.email}</p>}
                </div>
                {onList ? (
                  <span style={styles.onListLabel}>On this list</span>
                ) : (
                  <button style={styles.inviteBtn} onClick={() => handleInvite(p.uid)}>
                    <Plus size={13} strokeWidth={2.5} /> Invite
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
