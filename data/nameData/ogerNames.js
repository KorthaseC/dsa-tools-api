//prettier-ignore
const maleFirstNames = [
  "Arrgak", "Arzuch", "Bagelak", "Barthak", "Basuff", "Blutkeule", "Bluttrinker", "Brzuch", "Bullg", 
  "Dickwampe", "Elfensser", "Garrg", "Gorpp", "Gubbruz", "Knochenknacker", "Knochenschmatzer", "Krog", 
  "Schlorogg", "Todesfaust", "Ullgump", "Urbul", "Urmpf", "Wehkhr", "Yahrrazz"
];

//prettier-ignore
const femaleFirstNames = [
  "Al'ysaaria", "Anasasiel", "Callyna", "Caythya", "Dhar'ëlla", "Dhar'yill", "Fey'Rathil", "Il'marhil", 
  "Kashariel", "Khyrdaka", "Lledrith", "Lossyril", "Lyssareth", "Mad'ahria", "Narthril", "Nindareth", 
  "Nyroiciel", "Rhiasska", "Rylarria", "Sal'ana-fey", "Valariel", "Yllaria", "Za'oreel", "Zil'Shath"
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
