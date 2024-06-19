//prettier-ignore
const maleFirstNames = [
  "Adroch", "Alb(erik)", "Aghsa", "Ardorag", "Aroom", "Bincht", "Blaak", "Braatz", "Dhrurgh", 
  "Druup", "Dulf", "Gashrix", "Grasosch", "Grook", "Horg", "Kinkel", "Kragtchoss", "Lamsch", 
  "Mumpf", "Murguach", "Naark", "Nogh", "Orkosh", "PuuL", "Raax", "Roscho", "Truum", "Uschg", 
  "Uxmox", "Xaandroag", "Zaag"
];

//prettier-ignore
const femaleFirstNames = [
  "Aghira", "Agrab", "Agschar", "Aruu", "Brogta", "Brugha", "Druurba", "Druup", "Haarta", 
  "Huuschar", "Looga", "Luutje", "Maagra", "Moghra", "Murfu", "Muufa", "Noork", "Roschar", 
  "Ruup", "Slaag", "Spuug", "Trochta", "Turuh", "Ungre", "Uxaa", "Xoop", "Zapual"
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

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  regionSpecifics,
};

//gilt für Amboss-, Erz- und Brillantzwerge
