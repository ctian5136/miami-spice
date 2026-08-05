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

export const keyframes = `
  @keyframes drift { 0%{transform:translate(0,0)} 50%{transform:translate(-2%,-3%)} 100%{transform:translate(0,0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @media (max-width:640px){
    .ms-hide{display:none}
    .poster-grid{grid-template-columns:1fr !important}
    .poster-rail{display:none !important}
    .poster-main{min-height:180px !important; padding-top:40px !important}
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
    background: colors.cream, padding: "64px 28px 24px",
    display: "flex", flexDirection: "column", position: "relative",
  },
  posterProfile: {
    position: "absolute", top: 24, right: 24, zIndex: 4,
    width: 34, height: 34, borderRadius: 999, padding: 0, overflow: "hidden",
    background: colors.accentSoftBg, border: `1.5px solid ${colors.accent}`,
    display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
  },
  posterProfileImg: { width: "100%", height: "100%", objectFit: "cover" },
  posterOverlay: { position: "fixed", inset: 0, zIndex: 9, background: "transparent" },
  posterProfileMenu: {
    position: "absolute", top: 66, right: 24, zIndex: 10, width: 208,
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

  tabs: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto" },
  tabButton: {
    fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 700,
    border: `1px solid ${colors.accent}`, padding: "6px 10px", color: colors.accentDark,
    borderRadius: 4, background: "none", cursor: "pointer", fontFamily: "inherit",
  },
  tabButtonActive: { background: colors.accent, color: colors.cream, borderColor: colors.accent },

  controls: { maxWidth: 1080, margin: "0 auto", padding: "22px 20px 0" },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 },
  chip: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 999, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: colors.textSoft, fontSize: 13, fontWeight: 600,
    cursor: "pointer", transition: "all 0.15s",
  },
  chipActive: { background: colors.accent, borderColor: colors.accent, color: "#fff" },
  selects: { display: "flex", gap: 10, flexWrap: "wrap" },
  select: {
    padding: "9px 14px", borderRadius: 10, border: `1.5px solid ${colors.border}`,
    background: "#fff", color: colors.text, fontSize: 13.5, fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
  },

  grid: {
    maxWidth: 1080, margin: "22px auto 0", padding: "0 20px",
    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16,
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

  badge: {
    display: "inline-flex", alignItems: "center", gap: 5, fontSize: 11, fontWeight: 700,
    padding: "4px 9px", borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.06em",
  },
  badgeWant: { background: colors.accentSoftBg, color: colors.accentDark },
  badgeEaten: { background: colors.eatenSoftBg, color: colors.eatenDark },

  eatenNotes: { fontSize: 13, lineHeight: 1.5, color: "#4A4033", background: "#fff", borderRadius: 10, padding: "10px 12px", margin: 0 },
  photoStrip: { display: "flex", gap: 6, flexWrap: "wrap" },
  photoThumb: { width: 64, height: 64, borderRadius: 10, objectFit: "cover", border: `1.5px solid ${colors.border}` },

  empty: { textAlign: "center", padding: "60px 20px", color: colors.textSoft, fontSize: 15 },
  footer: {
    maxWidth: 760, margin: "44px auto 0", padding: "0 24px",
    fontSize: 12, lineHeight: 1.6, color: "#A88968", textAlign: "center",
  },

  section: { maxWidth: 1080, margin: "0 auto", padding: "28px 20px 0" },
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
  dialogTitle: { fontFamily: "'Georgia', serif", fontSize: 21, fontWeight: 700, margin: "0 0 4px", color: colors.text },
  dialogSub: { fontSize: 13, color: colors.textSoft, margin: "0 0 18px" },
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
};
