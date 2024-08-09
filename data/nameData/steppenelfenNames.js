//prettier-ignore
const maleFirstNames = [
  "Aimsir", "Alenor", "Aras", "Bavindhor", "Cavarel", "Farnion", "Imalayan", "Imrayon", "Mandavar", 
  "Navarion", "Teleriol", "Valandarel", "Visalayr"
];

//prettier-ignore
const femaleFirstNames = [
  "Adaloë", "Ariana", "Daleonë", "Dialya", "Dianmon", "Elynannon", "Fiannon", "Hylarlione", "Liloë", 
  "Melanoë", "Olianë", "Rhiannon", "Sanaha", "Valannon"
];

//prettier-ignore
const epithets = [
  "die/der-mit-dem-Nebel-reitet", "die/der-mit-dem Regen wandelt", "Einhorngruß", "Falkenkind", 
  "Gipfelstürmer", "Goblinjäger", "Himmelsreigen", "Karenblick", "Klingenläufer", "Kranichzorn", 
  "Mähnenhüter", "Mähnenschwinger", "Morgenruf", "Sternsüchter", "Steppenherz", "Steppenwächter", 
  "Sturmbrecher", "Wassertänzer", "Wiesenat", "Windschaumsucher", "Wolkenreiter"
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
  regionSpecifics,
};
