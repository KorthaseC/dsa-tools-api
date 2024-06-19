//prettier-ignore
const maleFirstNames = [
  "Amadin", "Amagomer", "Druidin", "Fedaji", "Haniri", "Kargemil", "Keshmir", "Laromir", 
  "Lorsijan", "Meramdin", "Mikail", "Okjan", "Reshgijan", "Sildrojan", "Tatjan", "Thajan", "Zhuljar"
];

//prettier-ignore
const femaleFirstNames = [
  "Aluzah", "Bilkes", "Bitescha", "Dalkeshja", "Danutja", "Gama", "Hanija", "Harandra", "Harandru", 
  "Ibrani", "Kosha", "Merishja", "Nurja", "Orinakis", "Rasescha", "Shashinja", "Shinja", "Surja", 
  "Thesja", "Yilbakis", "Ziblikis"
];

//prettier-ignore
const lastNames = [
  "char Al'zul", "char Bey-el-Unukh", "char El'Sur", "char Lors-Hunk", "char Sard'Husk", "char Shamalhama", 
  "char War-Hunk", "char Ysil'el'ah"
];

//prettier-ignore
const maleLastNames = [
  "omer Aluzah", "omer Bilkes", "omer Bitescha", "omer Dalkeshja", "omer Danutja", "omer Gama", "omer Hanija", 
  "omer Harandra", "omer Harandru", "omer Ibrani", "omer Kosha", "omer Merishja", "omer Nurja", "omer Orinakis", 
  "omer Rasescha", "omer Shashinja", "omer Shinja", "omer Surja", "omer Thesja", "omer Yilbakis", "omer Ziblikis"
];

//prettier-ignore
const femaleLastNames = [
  "suni Aluzah", "suni Bilkes", "suni Bitescha", "suni Dalkeshja", "suni Danutja", "suni Gama", "suni Hanija",
  "suni Harandra", "suni Harandru", "suni Ibrani", "suni Kosha", "suni Merishja", "suni Nurja", "suni Orinakis", 
  "suni Rasescha", "suni Shashinja", "suni Shinja", "suni Surja", "suni Thesja", "suni Yilbakis", "suni Ziblikis"
];

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

module.exports = { maleFirstNames, femaleFirstNames, lastNames, maleLastNames, femaleLastNames, regionSpecifics };
