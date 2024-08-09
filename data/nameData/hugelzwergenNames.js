//prettier-ignore
const maleFirstNames = [
  "Adamantosch", "Agam", "Albrax", "Ambrosch", "Andrasch", "Angrax", "Arbosch", "Ardargo", 
  "Arombolosch", "Arthag", "Auralm", "Aurelosch", "Ballasch", "Berosch", "Bolrosch", "Brimosch", 
  "Cendrasch", "Cobaltosch", "Drogosch", "Duglim", "Dungobalosch", "Duratosch", "Dwarusch", "Eratosch", 
  "Fergolosch", "Ferolax", "Fobosch", "Forrax", "Gandrasch", "Gantrak", "Gramosch", "Greifax", "Grubosch", 
  "Gundar", "Gurthar", "Hangor", "Harmalosch", "Himbi", "Ibarlosch", "Ingamosch", "Jandrim", "Kalamox", 
  "Kirgam", "Korgrim", "Kurax", "Marnax", "Mokel", "Muragolosch", "Narax", "Nortgram", "Nugrod", 
  "Obolosch", "Ombrosch", "Ordamon", "Pogolosch", "Rambosch", "Rologlom", "Rugrim", "Sogrim", "Sordolax", 
  "Surgosch", "T(h)orgrim", "Tlutasch", "Tordim", "Turim", "Tuwar", "Ugosh", "Varasch", "Worgrim", 
  "Worhak", "Xandresch", "Xenos", "Xerbosch", "Xoldarim", "Xotosch"
];

//prettier-ignore
const femaleFirstNames = [
  "Agescha", "Aghira", "Agrescha", "Angraxa", "Angrella", "Angrescha", "Argloscha", "Aurescha", 
  "Borascha", "Borgime", "Branda", "Curima", "Darisch(n)a", "Diamante", "Draxnescha", "Durga", 
  "Dwarmascha", "Elnaxra", "Ferrascha", "Gandila", "Gandrescha", "Garxa", "Grescha", "Griscka", 
  "Gubara", "Hogrescha", "Ibra(scha)", "Igrimma", "Ingrala", "Ingrascha", "Irasch(n)a", "Itragescha", 
  "Jalla", "Jandrascha", "Lavnascha", "Lorescha", "Malmascha", "Mogdascha", "Muraxa", "Narescha", 
  "Norgalda", "Ogelne", "Ombroscha", "Raraxe", "Rogoscha", "Roschka", "Salgrima", "Saphira", "Schatoscha", 
  "Sorscha", "Taloscha", "Theruka", "T(h)orgima", "T(h)urescha", "Tortoscha", "Turda(scha)", "Turmaline", 
  "Ugrilne", "Varnascha", "Xorda", "Zaresscha"
];

//prettier-ignore
const lastNames = [
  "Angrosch(s)lob", "Apfelhalm", "Beutelsaum", "Bödfold", "Breitenklein", "Breitpfann", "Dumpfbrodt", 
  "Eisenbart", "Eisenhüt", "Eisenpfann", "Flinkfuß", "Funkenflug", "Glimmherd", "Grambax", "Grimsbart", 
  "Grumling", "Hopfenwart", "Hüglinger", "Klappertopf", "Kleinenbreit", "Köchelbart", "Kupferblatt", 
  "Labkraut", "Meckerhass", "Sandsteiner", "Sauerkloß", "Schmiedefreund", "Schotterkies", "Siebenrüb", 
  "Silberhaar", "Silbersack", "Sternhagel", "Wackerstrunk", "Zwiebelbock"
];

//prettier-ignore
const epithets = [
  "Bierschlucker", "Donnerhaut", "Donnerstein", "Doppelax", "Drachenfeuer", "Drachenglut", "Drachenjäger", 
  "Drachenschreck", "Eidbrecher", "Eisenbart", "Eisenfaust", "Eisenfinder", "Eisenfurch", "Eisenschlag", 
  "Eisenschmelzer", "Elfenfreund", "Erzbrecher", "Felsenschulter", "Felsspalter", "Feuerbart", "Flammenseher", 
  "Flinkfinger", "Funkenschläger", "Gemmenschneider", "Gluttrinker", "Goldhand", "Hammerschlag", "Orkhasser", 
  "Runendreut", "Schlagtreu", "Schmiedetreu", "Silberhelm", "Stahlblut", "Steinhäut(e)", "Steinspalter"
];

const lastNamesMaleSuffix = ["groscho"];

const lastNamesFemaleSuffix = ["groschna"];

const maleLastNames = maleFirstNames;

const femaleLastNames = femaleFirstNames;

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = {
  maleFirstNames,
  lastNamesMaleSuffix,
  lastNamesFemaleSuffix,
  maleLastNames,
  femaleLastNames,
  epithets,
  regionSpecifics,
};

//gilt für Amboss-, Erz- und Brillantzwerge
