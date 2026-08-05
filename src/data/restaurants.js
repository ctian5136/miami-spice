import { Star, Heart, Users, Sparkles, Tag, DollarSign } from "lucide-react";

export const RESTAURANTS = [
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

export const FILTERS = [
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

export const HOODS = ["All areas", "Design District", "Coconut Grove", "Miami Beach", "South Beach", "Coral Gables", "Wynwood", "Surfside", "Bal Harbour", "Key Biscayne", "Little Havana", "Overtown", "Miami River", "Downtown", "West Kendall", "Miami"];
