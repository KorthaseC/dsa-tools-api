//prettier-ignore
const maleFirstNames = [
  "Parainor", "Parinor", "Peraenjow", "Peraidinian", "Peraimos", "Perainald", "Perainaldo", "Perainbart",
  "Perainbrand", "Perainaas", "Perainer", "Perainerich", "Perainerik", "Perain(e)treu", "Perainfried", 
  "Perainhilf", "Perainian", "Perainidal", "Peraindan", "Peraindes", "Peraindeus", "Peraindis", 
  "Peraindor", "Perainio(r)", "Perainios", "Perainis", "Perainwan", "Perainmar", "Perai(n)mund", 
  "Perainor", "Perainkles", "Perinyo"
];

//prettier-ignore
const femaleFirstNames = [
  "Peraenja", "Perahja", "Peraike", "Perainane", "Perainata", "Perainella", "Perainessa", "Perainetreue", 
  "Perainhild(e)", "Perainhuld(a)", "Perainida", "Perainidea", "Perainieke", "Perainielde", "Perainienne", 
  "Perainine", "Perainissa", "Perainita", "Perainileb(e)", "Peraintraud(e)", "Peraintraut", "Perainwyne", 
  "Peranka", "Perascha", "Peraylla", "Perène", "Permine", "Perlissia"
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
