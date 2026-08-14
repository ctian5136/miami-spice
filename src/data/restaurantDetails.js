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
      "Steelhead trout, pil pil sauce, crispy baby potatoes (lunch)",
      "Roasted chicken breast, lemon herb sauce, chanterelle fricassee (dinner)",
      "Wagyu picanha, chimichurri (dinner, +$25 supplement)",
      "Strawberry éclair, crema alla fragola (dessert)",
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
      "Wood-roasted cobia meunière (lunch & dinner)",
      "Onion soup croquette, caramelized onion (starter, both menus)",
      "Short rib panini, fontina, tomato chutney (lunch entrée)",
      "Espresso flan (dessert)",
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
      "Bluefin tuna tartare, watermelon, white soy nikiri (dinner, $95 menu)",
      "Grilled summer salad, peach, manchego, basil (dinner, $95 menu)",
      "Filet mignon medallions, pomme purée, cipollini onion (dinner entrée)",
      "Fire-roasted seafood tower add-on (+$25 supplement)",
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
    // 2026 Miami Spice is a chef-hosted family-style "Reserve" dinner, not a
    // choose-your-own prix-fixe — no confirmed discrete dish list to show.
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
      "Ceviche temaki, sake & bincho nigiri (starters)",
      "Tempura kabocha, chicken satay (entrées)",
      "Take nabe (entrée)",
      "Seasonal tart or sundae (dessert)",
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
      "Prawn and black cod gyoza (starter)",
      "Salmon teriyaki, pickled cucumber (entrée)",
      "Chicken karaage, chili-lemon dressing (entrée)",
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
  "94th Aero Squadron Restaurant": {
    website: "https://www.94miami.com/",
    bookingUrl: "https://www.opentable.com/r/94th-aero-squadron-miami",
    spiceMenu: [
      "Beer Cheese Soup or Caesar Salad",
      "Baked Salmon with Pecans, Shrimp Scampi, or Churrasco Steak",
      "Key Lime Pie, Cheesecake, or Coconut Flan",
    ],
  },
  "Hereford Grill": {
    website: "https://herefordgrill.com/",
    bookingUrl: "https://www.opentable.com/r/hereford-grill-miami",
  },
  "Ashoka Indian Restaurant": {
    website: "https://ashokamiami.com/",
  },
  "Novecento Aventura": {
    website: "https://novecento.com/locations/aventura/",
    bookingUrl: "https://www.opentable.com/r/novecento-aventura",
    spiceMenu: [
      "Kale Caesar Salad or Provolone with Peppers",
      "Salmon Burger or 7oz Rib Eye",
      "Weekend brunch: Avocado Toast or Brûléed French Toast",
    ],
  },
  "Reunion Ktchn Bar": {
    website: "https://www.reunionkb.com/",
    bookingUrl: "https://www.opentable.com/r/reunion-ktchn-bar-aventura",
    spiceMenu: [
      "Truffle Shiitake Mushroom Croquettes or Escargot",
      "Grilled Branzino, Seafood Risotto, or Coquille St. Jacques",
      "Weekday lunch: Mussels in Sake Cream or Crispy Korean Chicken Sandwich",
    ],
  },
  "Perl By Chef IP": {
    website: "https://www.perlrestaurant.com/",
    bookingUrl: "https://www.opentable.com/r/perl-by-chef-ip-miami",
    spiceMenu: [
      "Beef Tenderloin Negimaki or Shrimp Dumplings",
      "Australian Lamb Chops with Eggplant Puree",
      "Warm Peach Crisp with Vanilla Bean Ice Cream",
    ],
  },
  "Gala Restaurant and MuseBar": {
    website: "https://www.galaandmusebar.com/",
    bookingUrl: "https://www.opentable.com/r/gala-restaurant-aventura",
    spiceMenu: [
      "Charred Octopus, Duck Carnitas Tacos, or Beef Arepas",
      "Chilean Sea Bass, Braised Short Rib, or Lamb Rack",
      "Flan Cheesecake or Trio of Gala Classics",
    ],
  },
  "Blind Tiger": {
    website: "https://www.blindtigerexperience.com/",
    bookingUrl: "https://www.opentable.com/r/blind-tiger-aventura",
    spiceMenu: [
      "Rainbow Tartare (Ora King Salmon & Tuna) or Tuna Tataki",
      "Nigiri & Sashimi Plate (Black Miso Cod available for upcharge)",
      "Rotating Macarons",
    ],
  },
  "Toku Modern Asian - Miami": {
    website: "https://www.tokumodernasian.com/location/miami/",
    bookingUrl: "https://www.opentable.com/r/toku-miami-aventura",
    spiceMenu: [
      "Asian Caesar Salad, Tuna Pizza, or Chicken Satay",
      "Beef & Broccoli, Half Peking Duck, or Miso Black Cod",
      "Mochi Trio (Mango, Vanilla Chip, Matcha)",
    ],
  },
  "The Amalfi LLama": {
    website: "https://amalfillama.com/",
    bookingUrl: "https://www.opentable.com/r/the-amalfi-llama-wood-fire-steakhouse-aventura-miami",
  },
  "North Italia - Aventura": {
    website: "https://www.northitalia.com/locations/aventura-fl/",
    bookingUrl: "https://www.opentable.com/r/north-italia-aventura",
    spiceMenu: [
      "Jalea-style calamari fritti",
      "Spicy rigatoni vodka or lump crab & shrimp cavatelli (lunch)",
      "Braised short rib marsala with black truffle risotto or grilled branzino (dinner)",
      "Bomboloni inspired by pastelitos de guayaba",
    ],
  },
  "Jarana Aventura": {
    website: "https://www.jaranarestaurant.com/",
    bookingUrl: "https://www.opentable.com/r/jarana-aventura-peruvian-cuisine-pisco-bar-miami",
    spiceMenu: [
      "Pulpo al Olivo (octopus in creamy black olive sauce)",
      "Lomo Saltado with linguine, or Arroz Marinero with shrimp, calamari & octopus",
      "Dessert inspired by Peru's pastry traditions",
    ],
  },
  "Abbalé Modern Mediterranean Kitchen - Aventura": {
    website: "https://abbaletlv.com/",
    bookingUrl: "https://www.opentable.com/r/abbale-telavivian-kitchen-aventura",
    spiceMenu: [
      "Sumac-lemon chicken shashlik with charred laffa",
      "Grilled Faroe Island salmon with green papaya slaw, or lamb kefta shashlik with smoky eggplant salad",
      "Pistachio baklava or coconut malabi",
    ],
  },
  "Mangrove": {
    bookingUrl: "https://www.opentable.com/r/mangrove-miami",
    spiceMenu: [
      "Sweet chili cauliflower or jerk wings",
      "Fiesta jerk chicken tropical, golden glazed salmon, or curry & chickpeas roti",
      "Bread pudding or sticky rum cake",
    ],
  },
  "STK Steakhouse Aventura": {
    website: "https://stksteakhouse.com/en-us/location/aventura/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/stk-aventura",
    spiceMenu: [
      "Baby gem Caesar or scallops aguachile",
      "NY strip 10oz or grilled swordfish",
      "Key lime pie or chocolate lava cake",
    ],
  },
  "XINO (Modern Chinese)": {
    website: "https://www.xino-restaurant.com/",
    bookingUrl: "https://www.opentable.com/r/xino-modern-chinese-aventura",
    spiceMenu: [
      "Steamed bao buns with short rib, or A5 Japanese wagyu tiradito",
      "Singapore curry noodles with shrimp, or pan-seared salmon with lemongrass coconut cream",
      "Szechuan chicken wings",
    ],
  },
  "La Boulangerie Boul'Mich Aventura": {
    spiceMenu: [
      "Atlantic Norwegian salmon in teriyaki with orange & sesame sauce",
      "Entrecôte frites with Café de Paris herb butter, or seafood fettuccine with mussels & shrimp",
      "Tiramisu or key lime pie",
    ],
  },
  "Eataly La Pizza & La Pasta": {
    website: "https://www.eataly.com/us_en/stores/aventura",
    bookingUrl: "https://www.opentable.com/r/la-pizza-e-la-pasta-eataly-aventura-miami",
    spiceMenu: [
      "Bucatini Cacio e Pepe",
      "Tagliatelle alla Bolognese",
      "Linguine allo Scoglio",
    ],
  },
  "Old Lisbon Restaurant Aventura": {
    spiceMenu: [
      "Bacalhau à Lagareiro (grilled codfish with roasted peppers & olive oil)",
      "Paelha Marinheira (seafood rice), or Carne de Porco à Alentejana (pork with clams)",
      "Pastel de Nata",
    ],
  },
  "Jacinta de Mexico": {
    website: "https://jacintarestaurant.com/",
    bookingUrl: "https://www.opentable.com/r/jacinta-miami",
  },
  "Zucca Restaurant": {
    website: "https://zuccamiami.com/",
    bookingUrl: "https://www.opentable.com/r/zucca-coral-gables",
    spiceMenu: [
      "Tuna tartare with avocado mousse (brunch)",
      "Fried zucchini flowers with goat cheese and truffle honey (brunch)",
      "Pappardelle with lamb ragù",
      "Housemade bucatini cacio e pepe with shaved black truffle",
    ],
  },
  "Seasons 52": {
    website: "https://www.seasons52.com/",
    bookingUrl: "https://www.opentable.com/seasons-52-coral-gables",
    spiceMenu: [
      "Wood-grilled shrimp and grits with chorizo and bacon (lunch)",
      "Seasonal brick oven gnocchi with heirloom tomatoes and pesto (lunch)",
      "Cedar plank-roasted salmon with French green beans (dinner)",
      "Mini indulgence dessert",
    ],
  },
  "Bouchon Bistro": {
    website: "https://www.thomaskeller.com/coral-gables-florida/bouchon-bistro",
    bookingUrl: "https://resy.com/cities/coral-gables-fl/venues/bouchon-bistro",
    spiceMenu: [
      "Soupe du jour",
      "Salade maraîchère au chèvre chaud",
      "Croque madame",
      "Steak frites",
    ],
  },
  "Pastor at Pascal": {
    bookingUrl: "https://www.opentable.com/r/pastor-at-pascal-coral-glabes",
    spiceMenu: [
      "French goat cheese salad",
      "Stuffed piquillo peppers",
      "Iberian cheeks in red wine reduction",
      "Basque cheesecake",
    ],
  },
  "Motek Coral Gables": {
    website: "https://www.motekcafe.com",
    spiceMenu: [
      "Classic hummus / tuna tartare (lunch)",
      "Falafel bowl (lunch)",
      "Chicken shawarma or Turkish lamb kebab (dinner)",
      "Turkish baklava",
    ],
  },
  "Francesco Restaurant": {
    website: "https://francesco-restaurant.com",
    bookingUrl: "https://www.opentable.com/r/francesco-coral-gables",
    spiceMenu: [
      "Causa limeña with whipped potatoes and avocado",
      "Ají de gallina (shredded chicken in ají sauce)",
      "Pulpo al olivo (dinner)",
      "Skirt steak (dinner)",
    ],
  },
  "The Collab": {
    website: "https://thecollabmiami.com/",
    bookingUrl: "https://www.opentable.com/r/the-collab-coral-gables",
    spiceMenu: [
      "Salmon tartare crispy rice",
      "Grilled prime picanha",
      "Airline chicken",
      "Lychee panna cotta",
    ],
  },
  "ARCANO - Sabores de Esencia Hispana": {
    website: "https://www.arcanomiami.com/",
    bookingUrl: "https://www.opentable.com/r/arcano-sabores-de-esencia-hispana-coral-gables",
    spiceMenu: [
      "Croquetas",
      "Gambas al ajillo",
      "Branzino",
      "Arroz negro",
    ],
  },
  "MIKA": {
    website: "https://www.mikacoralgables.com/",
    spiceMenu: [
      "Wagyu beef carpaccio",
      "Hamachi with yuzu vinaigrette",
      "Mezzi rigatoni bolognese",
      "Basque cheesecake",
    ],
  },
  "La Boulangerie Boul'Mich Coral Way": {
    website: "https://www.laboulangerieusa.com/",
    spiceMenu: [
      "Eggs Benedict (brunch)",
      "Tuna tartare (lunch)",
      "Moules frites (dinner)",
      "Key lime pie (dinner)",
    ],
  },
  "Baires Grill Coral Gables": {
    website: "https://www.bairesgrill.com/coral-gables",
    spiceMenu: [
      "Empanadas or Caesar salad to start",
      "Prime Flap Steak, Mila Baires, or Grilled Salmon",
      "Classic Argentine Flan or Chocolate Molten Cake",
    ],
  },
  "Benihana Coral Gables": {
    website: "https://www.benihana.com/",
    bookingUrl: "https://www.opentable.com/benihana-coral-gables",
    spiceMenu: [
      "Pan-fried gyoza dumplings or edamame",
      "Rocky's Choice (hibachi steak & chicken) or Benihana Delight (shrimp & chicken)",
      "Ice cream or rainbow sherbet",
    ],
  },
  "Fleming's Prime Steakhouse & Wine Bar Coral Gables": {
    website: "https://www.flemingssteakhouse.com/locations/fl/miami-coral-gables",
    bookingUrl: "https://www.opentable.com/flemings-steakhouse-coral-gables",
    spiceMenu: [
      "Colossal shrimp cocktail or mushroom brie soup",
      "Filet & frites or 8 oz. filet mignon",
      "Three-layer carrot cake or chocolate gooey brownie",
    ],
  },
  "Morton's The Steakhouse - Coral Gables": {
    website: "https://www.mortons.com/location/mortons-the-steakhouse-coral-gables-fl/",
    bookingUrl: "https://www.opentable.com/r/mortons-the-steakhouse-coral-gables",
    spiceMenu: [
      "French onion soup, Caesar, or wedge salad",
      "Filet mignon, salmon, chicken Christopher, or pork chop",
      "Pot de crème, key lime pie, or crème brûlée",
    ],
  },
  "Kojin": {
    website: "https://www.kojin2.com/",
    bookingUrl: "https://www.opentable.com/r/kojin-2-point-0-reservations-miami",
    spiceMenu: [
      "Foie toast with strawberry and nori, or chicken & waffles (brunch)",
      "Half chicken with sunchokes, or maitake donburi rice bowl (dinner)",
      "Chocolate tart or triple chocolate tart",
    ],
  },
  "Eating House": {
    website: "https://eatinghousemiami.com/",
    bookingUrl: "https://www.opentable.com/restref/client/?rid=158254&restref=158254&lang=en-US",
    spiceMenu: [
      "Pulled burrata or yellowfin tuna crudo",
      "Pasta carbonara or caramelized seabass",
      "Dirt cup or funfetti tres leches cake",
    ],
  },
  "Rò Steakhouse": {
    website: "https://rosteakhouse.com/",
    bookingUrl: "https://www.opentable.com/r/ro-steakhouse-miami",
    spiceMenu: [
      "Ribeye chicharrón or tuna tostada",
      "Skirt steak, spicy rigatoni, or roasted branzino",
      "Lava cake, Yucatan flan, or Basque cheesecake",
    ],
  },
  "Cantina Leon": {
    website: "https://cantinaleon.com/",
    bookingUrl: "https://app.sevenrooms.com/explore/cantinaleon/reservations/create/search/",
    spiceMenu: [
      "Tuna tostada or sopa de tortilla",
      "Rib eye tacos or quesa-birria (lunch); pescado zarandeado or arrachera (dinner)",
      "Churros rellenos or ice cream",
    ],
  },
  "Casa MX": {
    website: "https://www.casamxmiami.com/",
    bookingUrl: "https://www.opentable.com/r/casa-mx-miami",
    spiceMenu: [
      "Queso fundido or tuna tostada",
      "Confit pork shoulder tacos, grilled steak tacos, or mushroom tacos",
      "Cajeta flan or tres leches cake",
    ],
  },
  "Piccola Pizzeria Coral Gables": {
    website: "https://www.piccolapizzeria.us/locations",
    spiceMenu: [
      "Burrata e prosciutto or beef carpaccio",
      "Spaghetti alla carbonara or branzino con risotto (dinner)",
      "Complimentary glass of house wine or Prosecco with every meal",
    ],
  },
  "107 Taste Asian Restaurant Coral Gables": {
    website: "https://107taste.com/",
    spiceMenu: [
      "Gyoza or spring rolls to start",
      "Tonkotsu ramen or pad thai",
      "Taro brûlée cheesecake",
    ],
  },
  "MNB Kitchen": {
    website: "https://www.mnbkitchen.com/",
    spiceMenu: [
      "Tequeños or arugula salad",
      "Chicken sandwich or wagyu cheeseburger",
      "Churros or vanilla gelato",
    ],
  },
  "Miss Crispy Rice": {
    website: "https://misscrispyrice.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/miss-crispy-rice",
    spiceMenu: [
      "Crudo or dumplings",
      "Chef's selection crispy rice or hand roll",
      "Chef's selection dessert",
    ],
  },
  "Azul at The Blue": {
    website: "https://www.providentresorts.com/provident-doral-at-the-blue-miami/",
    bookingUrl: "https://www.opentable.com/r/azul-at-the-blue",
    spiceMenu: [
      "Seafood paella with saffron rice",
      "Grouper livornese with tomato, capers and olives",
      "Chocolate volcano or cheesecake",
    ],
  },
  "BLT Prime": {
    website: "https://www.bltrestaurants.com/location/blt-prime-miami/",
    bookingUrl: "https://www.opentable.com/r/blt-prime-trump-doral-miami",
    spiceMenu: [
      "Burrata, thick-cut bacon or Caesar salad",
      "Salmon oreganata, trofie alla bolognese or Delmonico steak",
      "Guava cheesecake or croissant bread pudding",
    ],
  },
  "Blue Matisse Restaurant and Nau Lounge": {
    website: "https://bluematissedoral.com/",
    bookingUrl: "https://www.opentable.com/blue-matisse-intercontinental-at-doral-miami",
    spiceMenu: [
      "Yucca a la huancaina salad or seafood parihuela",
      "Seared corvina and scallops or filet mignon",
      "Blue Matisse shortcake or chocolate mousse cake",
    ],
  },
  "Bulla Gastrobar Doral": {
    website: "https://bullagastrobar.com/locations/doral/",
    bookingUrl: "https://www.opentable.com/restaurant/profile/214756/reserve",
    spiceMenu: [
      "Croquetas de jamón or patatas bravas",
      "Solomillo con queso azul or pollo al chilindrón",
      "Churros con chocolate",
    ],
  },
  "Pisco y Nazca Doral": {
    website: "https://piscoynazca.com/doral/",
    bookingUrl: "https://www.opentable.com/r/pisco-y-nazca-ceviche-gastrobar-doral",
    spiceMenu: [
      "Causa crocante or ceviche tradicional",
      "Lomo saltado (wok-seared tenderloin)",
      "Alfajor pancakes or arroz con leche cheesecake",
    ],
  },
  "107 Steak and Bar": {
    website: "https://www.107steakandbar.com/",
    bookingUrl: "https://www.opentable.com/r/107-steak-and-bar-doral",
    spiceMenu: [
      "Beef carpaccio or manchego croquettes",
      "Seared salmon or grilled picanha steak",
      "Nutella tres leches or pink pavlova",
    ],
  },
  "Novecento Doral": {
    website: "https://www.novecento.com/locations/doral",
    bookingUrl: "https://www.opentable.com/r/novecento-doral-miami",
    spiceMenu: [
      "Wagyu carpaccio or burrata with tomato chutney",
      "Branzino verde, steak frites or milanesa napolitana",
      "Chocolate truffle cake or classic flan",
    ],
  },
  "Altamura Trattoria e Forno": {
    website: "https://www.altamuratrattoria.com/",
    bookingUrl: "https://www.opentable.com/r/altamura-trattoria-doral",
    spiceMenu: [
      "Il Polipo – octopus carpaccio with roasted bell pepper aioli",
      "Il Raviolo – handmade ravioli with ricotta di bufala, thyme butter, and caviar",
      "Le Mandorle – Sicilian-style almond milk granita",
    ],
  },
  "Casa Mariano": {
    website: "https://casamariano.com",
    bookingUrl: "https://www.opentable.com/r/casa-mariano-doral",
    spiceMenu: [
      "Goat cheese-stuffed dates with bacon, chorizo, and truffle aioli",
      "Lobster rigatoni in spicy vodka sauce",
      "Hazelnut tiramisù",
    ],
  },
  "Il Forno Ristorante": {
    website: "https://ilfornousa.com/",
    bookingUrl: "https://www.opentable.com/r/il-forno-ristorante",
    spiceMenu: [
      "Arancine Siciliani or bruschetta di burrata e pomodorini",
      "Bucatini cacio e pepe or pesce al vino bianco e zafferano",
      "Cannolo Siciliano or tiramisu classico",
    ],
  },
  "Nacionsushi": {
    website: "https://nacionsushi.com/us/",
    bookingUrl: "https://www.opentable.com/r/nacionsushi-miami",
    spiceMenu: [
      "Togarashi shrimp or tuna tataki starter",
      "Godzilla roll or salmon fillet teriyaki",
      "Dulce de leche wonton or chocolate brownie",
    ],
  },
  "Boulud Sud": {
    website: "https://www.bouludsud.com/miami",
    bookingUrl: "https://bouludsud.com/miami/#reservations",
    spiceMenu: [
      "Heirloom tomato burrata salad or gambas al ajillo",
      "Butternut squash agnolotti or 6oz hanger steak frites",
      "Desert rose or warm madeleines",
    ],
  },
  "Seaspice": {
    website: "https://www.seaspice.com",
    bookingUrl: "https://www.opentable.com/restaurant/profile/115654/reserve?ref=728",
    spiceMenu: [
      "Wagyu dumplings or heirloom tomato salad",
      "Filet mignon piccata or seafood risotto",
      "Chocolate cheesecake or tropical pavlova",
    ],
  },
  "Primo's Italian Restaurant and Bar": {
    website: "https://primosrestaurantmiamifl.com",
    spiceMenu: [
      "Bruschetta or tuna tartare starter",
      "Seafood spaghetti or fettuccine Primos",
      "Tiramisu or rum cake",
    ],
  },
  "Gold Coast Kitchen + Cocktails": {
    website: "https://www.goldcoastkitchenandcocktails.com",
    bookingUrl: "https://www.opentable.com/r/gold-coast-kitchen-and-cocktails-miami-marriott-biscayne-bay-miami",
    spiceMenu: [
      "Key West white fish ceviche or Florida citrus salad",
      "Crispy salmon or 7oz grilled churrasco",
      "Churros or crème brûlée",
    ],
  },
  "Giselle Miami": {
    website: "https://gisellemiami.com",
    spiceMenu: [
      "Heirloom beet mosaic or Wagyu dumplings",
      "Crispy whole snapper or Peking chicken",
      "Giselle's pearls or passion pavlova",
    ],
  },
  "Hell's Kitchen Miami": {
    website: "https://www.gordonramsayrestaurants.com/en/us/hells-kitchen/locations/miami",
    spiceMenu: [
      "Wagyu meatballs or tuna tartare",
      "Braised short rib or crispy skin salmon",
      "Sticky toffee pudding or chocolate sin cake",
    ],
  },
  "Il Pastaio di Eataly": {
    website: "https://www.eataly.com/us_en/stores/aventura/restaurants/il-pastaio-di-eataly",
    bookingUrl: "https://www.opentable.com/r/il-pastaio-eataly-aventura",
    spiceMenu: [
      "Bruschetta al pomodoro e stracciatella or Caprese classica",
      "Gnocchi al pesto or Ravioli alla Nerano (lunch); Agnolotti di tartufo nero or Gnocchi all'astice (dinner)",
      "Affogato al caffè or Tiramisù di Eataly",
    ],
  },
  "Bulla Gastrobar Aventura": {
    website: "https://bullagastrobar.com/locations/aventura-new/",
    bookingUrl: "https://www.opentable.com/r/bulla-gastrobar-aventura-miami",
  },
  "Ossobuco Aventura": {
    website: "https://ossobuco.miami/",
    bookingUrl: "https://www.opentable.com/r/ossobuco-aventura",
    spiceMenu: [
      "Ossobuco Empanada, Wood-Fired Provoleta, or Ossobuco Croqueta",
      "Beef Milanesa, Aventura Chicken Bowl, Crispy Chicken Sandwich, or Salmon Skewer",
      "Smoked Pineapple or Churros & Dulce de Leche",
    ],
  },
  "Atlantikós - The St. Regis Bal Harbour": {
    website: "https://atlantikos.goto-where.com/",
    bookingUrl: "https://www.opentable.com/r/atlantikos-bal-harbour",
    spiceMenu: [
      "Marinated Olives or Santorini Fava",
      "Chicken Souvlaki, Pastitsio, or Stuffed Portobello Mushroom",
      "Orange Pie or Loukoumades with pistachio and chocolate",
    ],
  },
  "Slim's Bal Harbour": {
    website: "https://slimsbalharbour.com/",
    bookingUrl: "https://resy.com/cities/bal-harbour-fl-fl/venues/slims",
  },
  "The Palm - Miami": {
    website: "https://www.thepalm.com/location/the-palm-miami/",
    bookingUrl: "https://www.opentable.com/r/the-palm-miami",
    spiceMenu: [
      "Caesar salad, mixed greens, or soup",
      "Filet mignon, chicken parmigiana, salmon, or lobster ravioli",
      "Tiramisu or zeppole",
    ],
  },
  "Truluck's Ocean's Finest Seafood and Crab": {
    website: "https://trulucks.com/locations/miami-florida/",
    bookingUrl: "https://www.opentable.com/r/trulucks-oceans-finest-seafood-and-crab-miami",
    spiceMenu: [
      "Lobster bisque, shrimp cocktail, or jumbo lump crab cake",
      "Ora King salmon, sesame-seared tuna, filet mignon, or pappardelle Bolognese",
      "Little Gem Caesar or Sonoma greens to start; dessert selections included",
    ],
  },
  "The Capital Grille": {
    website: "https://www.thecapitalgrille.com/",
    bookingUrl: "https://www.opentable.com/the-capital-grille-miami",
    spiceMenu: [
      "Wedge with gorgonzola, candied bacon, and heirloom tomatoes",
      "Filet mignon, roasted chicken, or seared salmon",
      "Flourless chocolate cake or cheesecake",
    ],
  },
  "La Terraza Café & Bar": {
    website: "https://www.marriott.com/en-us/dining/restaurant-bar/miajw-jw-marriott-miami/59245-la-terraza-cafe-bar.mi",
    bookingUrl: "https://www.opentable.com/r/la-terraza-cafe-and-bar-miami",
    spiceMenu: [
      "Beetroot Carpaccio or Salmon Gravlax (lunch); Beef Carpaccio or Tuna Tartare (dinner)",
      "Mezzi Rigatoni or Seabass (lunch); Lobster Risotto or Beef Tenderloin (dinner)",
      "Dessert selection included with each three-course menu",
    ],
  },
  "Barsecco": {
    website: "https://www.barsecco.com/",
    bookingUrl: "https://www.opentable.com/r/barsecco-brickell-miami",
    spiceMenu: [
      "Serrano ham croquettes",
      "Black truffle rigatoni alla vodka",
    ],
  },
  "Mango's Tropical Cafe": {
    website: "https://mangos.com/",
    spiceMenu: [
      "Roasted Tomato Bisque or Mango & Avocado Salad",
      "Grilled Skirt Steak or Blackened Grouper Sandwich (lunch)",
      "16oz Ribeye, Filet Mignon or Lobster Tail (dinner)",
      "Key Lime Pie or Crème Brûlée",
    ],
  },
  "Blue Ribbon Sushi Bar & Grill": {
    website: "https://www.blueribbonrestaurants.com",
    spiceMenu: [
      "Edamame, Shishito Peppers & Watermelon (lunch)",
      "Ebi Tempura Roll or Chicken Karaage (lunch)",
      "Seven Beauties nigiri or Salmon Tobanyaki (dinner)",
      "Basque Style Pistachio Cheesecake",
    ],
  },
  "Andres Carne de Res Miami": {
    website: "https://www.andresmiami.us",
    bookingUrl: "https://www.opentable.com/r/andres-carne-de-res-miami-miami-beach",
    spiceMenu: [
      "Arepa de Huevo or chilled shrimp tostada",
      "Grilled octopus skewer with chimichurri",
      "Slow-cooked marinated pork leg",
      "Coconut macaroons with dulce de leche",
    ],
  },
  "Motek South Beach": {
    website: "https://motek.com/south-pointe/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/motek-south-pointe",
    spiceMenu: [
      "Classic Hummus or Tuna Tartare (starter)",
      "Falafel Bowl or Arayes Burger (lunch)",
      "Baked Lemon Branzino or Turkish Lamb Kebab (dinner)",
      "Turkish Baklava or Halva Silan Sundae",
    ],
  },
  "Rao's Miami Beach": {
    website: "https://www.raosonmiamibeach.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/raos-miami-beach",
    spiceMenu: [
      "Rao's Traditional Meatballs or Caesar Salad",
      "Rigatoni Bolognese or Uncle Vincent's Lemon Chicken",
      "Eggplant Parmesan or Chicken Parmesan",
      "Tiramisu or NY Cheesecake",
    ],
  },
  "a'Riva": {
    website: "https://www.arivarestaurant.com/",
    bookingUrl: "https://www.sevenrooms.com/reservations/ariva",
    spiceMenu: [
      "Harbour Caesar or Salmon Crudo",
      "Bucatini Cacio e Pepe or Grilled Hanger Steak",
      "Chicken Milanese or Candele Veal Ragu",
      "Nutella Zeppoline or Pistachio Gelato",
    ],
  },
  "Via Emilia 9": {
    website: "https://www.viaemilia9.com/",
    bookingUrl: "https://viaemilia9.com/reservation/",
    spiceMenu: [
      "Pear carpaccio or beef carpaccio",
      "Tagliatelle in Bolognese sauce or saffron risotto",
      "Branzino filet or filet mignon",
      "Pistachio gelato or tiramisu",
    ],
  },
  "Pauline": {
    website: "https://paulinemiami.shelborne.com/",
    bookingUrl: "https://www.opentable.com/r/pauline-miami",
    spiceMenu: [
      "Tres Conchas (oyster, scallop, conch) or Tuna Ceviche",
      "Grilled Black Bass or Manzanilla Olive-Stuffed Chicken",
      "Morel Mushroom Cou-Cou",
      "Key Lime Semifreddo or Chocolate Arroz con Leche",
    ],
  },
  "Baires Grill Miami Beach": {
    website: "https://www.bairesgrill.com/location/miami-beach",
    bookingUrl: "https://www.opentable.com/restaurant/profile/188650/reserve?rid=188650&restref=188650",
    spiceMenu: [
      "Empanadas, Caesar Salad or Soup of the Day",
      "Prime Flap Steak or Mila Baires",
      "Grilled Salmon",
      "Classic Argentinian Flan or Chocolate Molten Cake",
    ],
  },
  "Prime Italian": {
    website: "https://mylesrestaurantgroup.com/",
    bookingUrl: "https://www.opentable.com/prime-italian-reservations-miami-beach?restref=26521&lang=en-US",
    spiceMenu: [
      "Hawaiian Big Eye Tuna Tartare or Crispy Calamari",
      "Chicken Parmesan or Branzino",
      "Spaghetti & Kobe Meatball or Wagyu Short Rib",
      "Warm Butter Cake with Schlag & Fresh Berries",
    ],
  },
  "Motek Brickell": {
    website: "https://motek.com/brickell/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/motek-brickell",
    spiceMenu: [
      "Classic Hummus or Tuna Tartare",
      "Falafel Bowl or Baked Lemon Branzino",
      "Turkish Baklava or Gelato",
    ],
  },
  "Osaka Nikkei Miami": {
    website: "https://osakanikkei.com/miami/",
    bookingUrl: "https://www.opentable.com/r/osaka-miami-2",
    spiceMenu: [
      "Katsu Nigiri or Tuna Tartar Hosomaki",
      "Shiromi Brasa grilled branzino or Osk Wok stir-fry",
      "Homemade ice cream or sorbet",
    ],
  },
  "Claudie Restaurant": {
    website: "https://www.claudierestaurant.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/claudie",
    spiceMenu: [
      "Heirloom Tomato Gazpacho or Black Angus Beef Tartare",
      "Ricotta Ravioli or Rotisserie Herb Chicken",
      "Lavender Crème Brûlée or Chocolate Mousse",
    ],
  },
  "Nusr-Et Steakhouse Miami": {
    website: "https://www.nusr-et.com.tr/en/restaurants/miami",
    bookingUrl: "https://www.opentable.com/r/nusr-et-steakhouse-miami",
    spiceMenu: [
      "Steak tartare or salmon tartare",
      "Wagyu Filet Mignon or Wagyu New York Steak (Reserve)",
      "Butter-poached lobster starter (Reserve)",
    ],
  },
  "Baires Grill Brickell": {
    website: "https://www.bairesgrill.com/brickell",
    bookingUrl: "https://www.opentable.com/baires-grill-brickell",
    spiceMenu: [
      "Empanadas or Caesar salad",
      "Prime Flap Steak (12oz) or Mila Baires",
      "Dulce de leche or Classic Argentinian Flan",
    ],
  },
  "Sushi Club": {
    website: "https://www.sushiclubus.com/",
    bookingUrl: "https://www.opentable.com/r/sushi-club-miami",
    spiceMenu: [
      "Crispy Rice or Tuna Tartar",
      "Acevichado or Miso Salmon Bowl",
      "Pistachio & Ricotta Cake or Flan",
    ],
  },
  "Rosanegra": {
    website: "https://www.rosanegrarestaurant.us/",
    bookingUrl: "https://www.opentable.com/r/rosa-negra-miami",
    spiceMenu: [
      "Caesar Salad or Tuna Tostada",
      "Wild Mushroom Risotto or Josper Branzino",
      "Tuluminati pistachio ice cream or Magma Cake",
    ],
  },
  "Ikigai": {
    website: "https://ikigaimiami.us/",
    bookingUrl: "https://www.opentable.com/r/ikigai-miami",
    spiceMenu: [
      "Miso soup, seaweed salad, or white fish tiradito",
      "Omakase with five nigiri plus maki or sashimi",
      "Yorokobi Maki or Chu-Toro Nigiri",
    ],
  },
  "Casa Nane": {
    website: "https://casanane.com/",
    spiceMenu: [
      "Quiche Lorraine or Tostones with white cheese",
      "Mixed Seafood Ceviche or House Burger",
      "Key Lime Pie or Burnt Basque Cheesecake",
    ],
  },
  "NUNA": {
    website: "https://www.fourseasons.com/miami/dining/restaurants/nuna/",
    bookingUrl: "https://www.opentable.com/r/nuna-miami",
    spiceMenu: [
      "Oysters & chilies or tuna nigiri (Reserve)",
      "Matsutake okonomiyaki or surf and turf saltado (Reserve)",
      "Individual cacao kakigori (Reserve)",
    ],
  },
  "La Cabrera - Coconut Grove": {
    website: "https://www.lacabreramiami.com/",
    bookingUrl: "https://www.opentable.com/r/la-cabrera-coconut-grove-miami",
    spiceMenu: [
      "Empanadas or grilled provolone to start",
      "NY strip steak, filet mignon, or chicken milanese",
      "Homemade flan with dulce de leche or caramel crepes",
    ],
  },
  "Loretta & the Butcher": {
    website: "https://lorettabutcher.com/",
    bookingUrl: "https://www.opentable.com/r/loretta-and-the-butcher-miami",
    spiceMenu: [
      "Empanada de carne or burrata con prosciutto",
      "Bife de lomo, ossobuco braseado, or branzino a la parrilla",
      "Chocotorta or flan con dulce de leche",
    ],
  },
  "Sushi Garage Cocowalk": {
    website: "https://www.sushigarage.com/",
    bookingUrl: "https://www.sushigarage.com/reservations/",
    spiceMenu: [
      "Tuna tostada or bao duo to start",
      "Shiso-churri flap sirloin or nori-seared tuna",
      "Garage donuts or matcha crème brûlée",
    ],
  },
  "Le Specialita Café & Market": {
    website: "https://lespecialitacoconutgrove.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/le-specialita-cafe-and-market",
    spiceMenu: [
      "Spaghetti pomodoro e burrata or bruschetta",
      "Chicken pizzaiola or forbidden rice bowl with salmon",
      "Welcome Bellini included with dinner",
    ],
  },
  "AVA Coconut Grove": {
    website: "https://www.avamediterraegean.com/cg/home",
    bookingUrl: "https://www.avamediterraegean.com/",
    spiceMenu: [
      "Hummus, crispy zucchini, or Aegean tuna ceviche",
      "Golden Aegean chicken tajine, lavraki fillet, or Black Angus tenderloin",
      "Gelato, melopita, or baklava",
    ],
  },
  "Da Angelino": {
    website: "https://www.daangelino.com/",
    bookingUrl: "https://www.sevenrooms.com/explore/daangelino/reservations/create/search/",
    spiceMenu: [
      "Burrata with heirloom tomatoes or wagyu carpaccio",
      "Ravioli fichi e gorgonzola or braised short ribs",
      "Tiramisu or pistachio millefoglie",
    ],
  },
  "Grand Public": {
    website: "https://enjoygrandpublic.com/",
    bookingUrl: "https://www.opentable.com/r/grand-public-kitchen-and-bar-mia-miami",
    spiceMenu: [
      "Beef carpaccio or hamachi crudo to start",
      "The Grand Burger or salmon",
      "Seasonal dessert selection",
    ],
  },
  "Manoli": {
    bookingUrl: "https://www.opentable.com/r/manoli-in-the-grove-miami",
    spiceMenu: [
      "Grilled octopus with fava and pickled peppers, Greek salad, or shrimp saganaki",
      "Prime lamb rack, Nordic salmon, or homemade yogurt pasta",
      "Greek yogurt with honey and walnuts, fruit salad, or orange pie",
    ],
  },
  "Cotoletta Miami": {
    website: "https://www.cotolettamiami.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/cotoletta",
    spiceMenu: [
      "Arancini al tartufo or bruschetta",
      "Cotoletta alla Milanese, shared for two",
      "Tiramisu, gelato, or chocolate cake",
    ],
  },
  "Chop Steakhouse & Bar": {
    website: "https://www.chopsteakhouse.com/",
    bookingUrl: "https://www.chopsteakhouse.com/?reserve=coconut-grove",
    spiceMenu: [
      "Iceberg wedge salad or French onion soup",
      "Petite filet mignon, Prime New York, or Scottish salmon",
      "Crème brûlée or chocolate layer cake",
    ],
  },
  "Drinking Pig": {
    website: "https://drinkingpigbbq.com/",
    spiceMenu: [
      "Miami Spice BBQ Platter — slow-smoked brisket, ribs and pulled pork",
      "House-made sides showcasing Drinking Pig's smokehouse techniques",
    ],
  },
  "1986 Steakhouse": {
    website: "https://www.1986steakhouse.com/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/1986-steakhouse",
  },
  "Fontana": {
    website: "https://biltmorehotel.com/coral-gables-dining/fontana/",
    bookingUrl: "https://www.opentable.com/r/fontana-at-the-biltmore-hotel-coral-gables",
    spiceMenu: [
      "Burrata and Prosciutto or Tuna Tartare to start",
      "Yellowtail Snapper Piccata or Truffle Cacio e Pepe entrée",
      "Double Chocolate Mousse Cake or Mango Coco Shortbread for dessert",
    ],
  },
  "Bulla Gastrobar Coral Gables": {
    website: "https://bullagastrobar.com/locations/coral-gables/",
    bookingUrl: "https://www.opentable.com/bulla-gastrobar",
  },
  "Aromas Del Peru Coral Gables": {
    website: "https://aromasperu.com/aromasdelperucoralgables",
    spiceMenu: [
      "Ceviche Clásico with leche de tigre, lime, choclo and sweet potato (lunch)",
      "Wok-style Saltados with soy sauce, tomatoes, red onion and bell pepper (lunch)",
      "Baked Scallops with basil béchamel and Parmesan gratin (dinner)",
      "Snapper Fillet & Yuca with ají amarillo acevichada sauce (dinner)",
    ],
  },
  "Perry's Steakhouse & Grille": {
    website: "https://perryssteakhouse.com/locations/fl/miami/coral-gables/",
    bookingUrl: "https://www.opentable.com/r/perrys-steakhouse-and-grille-coral-gables",
    spiceMenu: [
      "Iceberg wedge with buttermilk vinaigrette, tomatoes and bacon",
      "8oz Filet wrapped in bacon, topped with jumbo lump crab and Perry's steak butter",
      "Tableside-flamed lemon curd and orange shortbread meringue for dessert",
    ],
  },
  "Bugatti Bistro": {
    website: "https://www.bugattirestaurant.com/",
    bookingUrl: "https://www.opentable.com/restaurant/profile/235840/reserve?ref=728",
    spiceMenu: [
      "Caesar salad with roasted pine nuts, parmesan croutons and sun-dried tomatoes",
      "Tagliatelle alla Bolognese with traditional Italian meat sauce",
      "Salmone al Finocchio — roasted salmon with braised fennel and mashed potatoes",
      "Tiramisu or house-made gelato/sorbet for dessert",
    ],
  },
  "Cèrto": {
    website: "https://certomiami.com/",
    bookingUrl: "https://www.opentable.com/r/certo-italian-restaurant-coral-gables",
    spiceMenu: [
      "Caesar Salad with shaved parmesan and garlic croutons",
      "Rigatoni al Pesto con Burrata (lunch)",
      "Fritto Misto — fried calamari, shrimp and zucchini (dinner)",
      "Wood oven-roasted Bistecca NY Black Angus strip (dinner, +$12)",
    ],
  },
  "Americana Kitchen": {
    website: "https://www.americanakitchen.com/",
    bookingUrl: "https://resy.com/cities/mia/americana-kitchen-at-loews-coral-gables-hotel",
    spiceMenu: [
      "Salmon Tartare or Crispy Flounder to start",
      "Angus Strip Loin or Spaghetti Al Limone entrée",
      "Tropical Panna Cota for dessert",
    ],
  },
  "Talavera Cocina Mexicana": {
    website: "https://talaveracocinamexicana.com/",
    bookingUrl: "https://www.opentable.com/talavera-cocina-mexicana",
    spiceMenu: [
      "Crispy corn flauta with smoky chipotle-tomato tinga and avocado crema (lunch)",
      "Wood-grilled octopus on house-made nixtamal tortillas with salsa macha (lunch)",
      "Birria-braised beef short rib with corn purée and consommé (dinner)",
      "Mexican Abuelita chocolate cheesecake with cinnamon whipped cream (dessert)",
    ],
  },
  "Edge Miami": {
    website: "https://www.fourseasons.com/miami/dining/restaurants/edge-steak-bar/",
    spiceMenu: [
      "Tuna Tartar",
      "Pan Seared Branzino",
      "Crème Brûlée",
    ],
  },
  "Gyu-Kaku Japanese BBQ Brickell": {
    website: "https://www.gyu-kaku.com/",
    spiceMenu: [
      "Japanese Chicken Karaage",
      "Kalbi Chuck Rib (Sweet Soy Tare)",
      "Chocolate Lava Cake",
    ],
  },
  "Quinto": {
    website: "https://quintomiami.us/",
    bookingUrl: "https://www.sevenrooms.com/reservations/quinto",
    spiceMenu: [
      "Ensalada De Tomate",
      "Beef Milanesa Con Ensalada Verde",
      "Flan De Dulce De Leche",
    ],
  },
  "Fleming's Prime Steakhouse & Wine Bar - Brickell": {
    website: "https://www.flemingssteakhouse.com/",
    spiceMenu: [
      "Lobster Bisque",
      "Filet Mignon",
      "New York Cheesecake",
    ],
  },
  "North Italia - Miami Brickell": {
    website: "https://www.northitalia.com/",
    spiceMenu: [
      "Heirloom Tomato & Burrata",
      "Wild Shrimp Scampi",
      "Tiramisu",
    ],
  },
  "LPM Restaurant & Bar": {
    website: "https://www.lpmrestaurants.com/miami",
    spiceMenu: [
      "Burrata Et Tomates",
      "Bar Rayé Préparé En Croûte De Sel De Guérande",
      "Gâteau Au Fromage Frais",
    ],
  },
  "Paperfish Sushi": {
    website: "https://paperfishsushi.com/",
    spiceMenu: [
      "Crispy Rice Bites Salmon",
      "Tokusen Nigiri Platter",
      "Thai Cream Brûlée",
    ],
  },
  "Marabu": {
    website: "https://maraburestaurant.com/",
    bookingUrl: "https://www.opentable.com/r/marabu-miami",
    spiceMenu: [
      "Tuna Tostón",
      "Ropa Vieja",
      "Abuela'S Torrejas",
    ],
  },
  "Mosaico Kitchen + Bar": {
    spiceMenu: [
      "Burrata & Roasted Peach Salad",
      "Prime Skirt Steak & Farm Eggs",
      "Coconut Flan",
    ],
  },
  "Rosa Sky Rooftop": {
    spiceMenu: [
      "Buffalo Chicken Empanadas",
      "Pork Belly Bao Buns",
      "Chili Sugar Rub, Hot Chocolate Dip",
    ],
  },
  "E41 - Embarcadero 41 Brickell": {
    website: "https://www.embarcadero41.us",
    bookingUrl: "https://www.opentable.com/r/e41-embarcadero-41-miami",
    spiceMenu: [
      "Chicken Yakitori (2 pcs)",
      "Rompe Chaufa de Mariscos",
      "Chicken Saltado",
      "Lúcuma Miso",
    ],
  },
  "Negroni Brickell": {
    website: "https://www.negronius.com",
    spiceMenu: [
      "Hamachi Tostada",
      "Nigiri Experience",
      "Miso Glazed Salmon",
      "Limoncello Tiramisu",
    ],
  },
  "Tacos Atarantados Brickell": {
    website: "https://www.tacosatarantados.us",
    spiceMenu: [
      "Papas Enchiladas con Carne",
      "Abrazo de Ribeye Taco",
      "Suadero Taco",
      "Churro",
    ],
  },
  "Isabelle's Coconut Grove": {
    website: "https://www.isabellescoconutgrove.com",
    spiceMenu: [
      "Grove Fritters",
      "Chicken Milanese",
      "Grilled Florida Catch",
      "Florida Honey & Arrowroot Brûlée",
    ],
  },
  "Bellini": {
    website: "https://bellinirestaurant.com/coconut-grove/",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/bellini-mia",
    spiceMenu: [
      "Steak Tartare",
      "Veal Scaloppine al Limone",
      "Grilled Langoustine",
      "Lemon Sorbet",
    ],
  },
  "Jaguar Restaurant": {
    website: "https://jaguarrestaurant.com",
    spiceMenu: [
      "Spicy Mango Ceviche",
      "Lomo Saltado",
      "Pollo al Maní",
      "Flan",
    ],
  },
  "Bombay Darbar Miami": {
    website: "https://bombaydarbar.com",
    bookingUrl: "https://www.opentable.com/r/bombay-darbar",
    spiceMenu: [
      "Darbar Dahi Bhalla",
      "White Butter Chicken",
      "Tandoori Lamb Chops",
      "Gajar Halwa Tart",
    ],
  },
  "Happy Wine in the Grove": {
    website: "https://happywinegrove.com",
    bookingUrl: "https://www.opentable.com/r/happy-wine-in-the-grove-miami-2",
  },
  "BaiaBlu Italian Restaurant": {
    website: "https://baiablumiami.com",
    spiceMenu: [
      "Gamberi in Tempura",
      "Gnocchi alla Sorrentina",
      "Catch of the Day",
      "Cannoli alla Siciliana",
    ],
  },
  "Belly Fish Coral Gables": {
    website: "https://www.eatbellyfish.com",
    spiceMenu: [
      "Spicy Hamachi Tostada",
      "Yellowfin Tuna Tataki",
      "Chirashi Bowl",
      "Passion Fruit Crème Brûlée",
    ],
  },
  "Bunbury": {
    website: "https://www.bunburymiami.com",
    bookingUrl: "https://www.opentable.com/r/bunbury-miami",
    spiceMenu: [
      "Homemade baked empanada or Grandma's spinach buñuelos to start",
      "Torre de Milanesas Argentina, grilled prime vacio, or grilled salmon entrée",
      "Panqueque de dulce de leche or vegan passion fruit cheesecake bites for dessert",
    ],
  },
  "Mastro's Ocean Club Miami": {
    website: "https://www.mastrosrestaurants.com",
  },
  "Casa Neos": {
    website: "https://casa-neos.com",
    bookingUrl: "https://www.opentable.com/r/casa-neos-miami",
  },
  "Earls Miami Worldcenter": {
    website: "https://www.earls.ca",
  },
  "El Cielo Restaurant": {
    website: "https://elcielo.com.co",
    bookingUrl: "https://www.opentable.com/booking/experiences-availability?rid=161446&restref=161446&experienceId=195037&ot_source=website&ot_campaign=menu",
  },
  "Eight Bar at Maple & Ash": {
    website: "https://www.eightbarrestaurants.com/",
    bookingUrl: "https://www.sevenrooms.com/explore/eightbarmiami/reservations/create/search/",
    spiceMenu: [
      "Little Gem Lettuce or Bubbling Shrimp starter",
      "Classic Steak Frites or Spicy Alla Vodka Rigatoni entrée",
      "Crème Brûlée or Clafoutis for dessert",
    ],
  },
  "Habibi Miami": {
    website: "https://www.habibimia.com/",
    bookingUrl: "https://www.sevenrooms.com/explore/habibi/reservations/create/search",
    spiceMenu: [
      "Sea bass carpaccio or peach salad starter",
      "Charred chicken skewers, Kobe beef kofta, or branzino fillet",
      "Dark chocolate mousse or orange crème brûlée",
    ],
  },
  "Riviera Notti Restaurant": {
    website: "https://www.rivieranotti.com/",
    spiceMenu: [
      "Mussels, charcuterie board, or burrata salad starter",
      "Cacio e pepe, seafood linguini, or filet mignon entrée",
      "Tiramisu, cannoli, or Nutella crepes",
    ],
  },
  "Klaw Miami": {
    website: "https://www.klawrestaurant.com/",
    bookingUrl: "https://www.sevenrooms.com/explore/klawrestaurant/reservations/create/search",
    spiceMenu: [
      "Florida oysters or heritage pork belly starter",
      "Branzino, Oklahoma filet mignon, or dry-aged wagyu porterhouse",
      "White chocolate coconut namelaka or key lime tart",
    ],
  },
  "El Valle": {
    website: "https://www.elvallehialeah.com",
    spiceMenu: [
      "Chicharrones de Puerco or Ceviche Mixto starter",
      "Filete Emperador, 12oz Ribeye, or Pescado Entero Frito",
      "Copa Lolita or Torrejas con Helado",
    ],
  },
  "RedLander Restaurant at Schnebly Winery": {
    website: "https://schneblywinery.com",
    bookingUrl: "https://schneblywinery.com/bookings/our-restaurant/",
    spiceMenu: [
      "Popcorn Pork Belly with cilantro aioli",
      "Shrimp Maduros with fried plantains and guacamole",
      "Brunch Burger or Corvina Fish Sandwich",
      "Golden Churros or Guava Bread Pudding",
    ],
  },
  "Pisco y Nazca Kendall": {
    website: "https://www.piscoynazca.com",
    bookingUrl: "https://www.opentable.com/single.aspx?rid=189604&ref=728",
    spiceMenu: [
      "Causa crocante or empanadas starter",
      "Lomo saltado, ceviche tradicional, or chaufa de mariscos",
      "Flan, alfajor pancakes, or suspiro",
    ],
  },
  "Café Catula Fine Restaurant and Art Gallery": {
    website: "https://www.cafecatula.com/",
    bookingUrl: "https://cafecatula.net/reservations",
    spiceMenu: [
      "Croquetas de Bacalao or Crab Cake with Guava Aioli",
      "Pollo Burrata alla Catula, Branzino al Limone, or Braised Short Rib",
      "Tres Guayaba or Crêpe Caribeño",
    ],
  },
  "Le Mirage Lobby Lounge": {
    website: "https://www.marriott.com/en-us/hotels/miadd-miami-marriott-dadeland/dining/",
    bookingUrl: "https://www.marriott.com/es/dining/restaurant-bar/miadd-miami-marriott-dadeland/5734790-le-mirage-lobby-lounge.mi",
    spiceMenu: [
      "Octopus carpaccio or tuna tartare starter",
      "Grilled swordfish, beef milanese, or herb-roasted lamb",
      "Key lime pie or passion fruit mousse",
    ],
  },
  "North Italia - Dadeland": {
    website: "https://northitalia.com",
    spiceMenu: [
      "Jalea-Style Calamari Fritti starter",
      "Spicy Rigatoni Vodka Pasta or Bolognese pappardelle",
      "Grilled Branzino",
      "Bombolini Pastelito de Guayaba dessert",
    ],
  },
  "Ghee Indian Kitchen - Dadeland": {
    website: "https://www.gheemiami.com/",
    bookingUrl: "https://www.opentable.com/r/ghee-indian-kitchen-kendall",
    spiceMenu: [
      "Green Papaya Salad or Samosa Chaat",
      "Butter Chicken Sandwich or Chicken Tikka Masala",
      "Sticky Date Cake or Gulab Jamun",
    ],
  },
  "A Love Story Winery and Bistro": {
    website: "https://alovestorywinery.com",
    spiceMenu: [
      "Beef Tenderloin Carpaccio",
      "Picanha Steak or Branzino Filet",
      "Basque Cheesecake or Tiramisu",
    ],
  },
  "La Canita Kendall": {
    website: "https://www.lacanitamiami.com/",
    bookingUrl: "https://www.lacanitamiami.com/kendall/",
    spiceMenu: [
      "Spinach Empanadas or Tuna Tartare",
      "Lechon Asado or Churrasco",
      "Flan or Churros",
    ],
  },
  "Mistero Restaurant": {
    website: "https://misterorestaurant.com",
    spiceMenu: [
      "Calamari Fritti or Carpaccio di Salmone",
      "Branzino Piccata or Linguine Alle Vongole",
      "Ricotta and Pistachio Cake or Crème Brûlée",
    ],
  },
  "La Boulangerie Boul'Mich Kendall": {
    website: "https://www.laboulangerieusa.com/",
    bookingUrl: "https://www.laboulangerieusa.com/menu",
    spiceMenu: [
      "Escargot or Moules Frites",
      "Atlantic Norwegian Salmon or Entrecôte Frites",
      "Apple Tart or Tiramisu",
    ],
  },
  "Fogo de Chão Brazilian Steakhouse - Dadeland": {
    website: "https://www.fogodechao.com/location/miami-dadeland/",
    bookingUrl: "https://www.fogodechao.com/reservations/",
    spiceMenu: [
      "Market Table or Feijoada Bar",
      "Picanha, Alcatra & Fraldinha rodizio",
      "Caramelized Bananas",
    ],
  },
  "Novecento Key Biscayne": {
    website: "https://www.novecento.com/",
    bookingUrl: "https://www.opentable.com/single.aspx?rid=114610&ref=728",
    spiceMenu: [
      "Argentine Empanada or Crispy Octopus Tortilla",
      "Grilled Picanha or Pan-Seared Corvina",
      "Guava Lava Cake or Mango Panna Cotta",
    ],
  },
  "La Boulangerie Boul'Mich Key Biscayne": {
    website: "https://www.laboulangerieusa.com",
    bookingUrl: "https://www.laboulangerieusa.com/menu",
    spiceMenu: [
      "Egg Turkey Avocado Toast or Onion Soup",
      "Eggs Benedict, Seafood Fettuccine or Atlantic Salmon",
      "French Toast, Tres Leches or Chocolate Mousse",
    ],
  },
  "Paralia": {
    website: "https://www.paraliakeybiscayne.com",
    spiceMenu: [
      "Greek Village Salad or Spanakopita",
      "Chicken Shawarma or Adana Kebabi",
      "Galaktoboureko or Greek Yogurt with Honey",
    ],
  },
  "Luma": {
    website: "https://www.lumakeybiscayne.com/",
    bookingUrl: "https://fp.sevenrooms.com/reservations/lumamiakb",
    spiceMenu: [
      "Crostone con Ricotta or Insalata di Finocchio",
      "Agnolotti di Mais or Asparagus Risotto",
      "Tiramisu or Mango Passion Panna Cotta",
    ],
  },
  "Aguasal by José Andrés": {
    website: "https://www.aguasalmiamibeach.com",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/aguasal",
    spiceMenu: [
      "Wahoo \"Pastrami\" Crudo (starter)",
      "Roasted Chicken Tagine (entrée)",
      "Fried Snapper (entrée)",
      "Molten Chocolate Cake (dessert)",
    ],
  },
  "Ezio's": {
    website: "https://eziosmiami.com",
    spiceMenu: [
      "Tuna Crudo (starter)",
      "Linguine Cacio e Pepe (entrée)",
      "Wagyu Zabuton (entrée)",
      "Soft Serve (dessert)",
    ],
  },
  "Cafe Prima Pasta": {
    website: "https://www.cafeprimapasta.com",
    spiceMenu: [
      "Carpaccio di Manzo (starter)",
      "Lobster Ravioli (entrée)",
      "Branzino Piccata (entrée)",
      "Tiramisu (dessert)",
    ],
  },
  "The Strand at Carillon Miami": {
    website: "https://www.strandcarillonmiami.com",
    spiceMenu: [
      "Petite Smoked Salmon Plateau (starter)",
      "Heirloom Tomato & Redlands Tropical Fattoush (entrée)",
      "Wagyu Petite Baguette (entrée)",
      "Petite Fours (dessert)",
    ],
  },
  "Sumak Turkish Cuisine": {
    website: "https://www.sumakrestaurant.com",
    spiceMenu: [
      "Tatziki (Kuru Cacik) (starter)",
      "Lahmacun / Turkish Pizza (entrée)",
      "Kunefe (dessert)",
    ],
  },
  "Benihana Miami Beach": {
    website: "https://www.benihana.com/locations/miami-beach",
    bookingUrl: "https://www.benihana.com/reservations",
    spiceMenu: [
      "Pan Fried Gyoza Dumplings (starter)",
      "Edamame (starter)",
      "Rocky's Choice (entrée)",
      "Rainbow Sherbet (dessert)",
    ],
  },
  "Sushi Bichi": {
    website: "https://www.sushibichi.com",
    spiceMenu: [
      "Yellowtail Tiradito (starter)",
      "Pinoy Adobo Coconut Chicken (entrée)",
      "Bichi Burger (entrée)",
      "Ube Panna Cotta (dessert)",
    ],
  },
  "Bocatto Trattoria": {
    spiceMenu: [
      "Assorted Spanish Croquettes (starter)",
      "Burrata (starter)",
      "Bistecca alla Griglia 10oz (entrée)",
      "Passion Fruit Pavlova (dessert)",
    ],
  },
  "A Fish Called Avalon": {
    website: "https://www.afishcalledavalon.com",
    bookingUrl: "https://resy.com/cities/miami-fl/venues/a-fish-called-avalon",
    spiceMenu: [
      "Bang Bang Shrimp (starter)",
      "Branzino (entrée)",
      "Top Sirloin (entrée)",
      "Coconut Crème Brûlée (dessert)",
    ],
  },
  "Lido Bayside Grill": {
    website: "https://www.lidobayside.com",
    spiceMenu: [
      "Guacamole (starter)",
      "Grilled Octopus (starter)",
      "Italian Panini (entrée)",
      "Panna Cotta (dessert)",
    ],
  },
};
