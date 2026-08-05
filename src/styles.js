// Warm neutral / cream palette (no bright red-orange).
export const colors = {
  bg: "#FBF6EE",
  text: "#2B231C",
  textSoft: "#6B5B4A",
  heroDark: "#3B2E22",
  heroMid: "#7A5C42",
  heroLight: "#C9AD82",
  gold: "#D9B26B",
  accent: "#A9683F",
  accentDark: "#7A4B2A",
  accentSoftBg: "#F3E4D0",
  eaten: "#6E7B4F",
  eatenDark: "#4F5A37",
  eatenSoftBg: "#EEF0E4",
  border: "#EADFCD",
  cardBg: "#FFFFFF",
};

export const keyframes = `
  @keyframes drift { 0%{transform:translate(0,0)} 50%{transform:translate(-2%,-3%)} 100%{transform:translate(0,0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @media (max-width:640px){ .ms-hide{display:none} }
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
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Inter', system-ui, sans-serif",
    background: `linear-gradient(135deg, ${colors.heroDark} 0%, ${colors.heroMid} 45%, ${colors.heroLight} 100%)`,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  signInCard: {
    position: "relative",
    maxWidth: 440,
    width: "100%",
    textAlign: "center",
    color: "#FBF6EE",
    padding: "48px 32px",
  },
  signInTitle: {
    fontFamily: "'Georgia', serif", fontSize: 44, lineHeight: 1,
    margin: "0 0 18px", fontWeight: 700, letterSpacing: "-0.02em",
  },
  signInSub: { fontSize: 15, lineHeight: 1.6, opacity: 0.92, margin: "0 0 28px" },
  signInButton: {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
    padding: "13px 28px", borderRadius: 999, border: "none",
    background: "#fff", color: colors.accentDark, fontSize: 14.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    background: `linear-gradient(135deg, ${colors.heroDark} 0%, ${colors.heroMid} 45%, ${colors.heroLight} 100%)`,
    padding: "56px 28px 48px",
    color: "#FBF6EE",
  },
  heat: {
    position: "absolute", inset: "-40%",
    background: "radial-gradient(circle at 70% 30%, rgba(217,178,107,0.4), transparent 45%), radial-gradient(circle at 20% 80%, rgba(122,92,66,0.35), transparent 50%)",
    animation: "drift 14s ease-in-out infinite",
  },
  heroInner: { position: "relative", maxWidth: 1080, margin: "0 auto" },
  headerUserRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexWrap: "wrap", gap: 12, marginBottom: 16,
  },
  userRow: { display: "flex", alignItems: "center", gap: 10 },
  avatar: { width: 26, height: 26, borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.4)", objectFit: "cover" },
  userName: { fontSize: 13, fontWeight: 600, opacity: 0.92 },
  signOutButton: {
    display: "inline-flex", alignItems: "center", gap: 5,
    padding: "6px 12px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.35)",
    background: "rgba(0,0,0,0.18)", color: "#FBF6EE", fontSize: 12, fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
  },
  eyebrow: {
    fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
    fontWeight: 700, color: colors.gold, marginBottom: 16,
  },
  title: {
    fontFamily: "'Georgia', serif", fontSize: 52, lineHeight: 0.98,
    margin: 0, fontWeight: 700, letterSpacing: "-0.02em",
  },
  titleAccent: { color: colors.gold, fontStyle: "italic" },
  sub: { fontSize: 15.5, lineHeight: 1.55, maxWidth: 520, marginTop: 18, opacity: 0.92 },
  tracker: {
    marginTop: 26, display: "flex", flexWrap: "wrap", gap: 10,
  },
  trackerPill: {
    display: "inline-flex", alignItems: "baseline", gap: 8,
    background: "rgba(0,0,0,0.22)", padding: "10px 18px", borderRadius: 999,
  },
  trackerNum: { fontSize: 24, fontWeight: 800, fontFamily: "'Georgia', serif", color: colors.gold },
  trackerLabel: { fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.85 },

  tabs: {
    maxWidth: 1080, margin: "0 auto", padding: "0 20px", display: "flex", gap: 6,
    marginTop: -22, position: "relative", zIndex: 1,
  },
  tabButton: {
    padding: "10px 18px", borderRadius: "12px 12px 0 0", border: "none",
    background: "rgba(255,255,255,0.55)", color: colors.textSoft, fontSize: 13.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit",
  },
  tabButtonActive: { background: colors.cardBg, color: colors.text },

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
