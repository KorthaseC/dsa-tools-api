//prettier-ignore
const maleFirstNames = [
  "Abet-ut'yar", "Djer'kem", "Hati'hesá", "Henem'iwen", "Kemet'nechet", "Nebib", "Pet'nehem", "Sekem'kutary", 
  "Sekem'weser", "Setepen", "Shespes'ká", "Veser'hetep"
];

//prettier-ignore
const femaleFirstNames = [
  "Àmeset", "Ankhsa", "Djer'kem", "Már'bonefer", "Men'kare", "Merit'ká", "Merut'saf", "Me'wehem", "Neferi", 
  "Quenadya", "Tá'meri", "Uneb'nemes"
];

//prettier-ignore
const lastNames = [
  "al'Plâne", "Chesa'ret", "Me'káth", "Mehyem'ká", "Mes'kha're", "Nebmes", "Páestumai", "Sá'kurat", 
  "Sekemát", "Setepen", "Tem'kat", "Ze'emkha", "Ni Biazazn", "Ni Djáset", "Ni Ireth", "Ni Jem'ka", 
  "Ni Khefu", "Ni Náreb", "Ni Qinsay", "Ni Setepen", "Ni Yleha"
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

//häufig wird anstatt des nachnamen Ni und dann der Ort als nachname verwendet
