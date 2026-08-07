import React from "react";
import { colors, styles } from "../styles";
import { SearchIcon, MapIcon, ListIcon, FriendsIcon } from "./Sidebar";

export default function MobileNav({ tab, setTab, onOpenList, incomingCount }) {
  const go = (nextTab) => {
    setTab(nextTab);
    if (nextTab === "mylists") onOpenList(null);
  };

  return (
    <nav className="mobile-nav" style={styles.mobileNav}>
      <button style={styles.mobileNavBtn} onClick={() => go("browse")}>
        <SearchIcon color={tab === "browse" ? colors.accent : colors.textSoft} />
        <span style={{ ...styles.mobileNavLabel, ...(tab === "browse" ? styles.mobileNavLabelActive : {}) }}>Browse</span>
      </button>
      <button style={styles.mobileNavBtn} onClick={() => go("map")}>
        <MapIcon color={tab === "map" ? colors.accent : colors.textSoft} />
        <span style={{ ...styles.mobileNavLabel, ...(tab === "map" ? styles.mobileNavLabelActive : {}) }}>Map</span>
      </button>
      <button style={styles.mobileNavBtn} onClick={() => go("mylists")}>
        <ListIcon color={tab === "mylists" ? colors.accent : colors.textSoft} />
        <span style={{ ...styles.mobileNavLabel, ...(tab === "mylists" ? styles.mobileNavLabelActive : {}) }}>My Lists</span>
      </button>
      <button style={{ ...styles.mobileNavBtn, position: "relative" }} onClick={() => go("friends")}>
        <FriendsIcon color={tab === "friends" ? colors.accent : colors.textSoft} />
        <span style={{ ...styles.mobileNavLabel, ...(tab === "friends" ? styles.mobileNavLabelActive : {}) }}>Friends</span>
        {incomingCount > 0 && <span style={styles.mobileNavBadge}>{incomingCount}</span>}
      </button>
    </nav>
  );
}
