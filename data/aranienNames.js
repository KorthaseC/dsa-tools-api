//prettier-ignore
const maleFirstNames = [
  "Abdulon", "Abdulrik", "Abubrecht", "Aliban", "Amaryd", "Amirwolf", "Arkos", "Arras", "Assaban", "Beyhelm",
  "Djafardeon", "Djemilassar", "Dschadirfried", "Dscheridan", "Farukol", "Hamarbald", "Harunian", "Hassanfried",
  "Jashan", "Jikhbald", "Kashban", "Korwan", "Leomar", "Leuhalla", "Machmud", "Marwamir", "Melekhelm", "Merkan",
  "Muhalla", "Mukarribald", "Nabur", "Narebold", "Nezahet", "Omjaralf", "Peranjador", "Rahjabert", "Rahjadan",
  "Rashdan", "Rassan", "Rasulan", "Retoban", "Rohaldor", "Rondrador", "Rondramir", "Selimdor", "Selimwar", "Shabobert",
  "Shafirio", "Shamar", "Sharondrio", "Sulhamid", "Sultanor", "Taref", "Tariq", "Tuleffried", "Wulftan", "Yadail",
  "Yassirman", "Yorlak", "Yussufried"
];

//prettier-ignore
const femaleFirstNames = [
  "Aischanka", "Alisanya", "Arjunna", "Ashina", "Asleika", "Aylalind", "Ayshira", "Ayshulianne", "Azizelis",
  "Banazira", "Belizath", "Damara", "Dassareth", "Dilhabeth", "Dunjanild", "Elaisha", "Eleonora", "Emerbeth", "Farissa",
  "Fayrieke", "Feruja", "Feqzlinde", "Gazalinde", "Halimyanis", "Hamide", "Hildebeth", "Iphemia", "Ishannah", "Jashild",
  "Jasina", "Jushiberta", "Kalashra", "Khedrine", "Khelbara", "Khorena", "Lailalinde", "Leudira", "Leushanya", "Manjula",
  "Merishja", "Nedimsira", "Neraidane", "Perainibith", "Peranshaya", "Rahjadane", "Rahjana", "Rashpatane", "Rhayadaque",
  "Rondirai", "Rondrayla", "Shanya", "Sherizeth", "Shilaldara", "Shulamunde", "Shulinai", "Sulajmaid", "Sulamin",
  "Sybia", "Tsabine", "Yathilda", "Yullabethild", "Zulhaminai"
];

//prettier-ignore
const lastNames = [
  "Aimaristani", "ak'Shahbra", "Alahjan", "al'Akhdar", "al'Awan", "al'Barad", "Alhazir", "al'Keshal'Kharash", "al'Kitab",
  "as'Ahlan", "as'Najaras", "as'Sarjabaran", "as'Sherchem", "as'Tahan", "Bishar", "Elburumi", "Elyeshinnah", "Kahraman",
  "Terekandi", "Tiltenbrugger", "Turshem", "Zorgahani"
];

//prettier-ignore
const nobleNames = [
  "al'Nabab", "Ankrabad", "Awallakand", "Bakrachal", "Barbrück", "Bensunni", "Dassareth", "Farukand", "Nasiradbad",
  "Ras Abris", "Ras Surya", "Revennis", "Tasilimpfort", "Tebahan", "Tebanfurt", "Terchabbrück", "Untersternheim", "Veharis",
  "Yakshabar", "Yasirabad", "Yerkesh"
];

const noblePrefix = ["von", "ay", "zum", "ai"];

const lastNamesMalePrefix = ["iban "];

const lastNamesFemalePrefix = ["saba "];

const lastNamesFemaleSuffix = ["sun(n)i ", "sunya"];

const maleLastNames = maleFirstNames;

const femaleLastNames = femaleFirstNames;

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: true,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
  nobleNames,
  noblePrefix,
  lastNamesMalePrefix,
  lastNamesFemalePrefix,
  lastNamesFemaleSuffix,
  maleLastNames,
  femaleLastNames,
  regionSpecifics,
};

//noble names sind neutral
