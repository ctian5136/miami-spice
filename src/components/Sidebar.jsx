import React from "react";
import { colors, styles } from "../styles";

export function SearchIcon({ color = colors.text }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" width="15" height="15">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
export function ListIcon({ color = colors.text }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" width="15" height="15">
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}
export function FriendsIcon({ color = colors.text }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" width="15" height="15">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c1.2-3.5 3.6-5 5.5-5s4.3 1.5 5.5 5" />
      <circle cx="18" cy="9" r="2.4" />
      <path d="M15.8 13.2c1.6.2 3.4 1.5 4.2 3.8" />
    </svg>
  );
}

export default function Sidebar({ tab, setTab, myLists, openListId, onOpenList, incomingCount }) {
  const goList = (id) => {
    setTab("mylists");
    onOpenList(id);
  };

  return (
    <nav>
      <button
        style={{ ...styles.navRow, ...(tab === "browse" ? styles.navRowActive : {}) }}
        onClick={() => setTab("browse")}
      >
        <SearchIcon color={tab === "browse" ? colors.cream : colors.text} />
        Browse
      </button>

      <button
        style={{ ...styles.navRow, ...(tab === "mylists" ? styles.navRowActive : {}) }}
        onClick={() => {
          setTab("mylists");
          onOpenList(null);
        }}
      >
        <ListIcon color={tab === "mylists" ? colors.cream : colors.text} />
        My Lists
      </button>
      {myLists.length > 0 && (
        <div style={styles.sublist}>
          {myLists.map((l) => (
            <button
              key={l.id}
              style={{ ...styles.sublistRow, ...(tab === "mylists" && openListId === l.id ? styles.sublistRowActive : {}) }}
              onClick={() => goList(l.id)}
            >
              {l.name}
            </button>
          ))}
        </div>
      )}

      <button
        style={{ ...styles.navRow, ...(tab === "friends" ? styles.navRowActive : {}) }}
        onClick={() => setTab("friends")}
      >
        <FriendsIcon color={tab === "friends" ? colors.cream : colors.text} />
        Friends
        {incomingCount > 0 && <span style={styles.navCountBadge}>{incomingCount}</span>}
      </button>
    </nav>
  );
}
