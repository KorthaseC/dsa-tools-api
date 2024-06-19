//prettier-ignore
const maleFirstNames = [
  "Al", "Bal", "Bo", "Bolle", "Bor", "Dardo", "Drego", "Frede", "Fried", "Gero", "Gil", "Gis", "Hag(en)", "Hal", 
  "Helme", "Jaro", "Job", "Jolle", "Kal", "Leo", "Malmo", "Mata", "Ole", "Pal", "Per", "Rai", "Reto", "Rik", 
  "Rob", "Ruk", "Scorp", "Storko", "Sven", "Tol", "Torb(en)", "Tron(de)", "Vib(o)", "Walle", "Win", "Wulf", 
  "Yero", "Zin", "Zol"
];

//prettier-ignore
const femaleFirstNames = [
  "Ay", "Bir", "Birga", "Dette", "Dora", "Ella", "Friede", "Gund(el)", "Gwyn", "Hesi", "If", "Jul", "Kaschka", 
  "Lande", "Lina", "Liv", "Lu", "Lyn(n)", "Mina", "Minka", "Nelde", "Nelle", "Oya", "Pippa", "Renja", "Renz", 
  "Rike", "Roja", "Ronna", "Sira", "Su", "Thal(ja)", "Traude", "Trav", "Vide", "Vina", "Wina", "Yo", "Yppa", "Zo"
];

//prettier-ignore
const lastNames = [
  "Adlernasen", "Amboss", "Armbrust", "Bänkel", "Bären", "Besserwisser", "Boltan", "Bolzen", "Doppelaxt", "Doppelkinn", 
  "Dukaten", "Einaugen", "Einbein", "Einhand", "Eisen", "Elfenohr", "Feuerschopf", "Funkel", "Fusel", "Glatzen", 
  "Gnitzen", "Goldgräber", "Goldsucher", "Goldzahn", "Grinse", "Haken", "Hammerfaust", "Hinke", "Jauchen", 
  "Kalamitäten", "Katzengold", "Ketten", "Klöppel", "Klugscheißer", "Knochen", "Knüppel", "Krauskopf", "Kreuzer", 
  "Krümel", "Krüppel", "Lowangen", "Müller", "Narben", "Nasenring", "Nivesen", "Norbaren", "Orken", "Pranken", 
  "Rabauken", "Rhorwed", "Rinder", "Runzel", "Schellen", "Schlepper", "Schlitzohr", "Schmiede", "Schnappes", 
  "Siebenfinger", "Silber", "Spangen", "Sterngucker", "Tavernen", "Thorwaler", "Wurzel", "Zahnlücken", "Zwinker"
];

//prettier-ignore
const epithets = [
  "Aal-", "Abtakel-", "Abtritt-", "Achter-", "Affenfaust-", "Altoum-", "Anbohrer-", "Anker-", "Ausguck-", "Backbord-", 
  "Barken-", "Beidreh-", "Belegnagel-", "Bilgen-", "Blut-", "Blutauge(n)-", "Bootsmacher-", "Bordschwein-", "Boronstaucher-", 
  "Brabacuda-", "Brisen-", "Bug-", "Charypso-", "Deckschrubber-", "Dublonen-", "Efferd-", "Einäugig-", "Einhand-", 
  "Einschleicher-", "Entermesser-", "Filzlaus-", "Flaggen-", "Fusel-", "Geißel-", "Ghurenia-", "Gold-", "Goldzahn-", 
  "Haken-", "Hakenhand-", "Hängematten-", "Harpunen-", "Heck-", "Holzbein-", "Hornissen-", "Jungfer-", "Kaventsmann-", 
  "Kenter-", "Kielhol-", "Kielwasser-", "Klabauter-", "Knoten-", "Koggen-", "Kutter-", "Landgang-", "Landratten-", 
  "Leuchtfeuer-", "Meskinnes-", "Messer-", "Meuter-", "Muränen-", "Mützen-", "Nebel-", "Necker-", "Ohnezeh-", "Papageien-", 
  "Peitschen-", "Perlen-", "Piranha-", "Planken-", "Plankentod-", "Prisen-", "Rochen-", "Rotzen-", "Ruder-", "Rum-", 
  "Sibel-", "Schiffszwieback-", "Schnapp(e)s-", "Schuppen-", "Seegras-", "Seegurken-", "Silber-", "Smutje-", "Sprotten-", 
  "Starkarm-", "Sterngucker-", "Steuerbord-", "Stiefelriemen-", "Sylla-", "Takelagen-", "Tang(feld)-", "Überbord-", 
  "Uthuria-", "Waldinsel-", "Windpinkler-", "Wogen-", "Wrack-", "Wudu-", "Zahnlücken-", "Zauber-", "Zitter-", "Zossen-", 
  "Zwinker-"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, epithets, regionSpecifics };

//vorname wir direkt an daas epithets gehängt aber mit binde strich
