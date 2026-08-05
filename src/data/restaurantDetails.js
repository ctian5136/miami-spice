// Per-restaurant website / booking link / standout Spice menu items.
// Keyed by exact restaurant name from data/restaurants.js.
// Filled in as research confirms real, current info — entries not yet
// researched are simply absent, and the detail modal falls back gracefully.
export const RESTAURANT_DETAILS = {
  "L'Atelier de Joël Robuchon": {
    website: "https://latelier-miami.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/latelier-de-joel-robuchon",
  },
  "Cote Miami": {
    website: "https://www.cotekoreansteakhouse.com/miamidinnermenu",
    spiceMenu: [
      "Waldorf Salad — radicchio, Asian pear, kabocha, candied hazelnuts",
      "COTE's Limited Edition Fried Chicken",
      "Dol-sot Bibimbop — mountain vegetables, soft-poached egg, gochujang",
      "Florida Snapper Sandwich (Pan con Minuta)",
    ],
  },
  "Le Jardinier Miami": {
    website: "https://www.lejardinier-miami.com/",
    bookingUrl: "https://www.opentable.com/r/le-jardinier-miami",
    spiceMenu: [
      "Pan-seared salmon with spinach orzo (lunch)",
      "Roasted chicken, cilantro yogurt marinade (lunch)",
      "Suckling pig porcetta, honey Dijon glaze (dinner)",
      "Chocolate salted caramel tart (dessert)",
    ],
  },
  "Stubborn Seed": {
    website: "https://www.stubbornseed.com/",
    bookingUrl: "https://www.opentable.com/r/stubborn-seed-miami-beach",
  },
  "Ariete": {
    bookingUrl: "https://www.opentable.com/ariete",
    spiceMenu: [
      "Tuna Conserva, Crudo, Summer Salad, or Tamal (starter choice)",
      "Chivo Guisado (entrée choice)",
    ],
  },
  "Azabu Miami Beach": {
    website: "https://www.azabumiami.com/",
    bookingUrl: "https://www.opentable.com/r/azabu-miami-beach",
  },
  "Double Luck": {
    website: "https://www.double-luck-miami.com/",
  },
  "Tâm Tâm": {
    website: "https://tam-tam-mia.com",
  },
  "Joe's Stone Crab": {
    website: "https://joesstonecrab.com/",
    bookingUrl: "https://www.opentable.com/r/joes-stone-crab-miami-beach",
  },
  "Makoto": {
    website: "https://makoto-restaurant.com/",
    bookingUrl: "https://www.opentable.com/r/makoto-bal-harbour",
    spiceMenu: [
      "Tuna crispy rice, spicy edamame, or Makoto house salad (starter)",
      "Miso salmon, Koji chicken breast, or sushi & maki assortment (entrée)",
      "Okinawan tres leches or strawberry yuzu cheesecake (dessert)",
    ],
  },
  "Daniel's, a Florida Steakhouse": {
    website: "https://www.danielssteak.com/miami/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/daniels-miami",
    spiceMenu: [
      "Mayura Station Wagyu Carpaccio, tonnato, caper powder",
      "Serenoa Oysters Rockefeller",
      "Braised Wagyu Beef Short Rib, potato fonduta",
      "Demkota Elite Prime Filet (8oz)",
      "Coconut Flan, toasted coconut (dessert)",
    ],
  },
  "Michael's Genuine": {
    website: "https://michaelsgenuine.com/",
    spiceMenu: [
      "Wood-roasted oyster mushroom, dill-pickled asparagus",
      "Whipped tuna conserva toast",
      "Wood-roasted zucchini",
    ],
  },
  "Cafe La Trova": {
    website: "https://www.cafelatrova.com/",
    spiceMenu: [
      "Empanadas, croquetas, or seared calamari (starter)",
      "Skirt steak ropa vieja or local snapper filet escabeche",
      "Braised mojo-marinated lechón pork shoulder",
      "Flan de flaca or Michy's bread pudding (dessert)",
    ],
  },
  "Mayami Wynwood": {
    website: "https://www.mayamiwynwood.com/",
    bookingUrl: "https://www.opentable.com/r/mayami-wynwood-miami-2",
  },
  "Queen Miami Beach": {
    bookingUrl: "https://www.opentable.com/r/queen-miami-beach",
    spiceMenu: [
      "Queen Caesar Salad or yuzu salmon roll (starter)",
      "Japanese wild truffle mushroom risotto (included course)",
      "Roasted branzino, 6oz skirt steak, or BBQ miso lamb chop (entrée)",
      "Matcha raspberry finger or mango coconut pavlova (dessert)",
    ],
  },
  "Maple & Ash": {
    website: "https://www.mapleandash.com/miami/",
    bookingUrl: "https://www.opentable.com/r/maple-and-ash-miami",
    spiceMenu: [
      "Bluefin tuna tartare, watermelon, white soy nikiri",
      "Grilled summer salad, peach, manchego, basil",
      "Fork & Knife Caesar Salad or Beef Tenderloin Tartare (starter option)",
    ],
  },
  "Rusty Pelican": {
    website: "https://www.therustypelican.com/",
    bookingUrl: "https://www.opentable.com/r/rusty-pelican-miami-key-biscayne",
  },
  "Kiki on the River": {
    bookingUrl: "https://www.opentable.com/r/kiki-on-the-river-miami",
    spiceMenu: [
      "Dakos salad — grated tomato, barley bread, feta, oregano",
      "Grilled octopus or shrimp saganaki",
      "Pan-seared scallops or lamb T-bone, bacon-herbed potato",
      "Baklava (dessert)",
    ],
  },
  "Red Rooster Overtown": {
    website: "https://www.redroosterovertown.com/",
    bookingUrl: "https://www.opentable.com/r/red-rooster-overtown-miami",
    spiceMenu: ["Slow-braised oxtail, smoked Gouda grits, piquillo peppers"],
  },
  "DOYA": {
    website: "https://doyarestaurant.com/",
    bookingUrl: "https://www.opentable.com/r/doya-miami",
    spiceMenu: [
      "Haydari — garlic yogurt, mint, butter",
      "Mastic octopus, mastika sauce, trumpet mushrooms",
      "Wood-fired chicken thighs, sumac and onions",
      "Pide with truffle and kasseri cheese",
    ],
  },
  "Lido at The Surf Club": {
    website: "https://www.lidoatthesurfclub.com/",
    bookingUrl: "https://www.fourseasons.com/surfside/dining/restaurants/lido-restaurant/",
  },
  "Cecconi's": {
    website: "https://www.cecconisrestaurants.com/miami-beach/",
    bookingUrl: "https://www.opentable.com/r/cecconis-miami-beach-miami-beach",
  },
  "Uchi": {
    website: "https://uchi.uchirestaurants.com/location/sushi-miami/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/uchi-miami",
    spiceMenu: [
      "Pork belly, kabocha squash, bright gastrique",
      "Hama chili, shrimp karaage",
      "Trio of nigiri and hand roll highlights",
    ],
  },
  "Uchiko Miami Beach": {
    website: "https://uchiko.uchirestaurants.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/uchiko-miami-beach",
    spiceMenu: [
      "Spicy ponzu sake nigiri",
      "Japanese pumpkin tempura",
      "Sesame ponzu ceviche temaki",
      "Chicken satay salad",
    ],
  },
  "Leonardo": {
    website: "https://www.leonardomiami.com/",
    bookingUrl: "https://www.opentable.com/r/leonardo-miami-beach",
    spiceMenu: [
      "Burrata",
      "Polpette di carne",
      "Linguine alla Nerano",
      "Leonardo tiramisù (dessert)",
    ],
  },
  "Bagatelle Miami River": {
    website: "https://bagatelle.com/venues/bagatelle-miami-river/",
    bookingUrl: "https://www.opentable.com/r/bagatelle-miami-river-miami",
    spiceMenu: [
      "Black Angus beef tartare",
      "Homemade ravioli Del Plin, seasonal truffle",
      "Black tiger prawns",
      "Tropézienne (dessert)",
    ],
  },
  "Zuma": {
    website: "https://www.zumarestaurant.com/en/miami",
    bookingUrl: "https://www.opentable.com/zuma-japanese-restaurant-miami",
    spiceMenu: [
      "Sliced seabass sashimi or tuna tataki",
      "Avocado and asparagus salad",
      "Chicken karaage",
      "Maple Cheesecake — Miami debut (dessert)",
    ],
  },
  "Nobu Miami": {
    website: "https://www.noburestaurants.com/miami",
    bookingUrl: "https://www.opentable.com/nobu-miami-beach",
    spiceMenu: [
      "Yellowtail Jalapeño",
      "Black Cod Den Miso Lettuce Wraps",
      "Nobu Style Bara-Chirashi",
      "Mochi Doughnuts (dessert)",
    ],
  },
  "Chef Adrianne's Vineyard": {
    website: "https://chefadriannes.com/",
    bookingUrl: "https://chefadriannes.com/pages/chefs-table",
  },
  "SORA by Hotel Collection": {
    website: "https://sorabyhc.com/",
    bookingUrl: "https://www.exploretock.com/sora-by-hc-miami",
    spiceMenu: ["Bluefin tuna sashimi, sushi & hand rolls (Bluefin Tuna Cutting Ceremony)"],
  },
};
