//prettier-ignore
const maleFirstNames = [
  "Assarbad", "Astralo", "Astralion", "Astralus", "Bastrabun", "Bombastos", "Diamanto", "El’u(n)dini", "Feenhold", 
  "Hocus", "Madaion", "Magnifico", "Magurion", "Mandragor(ia)n", "Marvelli", "Miraculo", "Roha(l)", "Rohaldor", 
  "Theatralo"
];

//prettier-ignore
const femaleFirstNames = [
  "Ashtarra", "Astralara", "Astralia", "Bombasta", "Feenholde", "Magir(j)a", "Magnifica", "Methelesa", "Miracla(e)", 
  "Nanduria", "Prima", "Rohalia", "Saphira", "Spectacula", "Xeledonie", "Zhayade"
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
