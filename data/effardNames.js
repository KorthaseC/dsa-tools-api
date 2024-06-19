//prettier-ignore
const maleFirstNames = [
  "Effan(o)", "Effbert(o)", "Effebertus", "Effelio", "Efferdaios", "Efferdan", "Efferdaniel", "Efferdante",
  "Efferdanto", "Efferdelio", "Efferdelius", "Efferdeo(n)", "Efferdeus", "Efferdrif(e)", "Efferdhilf",
  "Efferdi", "Efferdim", "Efferdin", "Efferdino(r)", "Efferdio", "Efferdion", "Efferdio(r)", "Efferdoran",
  "Efferdoras", "Efferdwin", "Eff(er)iedrich", "Efferin", "Efferjin", "Effernando", "Effernesto", "Effernor",
  "Efferwin", "Efferwyn", "Effram", "Ef(f)rayim", "Effrem", "Effren", "Ephelio"
];

//prettier-ignore
const femaleFirstNames = [
  "Effelie", "Efferaine", "Efferdana", "Efferdane", "Efferdanja", "Efferdburga", "Efferdea", "Efferdele",
  "Efferdeleia", "Efferdelie", "Efferdette", "Efferdfrie(de)", "Efferdiana", "Efferdina", "Efferdieta",
  "Efferdite", "Efferdje", "Efferdlieb(e)", "Efferdlyn", "Efferdora", "Efferdtje", "Efferdtrud", "Effergemie",
  "Efferia", "Efferlil(l)", "Efferlinde", "Efferllyl", "Effernora", "Effertraud", "Efferwen", "Effriede", "Ephelia"
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
