// Cream / rust / terracotta palette.
export const colors = {
  bg: "#FBF6EE",
  text: "#2B231C",
  textSoft: "#6B5B4A",
  cream: "#FCEACB",
  accent: "#C05A12",
  accentDark: "#8B4426",
  accentSoftBg: "#F6E4CE",
  terracotta: "#CB5B41",
  eaten: "#6E7B4F",
  eatenDark: "#4F5A37",
  eatenSoftBg: "#EEF0E4",
  border: "#EADFCD",
  cardBg: "#FFFFFF",
};

// Fixed so the compact bar's rendered height always matches the sticky
// offset given to the sidebar/filters below it — no gap for scrolled
// content to peek through.
export const COMPACT_BAR_HEIGHT = 72;

export const keyframes = `
  @keyframes drift { 0%{transform:translate(0,0)} 50%{transform:translate(-2%,-3%)} 100%{transform:translate(0,0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  button { -webkit-appearance: none; appearance: none; }
  button, button:active, button:focus, button:focus-visible, a, a:focus, a:focus-visible {
    outline: none !important; -webkit-tap-highlight-color: transparent;
  }
  @media (max-width:640px){
    .ms-hide{display:none}
    .poster-grid{grid-template-columns:1fr !important}
    .poster-rail{display:none !important}
    .poster-main{min-height:180px !important; padding-top:40px !important}
    .restaurant-grid{grid-template-columns:1fr !important}
    .app-body{flex-direction:column !important}
    .sidebar-column{width:100% !important}
    .sidebar-sticky{position:static !important; margin:12px 16px !important}
    .filters-toggle-btn{display:flex !important}
    .filters-panel{display:none !important; margin-top:12px !important}
    .filters-panel.filters-panel-open{display:flex !important}
    .mobile-nav{display:flex !important}
    .page{padding-bottom:76px !important}
  }
  @media (max-width:960px) and (min-width:641px){
    .restaurant-grid{grid-template-columns:repeat(2, minmax(0, 1fr)) !important}
  }
`;

