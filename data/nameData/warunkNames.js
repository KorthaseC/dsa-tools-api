//prettier-ignore
const maleFirstNames = [
  "Arngrim", "Bastan", "Eberhelm", "Fronhardt", "Gilborn", "Karloff", "Leomar", "Leufried", "Perainian", "Rondragrund", 
  "Rondralf", "Rondrian", "Rondwig", "Sumudan", "Thiomar", "Throndwyg", "Travinold", "Wolfhelm", "Wolfhelm"
];

//prettier-ignore
const femaleFirstNames = [
  "Alruna", "Alwide", "Diomara", "Dythlind", "Gerja", "Gringuld", "Kajandra", "Oleana", "Perainiane", "Perinja", 
  "Rondraleude", "Rondriane", "Rondriga", "Sumulieb", "Traviade", "Trawin(ja)", "Tsalind(e)", "Tsanja", "Wildgrima", 
  "Xaira", "Xyleste"
];

//prettier-ignore
const lastNames = [
  "Angerling", "Altpranger", "Altschulz", "Binsen", "Bitterwenn", "Dagral", "Ebsern", "Erlingsen", "Honorad", 
  "Hornstreiter", "Kleinbrück", "Krytzorder", "Lederer", "Lintreulenz", "Plötzobgen", "Radormaler", "Sembelaquaster", 
  "Warunker"
];

//prettier-ignore
const nobleNames = [
  "Binsenbeck", "Bregelsaum", "Erlengrund", "Firunslicht", "Kaltenstein", "Natterngras", "Witzeney"
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
