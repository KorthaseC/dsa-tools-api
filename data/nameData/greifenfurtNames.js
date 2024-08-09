//prettier-ignore
const maleFirstNames = [
  "Aldec", "Angold", "Answim", "Branabas", "Branibart", "Emmeran", "Fürchtprenas", "Garamold", "Gerbald", "Golbur", 
  "Goldwart", "Greiffried", "Greifwin", "Guildam", "Huldrich", "Lancorian", "Marachin", "Philopraios", "Praiborett", 
  "Praiodan", "Praiodor", "Praiorgriff", "Praiolsol", "Praioward", "Raulwin", "Sonnward", "Ucurian", "Ulfrid", 
  "Uriens", "Wahrfried", "Wulfram"
];

//prettier-ignore
const femaleFirstNames = [
  "Argolda", "Belfgira", "Braingolde", "Branike", "Daradia", "Gertraudis", "Goldane", "Goldara", "Greifwina", 
  "Griffa(ne)", "Griffgerga", "Heiltraudis", "Herrgriffa", "Irmenela", "Irnfride", "Misira", "Praaidne", 
  "Prai(os)holde", "Prainike", "Praiodane", "Praiogolde", "Praisoleibe", "Praosmin(a)", "Sonnentraud", "Trautlinde", 
  "Treugunde", "Ucuri(e)ke", "Yadwiga", "Ygolde", "Wiltrud"
];

//prettier-ignore
const lastNames = [
  "Altenauer", "Auerbach", "Auermund", "Breitenauer", "Breitner", "Dergeler", "Eslamsordener", "Gintzspiel", 
  "Goldenbacher", "Greifenfurter", "Greifentreu", "Kohlbauer", "Lichtgange", "Pausbäcker", "Praiosberger", 
  "Orkschläger", "Sonnenschauer", "Steinschläger", "Webner", "Weißbleichner"
];

//prettier-ignore
const nobleNames = [
  "Ährenstein", "Altamredesfeld", "Angenforst", "Auerfelde", "Beldenhag", "Bogenbühl", "Bergelstein", "Dunkelfelde", 
  "Dunkelsfarn", "Eisslingern", "Feldharsch", "Finsterforst", "Finsterkamm", "Finsterrode", "Gattenstein", 
  "Greifenberg", "Greifenhorst", "Hasenfeld", "Hexenhain", "Keilholtz", "Kieselburg", "Krähenklamm", "Nebelstein", 
  "Orkenwall", "Reichswegg", "Reiffenberg", "Schattenstein", "Schroffenstein", "Schwarzforst", "Wertlingen", 
  "Wolfenhain"
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
