//prettier-ignore
const maleFirstNames = [
  "Abralm", "Angrim", "Armax", "Arngm", "Balgschmox", "Cobtasch", "Dragn(a)x", "Esbat(o)sch", 
  "Fratschax", "Garx", "Grosch", "Harxmasch", "Korgsch", "Narax", "Schrax", "Ubrasch", 
  "Xetschag", "Xomosch"
];

//prettier-ignore
const femaleFirstNames = [
  "Agmascha", "Angrmosch", "Brimba", "Fentscha", "Grimxa", "Grimxe", "Groscha", "Ingrbe", 
  "Krimbe", "Lagtrb", "Linscha", "Mascha", "Mokma", "Norgte", "Olbra", "Pertscha", "Schroba", 
  "Tlaxa", "Ubraxa", "Xetsche"
];

const lastNamesMaleSuffix = ["groscho"];

const lastNamesFemaleSuffix = ["groschna"];

const maleLastNames = maleFirstNames;

const femaleLastNames = femaleFirstNames;

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: false,
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
  femaleFirstNames,
  lastNamesMaleSuffix,
  lastNamesFemaleSuffix,
  maleLastNames,
  femaleLastNames,
  regionSpecifics,
};

//gilt für Amboss-, Erz- und Brillantzwerge
