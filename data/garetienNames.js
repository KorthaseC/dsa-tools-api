//prettier-ignore
const maleFirstNames = [
  "Adran", "Alrik", "Angrond", "Anjun", "Answim", "Angildebert", "Ardo(r)", "Baltram", "Bardo", "Bertram", "Bernhelm", 
  "Bogumil", "Bomil", "Boronian", "Bosper", "Breob", "Brin", "Burgol", "Burian", "Colgan", "Connar", "Cordovan", 
  "Cyrdhan", "Cydoran", "Danos", "Darian", "Dirion", "Drego", "Eberhelm", "Edo", "Edorian", "Efferdan", "Elbrecht", 
  "Elgor", "Emmeran", "Eran", "Eran", "Erzil", "Falk", "Felian", "Fingorn", "Finiuran", "Geppert", "Gerding", 
  "Gerion", "Gernot", "Gerrin", "Gishelm", "Groben", "Groman", "Grorhn", "Gumbalad", "Hal", "Halda", "Halman", 
  "Helmar", "Helmbrecht", "Helme", "Hesindian", "Hilbert", "Hilgert", "Igulf", "Igan", "Iram", "Johand", "Jost", 
  "Kalman", "Karon", "Lares", "Lechdan", "Leomar", "Linnert", "Losan", "Lu(d)ior", "Melcher", "Morfel", "Mor", 
  "Mowert", "Odilo(n)", "Ogdan", "Olger", "Ol(e)lan", "Pagol", "Paranor", "Parinor", "Peradan", "Peranian", "Pernoran", 
  "Pisidian", "Praioadar", "Praiosolab", "Praiosomar", "Quanion", "Quendan", "Quan", "Quendan", "Rahjur", "Rahjadan", 
  "Rahjan", "Rank", "Raul", "Raulbrin", "Reco", "Reto", "Roban", "Rondred", "Rondrinia", "Ruckas", "Rumpo", "Salix", 
  "Salvador", "Seffel", "Sequin", "Sigran", "Sigman", "Sindan", "Stordan", "Thallian", "Thaidon", "Timshal", "Torm", 
  "Travian", "Travi(ad)an", "Tsafried", "Tsadan", "Udalfi", "Ugulf", "Ugdalfi", "Ugdan", "Ugo", "Ulfrid", "Ungolf", 
  "Valman", "Valpo", "Viburn", "Vitus", "Voltan", "Xindan", "Xeppert", "Xerber", "Yann", "Yantur", "Yendan", 
  "Yendor", "Zondan", "Zolthan", "Zordan"
];

//prettier-ignore
const femaleFirstNames = [
  "Adaque", "Alda", "Aldare", "Alena", "Alinde", "Alruna", "Alvida", "Alwerne", "Arba", "Ardare", "Belona", "Binzya", 
  "Birsel", "Boriana", "Caye", "Celissa", "Cella", "Charine", "Coris", "Coruna", "Daria", "Dela", "Derya", "Dhana", 
  "Dilga", "Dimiona", "Dirona", "Dree", "Dralina", "Dramiira", "Duridanya", "Dytheli(d)", "Edala", "Efferdane", 
  "Elene", "Elida", "Eliewe", "Elwen", "Emer", "Fiana", "Firiosa", "Firuna", "Gala", "Gilia", "Ginaya", "Girte", 
  "Gunda", "Gwenya", "Hesindane", "Hylga", "Idra", "Igraina", "Illial", "Ildha", "Invher", "Ialina", "Irne", "Ismena", 
  "Lirianne", "Loida", "Lysaine", "Lysalina", "Ylinde", "Zelda", "Zinde", "Zita", "Zylva"
];

