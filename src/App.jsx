import React, { useState, useEffect, useMemo } from "react";
import { Star, MapPin, Users, Heart, Tag, Sparkles, Check, DollarSign, LogOut } from "lucide-react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "./firebase";

const RESTAURANTS = [
  // ---- MICHELIN ----
  { name: "L'Atelier de Joël Robuchon", stars: 2, hood: "Design District", cuisine: "French", price: "Reserve experience", meal: "Dinner", tags: ["michelin", "couple", "reserve", "splurge"], note: "Florida's only two-star. A signature Reserve experience — the counter-side splurge to end the season on." },
  { name: "Cote Miami", stars: 1, hood: "Design District", cuisine: "Korean Steakhouse", price: "$40 lunch", meal: "Lunch", tags: ["michelin", "group", "deal", "highly-rated"], note: "Still one of the best values on the list. Dry-aged beef, bibimbap, steak tartare, with wagyu-paella upgrades. Lunch only." },
  { name: "Le Jardinier Miami", stars: 1, hood: "Design District", cuisine: "French", price: "$40 lunch / $65 dinner", meal: "Both", tags: ["michelin", "couple", "highly-rated"], note: "Serene, vegetable-forward, gorgeous room — the most romantic starred pick. Dorado crudo, steelhead trout, wagyu picanha. Tue–Sun." },
  { name: "Stubborn Seed", stars: 1, hood: "South Beach", cuisine: "New American", price: "$65 dinner", meal: "Dinner", tags: ["michelin", "highly-rated"], note: "Top Chef's Jeremy Ford. Foie gras torchon, signature truffle chicken, citrus pavlova. Sun–Thu." },
  { name: "Ariete", stars: 1, hood: "Coconut Grove", cuisine: "French-Cuban", price: "$65 dinner", meal: "Dinner", tags: ["michelin", "couple", "highly-rated"], note: "Chef Michael Beltran's bold French-Cuban fusion. Cozy, refined, date-night energy." },
  { name: "Azabu Miami Beach", stars: 1, hood: "Miami Beach", cuisine: "Japanese", price: "$65 dinner", meal: "Dinner", tags: ["michelin", "highly-rated"], note: "Michelin-recognized Japanese with a hidden omakase counter (The Den). Refined sushi in a lively room." },
  { name: "Double Luck", stars: 1, hood: "Miami", cuisine: "Chinese", price: "$65 dinner", meal: "Dinner", tags: ["michelin", "group", "highly-rated"], note: "Michelin-recognized modern Chinese; sharp cooking built for a shared table." },
  { name: "Tâm Tâm", stars: 0, hood: "Downtown", cuisine: "Vietnamese", price: "$50 dinner", meal: "Dinner", tags: ["michelin", "new", "deal"], note: "Bib Gourmand Vietnamese, first-time Spice participant. Great food, gentler price." },

  // ---- MICHELIN RECOMMENDED / BIB ----
  { name: "Joe's Stone Crab", stars: 0, hood: "South Beach", cuisine: "Seafood", price: "$40 lunch / $65 dinner", meal: "Both", tags: ["recommended", "group", "highly-rated"], note: "Miami institution. Michelin-recommended. Varying days." },
  { name: "Makoto", stars: 0, hood: "Bal Harbour", cuisine: "Japanese", price: "$65 dinner", meal: "Dinner", tags: ["recommended", "highly-rated"], note: "Stephen Starr & Iron Chef Makoto Okuwa at Bal Harbour Shops. Polished, upscale Japanese." },
  { name: "Daniel's, a Florida Steakhouse", stars: 0, hood: "Coral Gables", cuisine: "Steakhouse", price: "$40 lunch / $65 dinner", meal: "Both", tags: ["recommended", "deal", "group"], note: "Warm, bright room. Rare Spice steakhouse that includes a proper filet with no upcharge." },
  { name: "Michael's Genuine", stars: 0, hood: "Design District", cuisine: "New American", price: "$40 lunch / $50 dinner", meal: "Both", tags: ["recommended", "deal"], note: "Bib Gourmand. Full-sized dishes built for Spice — not shrunk portions." },
  { name: "Cafe La Trova", stars: 0, hood: "Little Havana", cuisine: "Cuban", price: "$40 / $50", meal: "Both", tags: ["recommended", "group"], note: "Award-winning Cuban with legendary cocktails and live energy." },

  // ---- GROUP / SCENE ----
  { name: "Mayami Wynwood", stars: 0, hood: "Wynwood", cuisine: "Mexican-Asian", price: "$62 dinner", meal: "Dinner", tags: ["group", "new"], note: "Fusion + nightlife in one stop — live fire shows and DJs with dinner. Sun–Thu." },
  { name: "Queen Miami Beach", stars: 0, hood: "Miami Beach", cuisine: "Steakhouse / Mediterranean", price: "$65 dinner", meal: "Dinner", tags: ["group", "splurge"], note: "Glam, all-the-stops dinner in a dramatic room." },
  { name: "Maple & Ash", stars: 0, hood: "Miami", cuisine: "Steakhouse", price: "$65 dinner", meal: "Dinner", tags: ["group", "new", "splurge"], note: "First-time participant. Lively, indulgent steakhouse energy." },
  { name: "Rusty Pelican", stars: 0, hood: "Key Biscayne", cuisine: "Seafood", price: "$40 / $65", meal: "Both", tags: ["group", "couple"], note: "Waterfront skyline views — a Miami classic for a crowd." },
  { name: "Kiki on the River", stars: 0, hood: "Miami River", cuisine: "Greek", price: "$65 dinner", meal: "Dinner", tags: ["group"], note: "Riverfront Greek party spot." },
  { name: "Red Rooster Overtown", stars: 0, hood: "Overtown", cuisine: "Soul / American", price: "$40 / $50", meal: "Both", tags: ["group", "highly-rated"], note: "Marcus Samuelsson's soulful, crowd-friendly room." },
  { name: "DOYA", stars: 0, hood: "Wynwood", cuisine: "Aegean", price: "Signature dinner", meal: "Dinner", tags: ["group", "reserve"], note: "Chef-hosted family-style Aegean dinner — a Reserve signature experience." },

  // ---- COUPLE / ROMANTIC ----
  { name: "Lido at The Surf Club", stars: 0, hood: "Surfside", cuisine: "Italian / Mediterranean", price: "$65 dinner", meal: "Dinner", tags: ["couple", "highly-rated"], note: "Go just to sit in that historic beachfront dining room. Sun–Thu." },
  { name: "Cecconi's", stars: 0, hood: "Miami Beach", cuisine: "Italian", price: "$65 dinner", meal: "Dinner", tags: ["couple", "highly-rated"], note: "Soho Beach House's romantic courtyard Italian — a standout this year." },

  // ---- BUZZY NEW ----
  { name: "Uchi", stars: 0, hood: "Wynwood", cuisine: "Japanese", price: "$65 dinner", meal: "Dinner", tags: ["new", "highly-rated", "reserve"], note: "James Beard chef Tyson Cole. Also offering an intimate omakase Reserve experience." },
  { name: "Uchiko Miami Beach", stars: 0, hood: "Miami Beach", cuisine: "Japanese", price: "$65 dinner", meal: "Dinner", tags: ["new", "highly-rated", "reserve"], note: "Uchi's sister; spicy crunchy tuna, plus an omakase Reserve option." },
  { name: "Leonardo", stars: 0, hood: "Miami", cuisine: "Italian", price: "$65 dinner", meal: "Dinner", tags: ["new"], note: "Spice debut. 1930s–50s Italian-American glamour — burrata, polpette, linguini Nerano." },
  { name: "Bagatelle Miami River", stars: 0, hood: "Miami River", cuisine: "French", price: "$65 dinner", meal: "Dinner", tags: ["new", "group"], note: "New for 2026. Riverside French-Med party dining. Wed–Sat." },
  { name: "Zuma", stars: 0, hood: "Downtown", cuisine: "Japanese", price: "$40 / $65", meal: "Both", tags: ["highly-rated", "splurge"], note: "Contemporary izakaya — karaage, black cod gyoza, salmon teriyaki. Polished and reliable." },
  { name: "Nobu Miami", stars: 0, hood: "Miami Beach", cuisine: "Japanese", price: "$65 dinner", meal: "Dinner", tags: ["highly-rated", "splurge"], note: "The high-end sushi standard." },
  { name: "Chef Adrianne's Vineyard", stars: 0, hood: "West Kendall", cuisine: "New American", price: "Chef's table", meal: "Dinner", tags: ["reserve", "couple"], note: "Interactive chef's-table Reserve experience for just 10 guests." },
  { name: "SORA by Hotel Collection", stars: 0, hood: "Miami", cuisine: "Japanese", price: "Reserve experience", meal: "Dinner", tags: ["reserve", "group"], note: "Bluefin tuna cutting ceremony — a theatrical Reserve signature." },
];

