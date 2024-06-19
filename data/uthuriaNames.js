//prettier-ignore
const maleFirstNames = [
  "Anajo", "Altarax", "Bal’Inda", "Catlaxo", "Haruon", "Honoran", "Jokom", "Kalimba", "Kayulf", "Matlaco", 
  "Merxaros", "Odumbar(o)", "Osarax", "Rayatico", "Sar’Zuko", "Sukatron", "Tarax", "Xatico", "Zokopac"
];

//prettier-ignore
const femaleFirstNames = [
  "Acatla", "Asral", "Chiyo", "Hiluaxa", "Hualzin", "Itakall", "Jaxarona", "Lutu", "Mexatin", "Nakaha", 
  "Nathania", "Nidara", "Pachatka", "Pradro", "Sintarxia", "Tezati(c)a", "Usuthu", "Vylara", "Yolozin(a)", 
  "Zerelka"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, regionSpecifics };
