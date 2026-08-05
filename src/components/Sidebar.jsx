import React from "react";
import { colors, styles } from "../styles";

function SearchIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={active ? colors.cream : colors.text} strokeWidth="2" strokeLinecap="round" width="15" height="15">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}
function ListIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={active ? colors.cream : colors.text} strokeWidth="2" strokeLinecap="round" width="15" height="15">
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}
function FriendsIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={active ? colors.cream : colors.text} strokeWidth="2" strokeLinecap="round" width="15" height="15">
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
        <SearchIcon active={tab === "browse"} />
        Browse
      </button>

      <button
        style={{ ...styles.navRow, ...(tab === "mylists" ? styles.navRowActive : {}) }}
        onClick={() => {
          setTab("mylists");
          onOpenList(null);
        }}
      >
        <ListIcon active={tab === "mylists"} />
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
        <FriendsIcon active={tab === "friends"} />
        Friends
        {incomingCount > 0 && <span style={styles.navCountBadge}>{incomingCount}</span>}
      </button>
    </nav>
  );
}
