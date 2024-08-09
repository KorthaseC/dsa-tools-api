//prettier-ignore
const maleFirstNames = [
"Adarbil", "A’fryad", "Alef", "Ali", "Alman", "Amir", 
"Amr", "Ardashir", "Arkos", "Ashulab", "Aslaban", "Aslam", "Asmar", "Assaf", "Assarbad", "Avun", "Bahadur", 
"Bastrabun", "Bheraimi", "Dhuri", "Erkhaban", "Faizal", "Gassir", "Ghulshev", "Gushadal", "Haidan", 
"Hailif", "Halel", "Hamadi", "Harabal", "Haroz", "Hasrabal", "Ijadail", "Jahangir", "Kalkarib", "Kharibet", 
"Khorim", "Mahwad", "Marwan", "Mordai", "Mustafa", "Mustrabaal", "Najara", "Nazir", "Nebahat", "Okharim", 
"Omar", "Pakhizal", "Qasran", "Rafid", "Rahu(u)I", "Raoul", "Rashamanu", "Rashid", "Rashim", "Rashman", 
"Rhukeyef", "Rufis", "Sahil", "Salim", "Sarhidi", "Shahr", "Shansherib", "Sharanbel", "Sheranbil", 
"Shirkan", "Sinhedi", "Sulman", "Toba", "Tubalkain", "Ukhraban", "Yadail", "Yalacham", "Yasmail"
];

//prettier-ignore
const femaleFirstNames = [
  "Abrizah", "Alazila", "Alissya", "Ashtarra", "Ayshal", "Belizeth", "Chalhibeth", "D(h)amaris", "Djinya", 
  "Dolopia", "Emirabeth", "Enide", "Erzibeth", "Fahimja", "Ghadime", "Ghulbahar", "Guriasath", "Hanjabith", 
  "Ibissaya", "Ikanjah", "Lailazah", "Laleh", "Mahta(b)", "Mandara", "Meriban", "Mirhiban", "Mygdonia", 
  "Nahema", "Nedime", "Omjabeth", "Parvanie(h)", "Perushan", "Shanja", "Sheynucha", "Shilahja", "Shulamin", 
  "Tamineh", "Tulameth", "Varesh", "Yad(d)ia", "Yasra"
];

const maleLastNames = maleFirstNames;

const femaleLastNames = maleFirstNames;

const lastNamesMalePrefix = ["ibn ", "sâl "];

const lastNamesFemalePrefix = ["saba ", "sâla "];

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

module.exports = { maleFirstNames, femaleFirstNames, maleLastNames, femaleLastNames, lastNamesMalePrefix, lastNamesFemalePrefix, regionSpecifics };
