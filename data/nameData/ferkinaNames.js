//prettier-ignore
const maleFirstNames = [
  "Abtuul", "Ardavan", "Ardesh", "Azad", "Bashur", "Burshuk", "Chosraw", "Devlekh", "Djershar", "Dschafur", "Dschalf",
  "Durjin", "Faruch", "Farzand", "Feridun", "Fervez", "Gulbad", "Hafiz", "Harnar", "Haydar", "Jikhab", "Kaszan", "Kazh",
  "Kazum", "Kherim", "Khordad", "Madawan", "Mharbal", "Mirlam", "Muyanshir", "Nashrath", "Rachwan", "Rashni", "Rasuul",
  "Rustam", "Sharkhan", "Tsharik", "Tugril", "Tulsani", "Uchrab", "Umar", "Waqran", "Yabman", "Yistarrech", "Zakhaban",
  "Zhandur"
];

//prettier-ignore
const femaleFirstNames = [
  "Ashu", "Azrubat", "Begum", "Belkhara", "Chanum", "Chatun", "Chizuran", "Chorjan", "Chorshilan", "Dscheridocht", "Duncha",
  "Farah", "Faroshte", "Farsha", "Farzandeh", "Golbanu", "Golsban", "Harshan", "Hulya", "Jeleyin", "Khalila", "Khullat", "Laal",
  "Lahileh", "Massudeh", "Mehrshan", "Mirhay", "Nadam", "Nazrin", "Nuraya", "Nurjahan", "Peribanu", "Rashadocht", "Rohila",
  "Rushan", "Shiringol", "Shmahba", "Sulefin", "Tamra", "Tarshabet", "Tebay", "Tulamin", "Zarbanu", "Zuleycha"
];

//prettier-ignore
const lastNames = [
  "Bân Anghrachan", "Bân Awallakh", "Bân Farkash", "Bân Gassârah", "Bân Hadârri", "Bân Khalil", "Bân Kherash", 
  "Bân Malya", "Bân Mhadjadûri", "Bân Sharîda", "Bân Tirghûfa", "Bân Uludh", "Bem Chalif", "Bem Yashkar", 
  "Shai'Aian", "Ulad Asuban", "Ulad Barshîm", "Ulad Yerkash"
];

const lastNamesMalePrefix = ["iban "];

const lastNamesFemalePrefix = ["sabu ", "zawsh(i)-"];

const maleLastNames = maleFirstNames;

const femaleLastNames = maleFirstNames;

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
  lastNames,
  maleLastNames,
  femaleLastNames,
  lastNamesMalePrefix,
  lastNamesFemalePrefix,
  regionSpecifics,
};

//male und female last names werden mit dem prefix versehen-
