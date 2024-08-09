//prettier-ignore
const maleFirstNames = [
  "Amir", "Bjarni", "Eisenhard", "Graciano", "Gunnar", "Phexario(n)", "Starkward", "Torxes", "Wilbur"
];

//prettier-ignore
const femaleFirstNames = [
  "Aliria", "Brumberta", "Esmeralda", "Grimgund", "Kladdis", "Mirja", "Nutina", "Phexlind(a)", "Thissa", "Zarpa"
];

//prettier-ignore
const lastNames = [
  "Bärenführer", "Boltanass", "Donnerhau", "Feenfreund", "Flinkfinger", "Gaukelei", "Immerpfeil", "Inrahleger", 
  "Kinderschreck", "Koboldkind", "Lächerlich", "Langnase", "Lautstimm", "Nimmerfehl", "Nimmertot", "Phexensklug", 
  "Posenreißer", "Schaumschläger", "Schreckensfratz", "Starkarm", "Sternfänger", "Taschenspieler", "Tausendsassa", 
  "Tausendmesser", "Tigertanz", "Witzbold", "Zweigesicht"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, regionSpecifics };
