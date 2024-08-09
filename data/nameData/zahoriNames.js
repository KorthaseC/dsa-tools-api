//prettier-ignore
const maleFirstNames = [
  "Ayano", "Bahilo", "Borornado", "Burso", "Carryo", "Diego", "Diluvio", "Enin", "Fahi", "Garroti", "Hanshi", "Hartsis", 
  "Ippolito", "Jamin", "Ka’hashan", "Lumiro", "Ma(da)uelo", "Nadir", "Oatir", "Pashkir", "Phedorigio", "Phedro", 
  "Qamal", "Rahahjelo", "Rahayel(a)", "Rahyad", "Ramon", "Rastafan", "Razin", "Serpet", "Shafiro", "Ta’ir", "Tasafiro", 
  "Uovolo", "Vadiro", "Verrug(ito)", "Xamal", "Ysafidr", "Zael(o)", "Zarrigo", "Zavero"
];

//prettier-ignore
const femaleFirstNames = [
  "Avaris", "Bifsira", "Galeya", "Daya", "Esfera", "Esmeralda", "Fara", "Farishal", "Gushim", "Hasfira", "Ippolita", 
  "Jadira", "Korima", "Layana", "Madalena", "Madalya", "Madayana", "Morona", "Nuerta", "Oya", "Pheclica", "Pherica", 
  "Pirana", "Qitana", "Rahjessa", "Raistsha", "Shayla", "Taira", "Tsav(er)a", "Uvalia", "Verrugia", "Virashida", 
  "Xafal", "Yala’say", "Zaella", "Zafira", "Zalina", "Zarpa", "Ziqati"
];

//prettier-ignore
const lastNames = [
  "Alfahan", "Alhamar", "Cruento", "Danzaro", "Espadín", "Facundía", "Nevasca", "Pelágatos", "Qantarah", "Sfaraldo", 
  "Sildo", "Soleado", "Vaharada", "Ventara", "Zhuhlamor", "Zurriga"
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
