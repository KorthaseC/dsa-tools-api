//prettier-ignore
const maleFirstNames = [
  "Achzul", "Alzaar", "Arachtoch", "Ashur", "Azzadh", "Bashoth", "Bradrukh", "Dabrush", "Drechan", "Dorkhach", 
  "Faraz", "Gandrosh(aq)", "Ghonech", "Grachan", "Kcharron", "Kchorech", "Khornian", "Moqtach", "Rhazzar", "Rochan", 
  "Shamsharb", "Shinmash(a)q", "Shulman", "Tashach(z)", "Tra(u)chan", "Zerasuul", "Zuldar", "Zuldhamach"
];

//prettier-ignore
const femaleFirstNames = [
  "Artun", "Ashirut", "Chulye", "Chumra", "Draneth", "DurGhacha", "Greshira", "Habiza", "Hach(i)nah", "Kcharra", 
  "Kchodi(ma)", "Khordha", "Lahlsuni'a", "Makatta", "Manjocha", "Marchune", "Mogtah", "Perchi", "Rsuni'Haha", "Rhagzeshta", 
  "Shazzula", "Shulmacha", "Tashsuni'ahr(a)", "Uchazu", "Zulsuni'arturt", "Zulecha"
];

//prettier-ignore
const clanNames = [
  "Amad'rochan", "Charis'ramarh","Gor'rohashim", "Koro'warh", "Mach'nahtul", "Zum'achan"
];

//prettier-ignore
const epithetsMale = [
"Achteshtar", "Amadacht", "Asht'mudran", "Bal", "Dacht'al'zul", "Grim", "Iffri'madacht", "Rôhaschtu", "Rôhil", "Shochazil", "Tersuni'achar", "Zertsuni'zul", "Zulsuni'rachtar"
];

//prettier-ignore
const epithetsFemale = [
  "Achteshta", "Amadhcha", "Ash'mudran", "Balt", "Dachta'al'zul", "Grima", "Iffri'macha", "Rôhaschta", "Rôhila", "Shochazila", "Tersuni'acha", "Zertasuni'zul", "Zulsuni'rachta"
  ];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: true,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: true,
};

module.exports = { maleFirstNames, femaleFirstNames, epithetsMale, epithetsFemale, regionSpecifics };

//es können clan namen angehängt werden und oft werden beinamen als nachnamen verwendet