const FILTERS = [
  { id: "all", label: "Everything", icon: Sparkles },
  { id: "michelin", label: "Michelin", icon: Star },
  { id: "recommended", label: "Recommended", icon: Star },
  { id: "couple", label: "For couples", icon: Heart },
  { id: "group", label: "For groups", icon: Users },
  { id: "highly-rated", label: "Highly rated", icon: Sparkles },
  { id: "deal", label: "Best deals", icon: Tag },
  { id: "new", label: "Buzzy & new", icon: Sparkles },
  { id: "reserve", label: "Reserve ($95+)", icon: DollarSign },
  { id: "splurge", label: "Splurge", icon: DollarSign },
];

const HOODS = ["All areas", "Design District", "Coconut Grove", "Miami Beach", "South Beach", "Coral Gables", "Wynwood", "Surfside", "Bal Harbour", "Key Biscayne", "Little Havana", "Overtown", "Miami River", "Downtown", "West Kendall", "Miami"];

export default function MiamiSpicePlanner() {
  const [filter, setFilter] = useState("all");
  const [hood, setHood] = useState("All areas");
  const [meal, setMeal] = useState("All");
  const [booked, setBooked] = useState({});

  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthReady(true);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      setBooked({});
      return;
    }
    (async () => {
      const snap = await getDoc(doc(db, "userPicks", user.uid));
      setBooked(snap.exists() ? (snap.data().booked || {}) : {});
    })();
  }, [user]);

  const login = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);

  const toggle = async (name) => {
    const next = { ...booked, [name]: !booked[name] };
    setBooked(next);
    if (user) {
      await setDoc(doc(db, "userPicks", user.uid), { booked: next }, { merge: true });
    }
  };

  const list = useMemo(() => {
    return RESTAURANTS.filter((r) => {
      if (filter !== "all" && !r.tags.includes(filter)) return false;
      if (hood !== "All areas" && r.hood !== hood) return false;
      if (meal === "Lunch" && r.meal === "Dinner") return false;
      if (meal === "Dinner" && r.meal === "Lunch") return false;
      return true;
    }).sort((a, b) => b.stars - a.stars);
  }, [filter, hood, meal]);

  const bookedCount = Object.values(booked).filter(Boolean).length;

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

      {/* HERO */}
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
            and the deals worth clearing a night for. Lunch $40, dinner $50–$65, new Reserve
            tier from $95. Tap a card to add it to your list.
          </p>
          <div style={styles.tracker}>
            <span style={styles.trackerNum}>{bookedCount}</span>
            <span style={styles.trackerLabel}>on your list</span>
          </div>
        </div>
      </header>

      {/* CONTROLS */}
      <div style={styles.controls}>
        <div style={styles.chips}>
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const active = filter === f.id;
            return (
              <button key={f.id} onClick={() => setFilter(f.id)}
                style={{ ...styles.chip, ...(active ? styles.chipActive : {}) }}>
                <Icon size={13} strokeWidth={2.5} />
                {f.label}
              </button>
            );
          })}
        </div>
        <div style={styles.selects}>
          <select value={hood} onChange={(e) => setHood(e.target.value)} style={styles.select}>
            {HOODS.map((h) => <option key={h}>{h}</option>)}
          </select>
          <select value={meal} onChange={(e) => setMeal(e.target.value)} style={styles.select}>
            {["All", "Lunch", "Dinner"].map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
      </div>

      {/* GRID */}
      <div style={styles.grid}>
        {list.map((r) => {
          const isBooked = !!booked[r.name];
          return (
            <button key={r.name} onClick={() => toggle(r.name)}
              style={{ ...styles.card, ...(isBooked ? styles.cardBooked : {}) }}>
              <div style={styles.cardTop}>
                <div style={styles.cardHead}>
                  {r.stars > 0 && (
                    <div style={styles.starRow}>
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <Star key={i} size={14} fill="#E8442B" color="#E8442B" strokeWidth={0} />
                      ))}
                    </div>
                  )}
                  <h3 style={styles.cardName}>{r.name}</h3>
                  <div style={styles.metaRow}>
                    <span style={styles.metaHood}><MapPin size={11} strokeWidth={2.5} />{r.hood}</span>
                    <span style={styles.metaDot}>·</span>
                    <span>{r.cuisine}</span>
                  </div>
                </div>
                <div style={{ ...styles.checkBubble, ...(isBooked ? styles.checkBubbleOn : {}) }}>
                  {isBooked && <Check size={15} strokeWidth={3.5} color="#fff" />}
                </div>
              </div>
              <p style={styles.cardNote}>{r.note}</p>
              <div style={styles.cardFoot}>
                <span style={styles.priceTag}>{r.price}</span>
                <span style={styles.mealTag}>{r.meal}</span>
              </div>
            </button>
          );
        })}
      </div>

      {list.length === 0 && (
        <div style={styles.empty}>No spots match those filters. Loosen one to see more.</div>
      )}

      <footer style={styles.footer}>
        Days, prices & menus vary by restaurant and can change — drinks, tax & tip aren't included.
        Confirm each on the official Miami Spice site before booking.
      </footer>
    </div>
  );
}

