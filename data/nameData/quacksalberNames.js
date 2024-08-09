//prettier-ignore
const maleFirstNames = [
  "Alchimico", "Hakima", "Hexander", "Laborix", "Perainfried", "Tincturos", "Zurbaran"
];

//prettier-ignore
const femaleFirstNames = [
  "Braubertha", "Hakim", "Heidrun", "Heilgrit", "Hexlind", "Tinctura", "Tsalind", "Wehrfiede"
];

//prettier-ignore
const lastNames = [
  "Agricola", "Alchimicus", "al'Hakim(a)", "al'Kimiya", "Antidot", "Balsam(o)", "Giftmischer", "Goldregen", 
  "Guttrunk", "Heilaris", "Heilmacher", "Heilsalb", "Horuschlenkern", "Koschbasalt", "Krupentrunk", "Lotoshauch", 
  "Nothelfer", "Olginusd", "Perainheilt", "Perainetreu", "Pestspor", "Quecksilber", "Salbarius", "Schmerz(stiller)", 
  "Tarnelss", "Tausendwasser", "Tiefschluck", "Tonicum", "Tsalfh", "Warzenfein(d)", "Wehmacher", "Wirselgrüber", 
  "Wunderlich", "Wundersam", "Wundheiler", "Zauberhand"
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
