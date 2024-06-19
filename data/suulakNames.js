//prettier-ignore
const maleFirstNames = [
  "Aargaal", "Aarguk", "Barl", "Bluugh", "Bluurz", "Chraaz", "Chruuk", "Furuukh", "Gnatz", "Gnupp", 
  "Gorrwarm", "Grrargh", "Gragh", "Groggi", "Groinkh", "Groom", "Grootz", "Gruul", "Gruum", "Gullinburst", 
  "Gurluug", "Guurk", "Jaak", "Jukuu", "Jukuur", "Juuksed", "Kaarstock", "Kwoork", "Mrarrk", "Naark", 
  "Norf", "Örf", "Paabertz", "Priidul", "Rarrf", "Röff", "Shraa", "Sniigs", "Sulrik", "Suviini", "Traak", 
  "Tschak", "Urmeg", "Uuzvaral", "Vurl", "Xeetsch", "Ziplim"
];

//prettier-ignore
const femaleFirstNames = [
  "Aada", "Azzgra(da)", "Bupuuscha", "Furka", "Garrrh", "Griibna", "Jacula", "Jamuutan", "Jeetka", 
  "Kashka", "Kasuukas", "Kergatai", "Khischa", "Kolainaa", "Leelos", "Maalis", "Mantka", "Mikdai", 
  "Morka", "Nassugguun", "Oozols", "Orvazz", "Porsa", "Riiba", "Rukuuka", "Russuula", "Ruurka", 
  "Sakuuska", "Seemä", "Sieva", "Siisikai", "Souuli", "Suncuua", "Suviintan", "Treescha", "Triinuun", 
  "Tschiiba", "Ushka", "Uukra", "Varmiiias", "Viivelas", "Weetiinka", "Yaakscha", "Zooqä"
];

//prettier-ignore
const epithets = [
  "Ascheregen", "Blutpelz", "der Flinke", "der Jäger", "die Blutige", "Eichelfinder", "Feuerpelz", 
  "Goldzahn", "Hrungsa", "Krigscha", "Luuch", "Paala", "Raschaä", "Riiba", "Ruubah", "Sawzwinger", 
  "Schwarzahn", "Schweinefänger", "Suulah", "Tschekrai", "Tuluum", "Wjasuu"
];

//prettier-ignore
const clanNames = [
  "Kuyac Mapai", "Lungai Gyrrwa", "Lungai Mikdai", "Lungai Mulla", "Lungai Naarak", "Lungai Ruuga", 
  "Lungai Scherschai", "Lungai Siiskal", "Lungai Theluzi", "Lungai Urmörgh", "Saali Bluughai", 
  "Saali Moorakh", "Saali Priidah", "Saali Triphaa"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  epithets,
  clanNames,
  regionSpecifics,
};
