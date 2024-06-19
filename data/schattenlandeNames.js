//prettier-ignore
const maleFirstNames = [
  "Agribert", "Arngrimm", "Amwulf", "Asmodeus", "Astratus", "Balphemor", "Belhalmar", "Belhamid", "Belharion", "Belshiran", 
  "Belshir(i)on", "Blakhador", "Blakhamed", "Blakhar(i)on", "Charyb", "Charydion", "Charyptian(us)", "Charyptodemos", "Chryptor", 
  "Cordovan", "Damon", "Darion", "Dharayan", "Dhargon", "Gaius", "Globoman", "Helme", "Iradon", "Iriadh", "Irion", 
  "Ishayador", "Lolgram(or)", "Lolgrimm", "Lucardus", "Marduk", "Marukh", "Morcas", "Nagarion", "Nagrachfried", "Pentagor", 
  "Sarastro", "Sordulbert", "Sulman", "Talfan", "Tasfarion", "Thargurd", "Thezzaro(n)", "Tuuram", "Udalbert", "Vladuran", 
  "Wulfbert", "Wulfgrimm", "Xarfaidon", "Yelnan", "Yptor(r)", "Zholvan", "Zholvarion", "Zholvard(t)"
];

//prettier-ignore
const femaleFirstNames = [
  "Agrimothea", "Agrimothlieb", "Amazelde", "Aphasmaia", "Asdemona", "Azaril", "Belhalharlieb", "Belharia", "Belharika", 
  "Belkhira", "Belshira", "Belshirella", "Borbaradiane", "Braggund(e)", "Charys", "Dimiona", "Duglena", "Ghulinai", 
  "Globomona", "Grakhvalia", "Grimwulfe", "Hektabe", "Ishaya", "Laarannide", "Laaranya", "Lutisana", "Mactalena", 
  "Mactana", "Mirona", "Mishkella", "Morcana", "Morgwyn", "Nagrachtraut", "Nepharia", "Satyana", "Saya", "Sinistra", 
  "Tasfarella", "Tasfera(ne)", "Thargunfriede", "Thargunia", "Thargunid(i)a", "Thezzia", "Tijalie", "Tyakradane", "Tyakrane", 
  "Wulfgrim(j)a", "Xarfailieb(e)", "Xarfide", "Xarfira", "Xeerania", "Yasha", "Zholvarie", "Zholveigh", "Zuula"
];

//prettier-ignore
const lastNames = [
  "Abbauer", "Angstmann", "Arkenser", "Berghusen", "Blatner", "Dargel", "Diibelsen", "Dunkelsinn", "Ebering", "Eichmoorer", 
  "Emmersen", "Fleischhauer", "Funkensen", "Glotzenmacher", "Gorbensen", "Knochenklauer", "Ledersen", "Melber", "Mithrensen", 
  "Nabersin", "Peresen", "Rallersin", "Schiifer", "Schauer", "Schinder", "Schwertdegen", "Tobrier", "Triibsinn", "Viereicher", "Wulfing"
];

//prettier-ignore
const nobleNames = [
  "Augstein", "Bebendorf", "Bergenhus", "Blutfelden", "Bregelsaum", "Burmisch", "Darbonia", "Dunkelstein", "Ebersfeld", 
  "Ehrenstein", "Eichmoor", "Eisenrath", "Ellenforst", "Falkenstein", "Finsterried", "Freudenberg", "Granelfels", "Geibenfeld", 
  "Gerdenwald", "Kaltenalrik", "Kaltenstein", "Kathenberg", "Knochenhain", "Liliengrund", "Lindenhain", "Mittelleydingen", 
  "Niederweyhe", "Schwarzsichelh", "Spogelsen", "Streitzigä", "Waischenroth", "Willbergen", "Wulfenfels"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, regionSpecifics };
