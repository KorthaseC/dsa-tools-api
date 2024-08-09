//prettier-ignore
const maleFirstNames = [
  "Aska", "Baska", "Brafka", "Curon", "Fafka", "Furon", "Gafka", "Gra(s)ka", "Grimrik", "Ingrik", 
  "Jafka", "Lafka", "Rafka", "Raska", "Safka", "Staska", "Trafka", "Zafka", "Zaron"
];

//prettier-ignore
const femaleFirstNames = [
  "Agri", "Arge", "Broge", "Cere", "Fruri", "Grime", "Gure", "Ingre", "Mirli", "Norgi", "Rafe", 
  "Safra", "Tagra", "Tafra", "Zafra", "Zaron"
];

const lastNamesMaleSuffix = ["groscho"];

const lastNamesFemaleSuffix = ["groschna"];

const maleLastNames = maleFirstNames;

const femaleLastNames = femaleFirstNames;

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
  lastNamesMaleSuffix,
  lastNamesFemaleSuffix,
  maleLastNames,
  femaleLastNames,
  regionSpecifics,
};

//gilt für Amboss-, Erz- und Brillantzwerge