const keyframes = `
  @keyframes drift { 0%{transform:translate(0,0)} 50%{transform:translate(-2%,-3%)} 100%{transform:translate(0,0)} }
  @media (max-width:640px){ .ms-hide{display:none} }
`;

const styles = {
  page: {
    fontFamily: "'Inter', system-ui, sans-serif",
    background: "#FFF8F0",
    color: "#241A15",
    minHeight: "100vh",
    padding: "0 0 60px",
  },
  loadingScreen: {
    fontFamily: "'Inter', system-ui, sans-serif",
    background: "#FFF8F0",
    color: "#8A5A3E",
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
    background: "linear-gradient(135deg, #7A1E12 0%, #C22B18 45%, #E8442B 100%)",
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
    color: "#FFF3E8",
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
    background: "#fff", color: "#B8331F", fontSize: 14.5, fontWeight: 700,
    cursor: "pointer", fontFamily: "inherit", boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(135deg, #7A1E12 0%, #C22B18 45%, #E8442B 100%)",
    padding: "56px 28px 48px",
    color: "#FFF3E8",
  },
  heat: {
    position: "absolute", inset: "-40%",
    background: "radial-gradient(circle at 70% 30%, rgba(255,196,90,0.55), transparent 45%), radial-gradient(circle at 20% 80%, rgba(255,120,60,0.4), transparent 50%)",
    animation: "drift 14s ease-in-out infinite",
  },
  heroInner: { position: "relative", maxWidth: 780, margin: "0 auto" },
  headerUserRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    flexWrap: "wrap", gap: 12, marginBottom: 16,
  },
  userRow: { display: "flex", alignItems: "center", gap: 10 },
  avatar: { width: 26, height: 26, borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.4)" },
  userName: { fontSize: 13, fontWeight: 600, opacity: 0.92 },
  signOutButton: {
    display: "inline-flex", alignItems: "center", gap: 5,
    padding: "6px 12px", borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.35)",
    background: "rgba(0,0,0,0.18)", color: "#FFF3E8", fontSize: 12, fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
  },
  eyebrow: {
    fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
    fontWeight: 700, color: "#FFCE7A", marginBottom: 16,
  },
  title: {
    fontFamily: "'Georgia', serif", fontSize: 52, lineHeight: 0.98,
    margin: 0, fontWeight: 700, letterSpacing: "-0.02em",
  },
  titleAccent: { color: "#FFCE7A", fontStyle: "italic" },
  sub: { fontSize: 15.5, lineHeight: 1.55, maxWidth: 520, marginTop: 18, opacity: 0.92 },
  tracker: {
    marginTop: 26, display: "inline-flex", alignItems: "baseline", gap: 8,
    background: "rgba(0,0,0,0.22)", padding: "10px 18px", borderRadius: 999,
  },
  trackerNum: { fontSize: 24, fontWeight: 800, fontFamily: "'Georgia', serif", color: "#FFCE7A" },
  trackerLabel: { fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", opacity: 0.85 },

  controls: { maxWidth: 1080, margin: "28px auto 0", padding: "0 20px" },
  chips: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 },
  chip: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 999, border: "1.5px solid #E9D3C0",
    background: "#fff", color: "#8A5A3E", fontSize: 13, fontWeight: 600,
    cursor: "pointer", transition: "all 0.15s",
  },
  chipActive: { background: "#E8442B", borderColor: "#E8442B", color: "#fff" },
  selects: { display: "flex", gap: 10, flexWrap: "wrap" },
  select: {
    padding: "9px 14px", borderRadius: 10, border: "1.5px solid #E9D3C0",
    background: "#fff", color: "#5A3E2E", fontSize: 13.5, fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
  },

  grid: {
    maxWidth: 1080, margin: "22px auto 0", padding: "0 20px",
    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16,
  },
  card: {
    textAlign: "left", cursor: "pointer", border: "1.5px solid #F0DECB",
    background: "#fff", borderRadius: 18, padding: 20,
    display: "flex", flexDirection: "column", gap: 12,
    transition: "transform 0.15s, box-shadow 0.15s, border-color 0.15s",
    fontFamily: "inherit", boxShadow: "0 1px 2px rgba(122,30,18,0.04)",
  },
  cardBooked: { borderColor: "#E8442B", background: "#FFF1EA", boxShadow: "0 6px 20px rgba(232,68,43,0.14)" },
  cardTop: { display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" },
  cardHead: { flex: 1 },
  starRow: { display: "flex", gap: 3, marginBottom: 6 },
  cardName: { fontFamily: "'Georgia', serif", fontSize: 19, fontWeight: 700, margin: 0, lineHeight: 1.15, color: "#2B1A12" },
  metaRow: { display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontSize: 12.5, color: "#9A7358", fontWeight: 500 },
  metaHood: { display: "inline-flex", alignItems: "center", gap: 3 },
  metaDot: { opacity: 0.5 },
  checkBubble: {
    width: 26, height: 26, borderRadius: 999, border: "2px solid #E9D3C0",
    flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.15s",
  },
  checkBubbleOn: { background: "#E8442B", borderColor: "#E8442B" },
  cardNote: { fontSize: 13.5, lineHeight: 1.5, color: "#5C4636", margin: 0, flex: 1 },
  cardFoot: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, paddingTop: 4 },
  priceTag: {
    fontSize: 13, fontWeight: 700, color: "#B8331F",
    background: "#FDEBE2", padding: "5px 11px", borderRadius: 8,
  },
  mealTag: { fontSize: 11.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#A88968" },

  empty: { textAlign: "center", padding: "60px 20px", color: "#9A7358", fontSize: 15 },
  footer: {
    maxWidth: 760, margin: "44px auto 0", padding: "0 24px",
    fontSize: 12, lineHeight: 1.6, color: "#A88968", textAlign: "center",
  },
};