//prettier-ignore
const lastNames = [
  "Adersin", "Algerein", "Anjuhal", "Arberdan", "Arres", "Arsetter", "Babek", "Bachental", "Bellentor", "Berlind", 
  "Bodiak", "Bruchklinger", "Burkherdall", "Damotil", "Darben", "Darlan", "Deil", "Parparet", "Daske", "Dinckel", 
  "Dorcken", "Durenald", "Ehrwald", "Eisinger", "Engstrand", "Eselbo", "Falascher", "Fernel", "Fidian", "Fleischhauer", 
  "Fredor", "Fuxfell", "Galdifei", "Garether", "Gertl", "Gernwald", "Gerholt", "Gerrich", "Gestenbauer", "Gesse", 
  "Glimmerdiek", "Gorbas", "Grabenstol", "Grotterian", "Grunder", "Hainstate", "Harnischmacher", "Hartsteener", 
  "Helmisch", "Hiligon", "Honorald", "Hörger", "Horigan", "Huisdorn", "Hullheimer", "Inke(n)", "Jochmefer", 
  "Jolen", "Karolus", "Kereas", "Korber", "Kormin", "Korminger", "Lasarn", "Lindenbauer", "Linnenschneider", 
  "Lonner", "Marnion", "Maurerbrecht", "Melenheuer", "Musker", "Natel", "Neuwirth", "O'hermober", "Okenheld", 
  "Ohlen", "Oldenport", "Orrenhall", "Ottresker", "Perain(s)lober", "Peresen", "Plötzbogen", "Praiosretu", "Pulether", 
  "Raspart", "Reboiger", "Rodaik", "Rundarek", "Rutpol", "Schlundner", "Sculport", "Seehoff", "Silkes", "Sonnenfelder", 
  "Sperchbrecher", "Steinhaurer", "Stellmaeher", "Storeternant", "Tannhaus", "Töberer", "Trallo", "Travigner", 
  "Treubalth", "Trifrohr", "Tulop", "Ulfaarn", "Unterbauer", "Winkelhauser", "Winterkalt", "Wollbeever", "Zombald", 
  "Zandor", "Zeel", "Zerte", "Zwieschwert"
];

//prettier-ignore
const nobleMaleFirstNames = [
  "Aldemar", "Alerek", "Answim", "Baldomir", "Barnhelm", "Bernhold", "Brin", "Dankward", "Danos", "Degremar", 
  "Edelward", "Gildor", "Giselhold", "Greimuth", "Hal", "Hartwal(d)", "Helmbrecht", "Herdfald", "Irgnad", "Jandolf", 
  "Korgrimm", "Koroabor", "Leomar", "Leon", "Leuerich", "Leubrand", "Leurik", "Leuward", "Markwill", "Olgimar", 
  "Oloroand", "Praiosmund", "Reto", "Rondaran", "Rondred", "Selindian", "Sumerich", "Thronwind", "Ulbfert", 
  "Ulmfried", "Ungolf", "Wulfnart"
];

//prettier-ignore
const nobleFemaleFirstNames = [
  "Alara", "Arn(hild)", "Aumara", "Brindora", "Burglinde", "Deregrein", "Erghard", "Falkwina", "Geldana", "Gerone", 
  "Goldfrede", "Greifgard", "Heidgrein", "Heitlurd", "Ingimara", "Irmgrein", "Jand(a)ra", "Korisande", "Kornwog", 
  "Lanzelind", "Leocine", "Leugrit", "Maindago", "Neidhild", "Ostrud", "Osvina", "Phexlind", "Praiosmine", 
  "R(h)ondara", "Rohaja", "Rondraelve", "Rondriene", "Rondrige", "Rothmara", "Selinde", "Siegwilde", "Steingard", 
  "Trautimin", "Uripurg", "Walla"
];

//prettier-ignore
const nobleLastNames = [
  "Aarburg", "Bärenau", "vom Berg", "Brachental", "Dornensee", "Dunkelschlund", "Ehrenstein", "Eisensteyn", "Erlenstamm", 
  "Falkenstein", "Fronforst", "Gareth", "Goldweiler", "Greyfenstein", "Hartsteen", "Hirschfurten", "Hohenholz", 
  "Leuenberg", "Leuenfeld(e)", "Lichtenberg", "Löwent(h)al", "Luring", "Orkenschild", "Quintian-Quandt", "Rabenmund", 
  "Schilfweih", "Schreyenfels", "Schwarztannen", "Streitzigj. H.", "Sturmfels", "Sturzbach", "Tannwirk", "Ulmenhain", "Zweifelfels"
];

//prettier-ignore
const epithetsMale = [
  "Aurentian", "Bosper", "Brigon", "Cardolan", "Cordovan", "Dexter", "Emmeran(us)", "Egan", "Gildor", "Lucandus", 
  "Lucian(us)", "Magnus", "Melcher", "Palinor", "Parinor", "Rakolus", "Regolan", "Sterko", "Valpo", "Valtoron", "Voltan"
];

//prettier-ignore
const epithetsFemale = [
  "Alissa", "Charissa", "Davina", "Garet(h)ia", "Gloriana", "Junivera", "Larissa", "Lutisana", "Marba", "Racalla", 
  "Rantalla", "Rovena", "Salva", "Talvia", "Thalia", "Yaguiria", "Yppolita"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: true,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: false,
  hasNobleFirstNames: true,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
  nobleMaleFirstNames,
  nobleFemaleFirstNames,
  nobleLastNames,
  epithetsMale,
  epithetsFemale,
  regionSpecifics,
};