export const styles = {
  page: {
    fontFamily: "'Inter', system-ui, sans-serif",
    background: colors.bg,
    color: colors.text,
    minHeight: "100vh",
    padding: "0 0 60px",
  },
  loadingScreen: {
    fontFamily: "'Inter', system-ui, sans-serif",
    background: colors.bg,
    color: colors.textSoft,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: { fontSize: 15, fontWeight: 600 },
  signInScreen: {
    fontFamily: "'Inter', system-ui, sans-serif",
    background: colors.accent,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  signInCard: {
    maxWidth: 420,
    width: "100%",
    textAlign: "center",
    color: colors.cream,
  },
  signInKicker: {
    fontSize: 13, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase",
    color: colors.cream, opacity: 0.85, marginBottom: 6,
  },
  signInWord: {
    fontFamily: "-apple-system, system-ui, sans-serif", fontWeight: 900,
    fontSize: 96, letterSpacing: "-0.04em", lineHeight: 0.85, margin: "0 0 18px",
  },
  signInSub: { fontSize: 15, lineHeight: 1.6, opacity: 0.92, margin: "0 0 28px" },
  signInButton: {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
    padding: "13px 28px", borderRadius: 999, border: "none",
    background: colors.cream, color: colors.accentDark, fontSize: 14.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
  },

  posterGrid: {
    display: "grid", gridTemplateColumns: "1fr 3px 330px", minHeight: 340,
    width: "100%",
  },
  posterMain: {
    background: colors.accent, position: "relative", overflow: "hidden",
    display: "flex", flexDirection: "column", justifyContent: "center",
    padding: "36px 0 24px 48px",
  },
  posterKicker: {
    position: "absolute", top: 34, left: 48,
    fontSize: 12, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase",
    color: colors.cream, opacity: 0.85,
  },
  posterWord: {
    fontFamily: "-apple-system, system-ui, sans-serif", fontWeight: 900,
    fontSize: "clamp(70px, 12vw, 170px)", letterSpacing: "-0.04em", lineHeight: 0.75,
    color: colors.cream, margin: 0, whiteSpace: "nowrap",
  },
  posterSubcap: {
    fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
    color: "rgba(252,234,203,0.78)", marginTop: 24,
  },
  posterRail: { background: colors.terracotta },
  posterMeta: {
    background: colors.cream, padding: "28px 28px 24px",
    display: "flex", flexDirection: "column", position: "relative",
  },
  posterMetaRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 16 },
  posterMetaTitle: {
    fontSize: 12, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase",
    color: colors.accentDark, margin: 0, lineHeight: 1.6,
  },
  posterProfile: {
    width: 34, height: 34, borderRadius: 999, padding: 0, overflow: "hidden", flexShrink: 0,
    background: colors.accentSoftBg, border: `1.5px solid ${colors.accent}`,
    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
  },
  posterProfileImg: { width: "100%", height: "100%", objectFit: "cover" },
  posterOverlay: { position: "fixed", inset: 0, zIndex: 9, background: "transparent" },
  posterProfileMenu: {
    position: "absolute", top: 42, right: 0, zIndex: 10, width: 208,
    background: "#fff", border: `1px solid ${colors.border}`, borderRadius: 10,
    boxShadow: "0 10px 28px rgba(43,24,10,0.18)", overflow: "hidden",
  },
  profileWho: {
    padding: "11px 14px 9px", fontSize: 11.5, color: colors.textSoft,
    borderBottom: `1px solid ${colors.border}`,
  },
  profileWhoName: { display: "block", fontSize: 13, color: colors.text, fontWeight: 700, marginTop: 1 },
  profileMenuBtn: {
    display: "block", width: "100%", textAlign: "left", padding: "10px 14px", fontSize: 12.5,
    background: "none", border: "none", color: colors.accentDark, fontFamily: "inherit", cursor: "pointer",
  },
  posterRule: { height: 1, background: colors.accent, opacity: 0.3, margin: "0 0 18px" },
  posterStats: { display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 },
  statNum: {
    fontFamily: "-apple-system, system-ui, sans-serif", fontWeight: 900, fontSize: 40,
    lineHeight: 0.85, color: colors.accent,
  },
  statLabel: {
    marginTop: 3, fontSize: 11, letterSpacing: "0.03em", textTransform: "uppercase", color: colors.accentDark,
  },

  appShell: { maxWidth: 1520, margin: "0 auto" },
  appBody: { display: "flex" },
  mainCol: { flex: 1, minWidth: 0 },

  sidebarColumn: {
    width: 248, flexShrink: 0,
  },
  sidebarSticky: {
    position: "sticky",
    margin: "18px 12px 24px 24px", padding: "14px 12px", boxSizing: "border-box",
    background: colors.cardBg, borderRadius: 20,
    boxShadow: "0 10px 30px rgba(59,46,34,0.10)",
  },
  navRow: {
    display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 14,
    marginBottom: 4, fontSize: 15, fontWeight: 700, color: colors.text,
    cursor: "pointer", background: "none", border: "none",
    width: "100%", textAlign: "left", fontFamily: "inherit",
  },
  navRowActive: { background: colors.accent, color: colors.cream },
  navCountBadge: {
    marginLeft: "auto", fontSize: 10, fontWeight: 700, background: colors.terracotta,
    color: colors.cream, borderRadius: 999, padding: "1px 6px",
  },
  sublist: { margin: "2px 0 8px 33px", display: "flex", flexDirection: "column", gap: 2 },
  sublistRow: {
    fontSize: 11.5, color: "#A9773E", padding: "5px 8px", borderRadius: 6, cursor: "pointer",
    background: "none", border: "none", textAlign: "left", fontFamily: "inherit", display: "block", width: "100%",
  },
  sublistRowActive: { background: "rgba(192,90,18,0.08)", color: colors.accentDark, fontWeight: 700 },
  navDivider: { height: 1, background: colors.border, margin: "12px 4px" },

  compactBar: {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 30, height: COMPACT_BAR_HEIGHT,
    background: colors.accent, padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between",
    transform: "translateY(-100%)", opacity: 0, transition: "transform 0.12s ease-out, opacity 0.12s ease-out",
    pointerEvents: "none", boxSizing: "border-box",
  },
  compactBarVisible: { transform: "translateY(0)", opacity: 1, pointerEvents: "auto" },
  compactWord: { fontFamily: "-apple-system, system-ui, sans-serif", fontWeight: 900, fontSize: 20, color: colors.cream, letterSpacing: "-0.01em" },
  compactWordKicker: { opacity: 0.7, fontWeight: 700, fontSize: 11, marginRight: 6, textTransform: "uppercase", letterSpacing: "0.2em" },
  compactRight: { display: "flex", alignItems: "center", gap: 22 },
  compactStats: { display: "flex", alignItems: "center", gap: 18 },
  compactStat: { display: "flex", alignItems: "baseline", gap: 5 },
  compactStatNum: { fontFamily: "-apple-system, system-ui, sans-serif", fontWeight: 900, fontSize: 17, color: colors.cream },
  compactStatLabel: {
    fontSize: 10.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
    color: "rgba(252,234,203,0.75)",
  },
  compactAvatarBtn: {
    width: 34, height: 34, borderRadius: 999, padding: 0, overflow: "hidden", flexShrink: 0,
    background: colors.accentSoftBg, border: `1.5px solid ${colors.cream}`,
    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
  },

  controls: {
    padding: "18px 24px 14px", position: "sticky", zIndex: 20,
    background: colors.bg,
  },
  mobileNav: {
    display: "none", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 30,
    background: "#fff", borderTop: `1px solid ${colors.border}`,
    padding: "8px 8px calc(6px + env(safe-area-inset-bottom))",
    boxShadow: "0 -6px 16px rgba(59,46,34,0.08)",
  },
  mobileNavBtn: {
    flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
    background: "none", border: "none", padding: "6px 4px", cursor: "pointer", fontFamily: "inherit",
  },
  mobileNavLabel: { fontSize: 10.5, fontWeight: 600, color: colors.textSoft },
  mobileNavLabelActive: { color: colors.accent, fontWeight: 700 },
  mobileNavBadge: {
    position: "absolute", top: 2, right: "22%", minWidth: 15, height: 15, borderRadius: 999,
    background: colors.terracotta, color: colors.cream, fontSize: 9.5, fontWeight: 700,
    display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3px",
  },
  filtersToggleBtn: {
    display: "none", alignItems: "center", justifyContent: "center", gap: 8,
    width: "100%", padding: "11px 16px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: colors.text, fontSize: 13.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit",
  },
  filtersPanel: { display: "flex", flexDirection: "column" },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 },
  chip: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 999, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: colors.textSoft, fontSize: 13, fontWeight: 600,
    cursor: "pointer", transition: "all 0.15s",
  },
  chipActive: { background: colors.accent, borderColor: colors.accent, color: "#fff" },
  selects: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 4 },
  select: {
    padding: "9px 40px 9px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    background: `#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236B5B4A' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 14px center`,
    backgroundSize: "13px", appearance: "none", WebkitAppearance: "none", MozAppearance: "none",
    color: colors.text, fontSize: 13.5, fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
  },

  grid: {
    margin: "22px 0 0", padding: "0 24px",
    display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16,
  },
  card: {
    textAlign: "left", border: `1.5px solid ${colors.border}`,
    background: colors.cardBg, borderRadius: 18, padding: 20,
    display: "flex", flexDirection: "column", gap: 12,
    transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
    fontFamily: "inherit", boxShadow: "0 1px 2px rgba(59,46,34,0.05)",
  },
  cardWant: { borderColor: colors.accent, background: "#FBF3EA", boxShadow: "0 6px 20px rgba(169,104,63,0.14)" },
  cardEaten: { borderColor: colors.eaten, background: colors.eatenSoftBg, boxShadow: "0 6px 20px rgba(110,123,79,0.14)" },
  cardTop: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" },
  cardHead: { flex: 1 },
  starRow: { display: "flex", gap: 3, marginBottom: 6 },
  cardName: { fontFamily: "'Georgia', serif", fontSize: 19, fontWeight: 700, margin: 0, lineHeight: 1.15, color: colors.text },
  metaRow: { display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontSize: 12.5, color: colors.textSoft, fontWeight: 500 },
  metaHood: { display: "inline-flex", alignItems: "center", gap: 3 },
  metaDot: { opacity: 0.5 },
  cardNote: { fontSize: 13.5, lineHeight: 1.5, color: "#5C4F40", margin: 0, flex: 1 },
  cardFoot: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, paddingTop: 4 },
  priceTag: {
    fontSize: 13, fontWeight: 700, color: colors.accentDark,
    background: colors.accentSoftBg, padding: "5px 11px", borderRadius: 8,
  },
  mealTag: { fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.textSoft },

  cardActions: { display: "flex", gap: 8, flexWrap: "wrap" },
  actionBtn: {
    flex: 1, minWidth: 100, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
    padding: "9px 12px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: colors.textSoft, fontSize: 12.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit",
  },
  actionBtnWant: { background: colors.accent, borderColor: colors.accent, color: "#fff" },
  actionBtnEaten: { background: colors.eaten, borderColor: colors.eaten, color: "#fff" },
  removeBtn: {
    padding: "9px 10px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: "#9A7358", fontSize: 12.5, fontWeight: 700, cursor: "pointer",
    fontFamily: "inherit",
  },
  removeBtnHidden: { visibility: "hidden", pointerEvents: "none" },

  badge: {
    display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700,
    padding: "4px 9px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em",
  },
  badgeWant: { background: colors.accentSoftBg, color: colors.accentDark },
  badgeEaten: { background: colors.eatenSoftBg, color: colors.eatenDark },
  badgeHidden: { visibility: "hidden" },

  eatenNotes: { fontSize: 13, lineHeight: 1.5, color: "#4A4033", background: "#fff", borderRadius: 10, padding: "10px 12px", margin: 0 },
  photoStrip: { display: "flex", gap: 6, flexWrap: "wrap" },
  photoThumb: { width: 64, height: 64, borderRadius: 10, objectFit: "cover", border: `1.5px solid ${colors.border}` },

  empty: { textAlign: "center", padding: "60px 20px", color: colors.textSoft, fontSize: 15 },
  footer: {
    maxWidth: 760, margin: "44px auto 0", padding: "0 24px",
    fontSize: 12, lineHeight: 1.6, color: "#A88968", textAlign: "center",
  },

  section: { padding: "28px 24px 0" },
  sectionTitle: { fontFamily: "'Georgia', serif", fontSize: 24, fontWeight: 700, margin: "0 0 4px", color: colors.text },
  sectionSub: { fontSize: 13.5, color: colors.textSoft, margin: "0 0 18px" },

  dialogOverlay: {
    position: "fixed", inset: 0, background: "rgba(43,35,28,0.5)",
    display: "flex", alignItems: "center", justifyContent: "center", padding: 20, zIndex: 50,
    animation: "fadeIn 0.15s ease-out",
  },
  dialogBox: {
    background: "#fff", borderRadius: 20, padding: 28, maxWidth: 460, width: "100%",
    maxHeight: "88vh", overflowY: "auto", boxShadow: "0 24px 60px rgba(43,35,28,0.3)",
  },
  dialogBoxWide: {
    background: "#fff", borderRadius: 20, padding: 28, maxWidth: 820, width: "100%",
    maxHeight: "88vh", overflowY: "auto", boxShadow: "0 24px 60px rgba(43,35,28,0.3)",
  },
  detailGrid: { display: "flex", gap: 28, flexWrap: "wrap" },
  detailMain: { flex: "1 1 320px", minWidth: 260 },
  detailFriendsCol: {
    flex: "1 1 220px", minWidth: 220,
    borderLeft: `1px solid ${colors.border}`, paddingLeft: 24,
  },
  friendReviewRow: { display: "flex", gap: 10, marginBottom: 16 },
  friendReviewAvatar: { width: 32, height: 32, borderRadius: 999, objectFit: "cover", flexShrink: 0, background: colors.accentSoftBg },
  friendReviewName: { fontSize: 13, fontWeight: 700, color: colors.text, margin: "0 0 4px" },
  dialogTitle: { fontFamily: "'Georgia', serif", fontSize: 21, fontWeight: 700, margin: "0 0 4px", color: colors.text },
  dialogSub: { fontSize: 13, color: colors.textSoft, margin: "0 0 18px" },

  tutorialIconWrap: {
    width: 56, height: 56, borderRadius: 999, background: colors.accentSoftBg,
    display: "flex", alignItems: "center", justifyContent: "center", margin: "4px auto 20px",
  },
  tutorialDots: { display: "flex", justifyContent: "center", gap: 7, marginBottom: 22 },
  tutorialDot: {
    width: 7, height: 7, borderRadius: 999, background: colors.border,
    border: "none", padding: 0, cursor: "pointer",
  },
  tutorialDotActive: { background: colors.accent, width: 18 },
  tutorialNavRow: { display: "flex", justifyContent: "space-between", gap: 10 },
  label: { fontSize: 12.5, fontWeight: 700, color: colors.textSoft, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6, display: "block" },
  textarea: {
    width: "100%", minHeight: 90, borderRadius: 12, border: `1.5px solid ${colors.border}`,
    padding: "10px 12px", fontFamily: "inherit", fontSize: 13.5, color: colors.text, resize: "vertical",
  },
  fileInputWrap: {
    border: `1.5px dashed ${colors.border}`, borderRadius: 12, padding: 14, textAlign: "center",
    fontSize: 12.5, color: colors.textSoft, cursor: "pointer",
  },
  dialogActions: { display: "flex", gap: 10, marginTop: 20, justifyContent: "flex-end" },
  primaryBtn: {
    padding: "10px 20px", borderRadius: 10, border: "none", background: colors.eaten,
    color: "#fff", fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  },
  secondaryBtn: {
    padding: "10px 20px", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: "#fff",
    color: colors.textSoft, fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  },
  errorText: { fontSize: 12.5, color: "#A9423F", margin: "8px 0 0" },

  listPickerRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "14px 16px",
    borderRadius: 16, border: `1.5px solid ${colors.border}`, marginBottom: 10, background: colors.cardBg,
  },
  listPickerRowChecked: { borderColor: colors.eaten, background: colors.eatenSoftBg },
  listPickerName: { fontFamily: "'Georgia', serif", fontSize: 18, fontWeight: 700, color: colors.text, margin: 0 },
  listPickerRowMeta: {
    display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: colors.textSoft, marginTop: 3,
  },
  listPickerMeta: { fontSize: 11.5, color: colors.textSoft },
  listPickerAddBtn: {
    display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0,
    padding: "9px 16px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: colors.textSoft, fontSize: 13, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit",
  },
  listPickerAddedBtn: {
    borderColor: colors.eaten, background: colors.eatenSoftBg, color: colors.eatenDark,
  },
  createListLink: {
    display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6,
    background: "none", border: "none", padding: 0, color: colors.accent,
    fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  },
  dialogDoneBtn: { width: "100%", padding: "13px 20px", borderRadius: 12, fontSize: 14.5, marginTop: 18 },
  newListRow: { display: "flex", gap: 8, marginTop: 14 },

  listsGrid: {
    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14, marginBottom: 8,
  },
  listCard: {
    textAlign: "left", border: `1.5px solid ${colors.border}`, background: colors.cardBg,
    borderRadius: 16, padding: 18, cursor: "pointer", fontFamily: "inherit",
    display: "flex", flexDirection: "column", gap: 8,
  },
  listCardName: { fontFamily: "'Georgia', serif", fontSize: 17, fontWeight: 700, margin: 0, color: colors.text },
  listCardMeta: { fontSize: 12, color: colors.textSoft },
  listCardAvatars: { display: "flex" },
  listCardAvatarImg: {
    width: 24, height: 24, borderRadius: 999, objectFit: "cover",
    border: `2px solid ${colors.cardBg}`, marginLeft: -8, background: colors.accentSoftBg,
  },

  listHeaderRow: {
    display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 4,
  },
  listMembersRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" },

  commentRow: { display: "flex", gap: 8, marginBottom: 12 },
  commentAvatar: { width: 26, height: 26, borderRadius: 999, objectFit: "cover", flexShrink: 0, background: colors.accentSoftBg },
  commentAuthor: { fontSize: 12, fontWeight: 700, color: colors.text, margin: 0 },
  commentText: { fontSize: 13, color: colors.text, margin: "2px 0 0", lineHeight: 1.45 },
  commentForm: { display: "flex", gap: 8, marginTop: 10 },

  detailLinks: { display: "flex", gap: 8, flexWrap: "wrap", margin: "16px 0" },
  detailLinkBtn: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "9px 14px", borderRadius: 10, border: `1.5px solid ${colors.accent}`,
    background: colors.accentSoftBg, color: colors.accentDark, fontSize: 12.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit", textDecoration: "none",
  },
  detailSectionTitle: {
    fontSize: 11.5, fontWeight: 700, color: colors.textSoft, textTransform: "uppercase",
    letterSpacing: "0.06em", margin: "18px 0 8px",
  },
  spiceMenuList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 },
  spiceMenuItem: {
    fontSize: 13.5, lineHeight: 1.5, color: colors.text, padding: "8px 12px",
    background: colors.bg, borderRadius: 8, border: `1px solid ${colors.border}`,
  },
  detailEmptyNote: { fontSize: 12.5, color: colors.textSoft, fontStyle: "italic" },

  searchRow: { display: "flex", gap: 8, marginBottom: 18 },
  input: {
    flex: 1, padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    fontFamily: "inherit", fontSize: 13.5, color: colors.text,
  },

  personRow: {
    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
    border: `1.5px solid ${colors.border}`, borderRadius: 14, background: "#fff", marginBottom: 10,
  },
  personAvatar: { width: 40, height: 40, borderRadius: 999, objectFit: "cover", flexShrink: 0, background: colors.accentSoftBg },
  personInfo: { flex: 1, minWidth: 0 },
  personName: { fontSize: 14.5, fontWeight: 700, color: colors.text, margin: 0 },
  personMeta: { fontSize: 12, color: colors.textSoft, margin: "2px 0 0" },
  personActions: { display: "flex", gap: 8, flexShrink: 0 },

  inviteBtn: {
    display: "inline-flex", alignItems: "center", gap: 6, flexShrink: 0,
    padding: "8px 14px", borderRadius: 10, border: "none", background: colors.accent,
    color: "#fff", fontSize: 12.5, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  },
  onListLabel: { fontSize: 12.5, fontWeight: 600, color: colors.textSoft, flexShrink: 0 },
  searchInputWrap: { position: "relative", marginBottom: 18 },
  searchInputIcon: {
    position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
    color: colors.textSoft, pointerEvents: "none", display: "flex",
  },
};
