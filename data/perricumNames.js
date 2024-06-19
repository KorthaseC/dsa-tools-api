//prettier-ignore
const maleFirstNames = [
  "Al'rik", "Al'irik", "Al(k)hor", "Arve", "Ash'i'in", "Aslan", "Chadim", "Dalman", "Eslam", "Hal", "Hamir", "Koradin", 
  "Kordan", "Kor'hamid", "Korobar", "Koresh", "Leomar", "Makil", "Mu'ammar", "Muk'hadin", "Okam", "Rahul", "Reto", 
  "Rondrigan", "Ronwulf", "Sanin", "Simold", "Yakobran"
];

//prettier-ignore
const femaleFirstNames = [
  "Alhina", "Al'khora", "Ayla", "Chal'andra", "Das'sareth", "Emer", "Koralin(e)", "Korian(ia)", "Lah'eila", "Leudane", 
  "Mir'ban(e)", "Nurhan", "Rondara", "Svelinya", "Yezhabel"
];

//prettier-ignore
const lastNames = [
  "Belgor", "Darpater", "Dengler", "Ehrwald(en)", "Felswegen", "Leinhfarer", "Leuentreu", "Netzfscher", "Rebenile", 
  "Rostsreiber", "Trollzack", "Turmen", "Weihenwacht", "Weinacker", "Wintherlich"
];

//prettier-ignore
const nobleNames = [
  "Bergthann", "Brenditall", "Darpatrück", "Dergelemul", "Firunstick", "Gluckenhang", "Gnitzeknuth", "Haselhain", 
  "Hugelden", "Kaipenstolz", "Pfeiffenstock", "Sturmfels", "Tollforst", "Wasserburg", "Weidenhang"
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
