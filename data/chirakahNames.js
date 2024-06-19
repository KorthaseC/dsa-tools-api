//prettier-ignore
const maleFirstNames = [
  "Tsaar-Hon", "Tsadan", "Tsada-Yo", "Tsagidi-di-Ho", "Tsail-Lo", "Tsajoob", "Tsa-Ma-Ro", "Tsamu", 
  "Tsandro", "Tsara-Lo", "Tsarel-Lo", "Tsar-Ho", "Tsavosio", "Tsavser-Ho", "Tsa-Yan-Ho"
];

//prettier-ignore
const femaleFirstNames = [
  "Atsanad-Ha", "Tsabinija", "Tscadia", "Tsadeia", "Tsael-La", "Tsafil-Hia", "Tsaian-Ha", "Tsaing-La", 
  "Tsaio-Peh", "Tsaja", "Tsaja-Na", "Tsale-Ha", "Tsa-Li-Ha", "Tsalissa", "Tsamara", "Tsa-Mi-La", 
  "Tsaodora", "Tsari-Ha", "Tsayani"
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
