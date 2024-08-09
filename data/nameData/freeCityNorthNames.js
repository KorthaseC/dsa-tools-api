//prettier-ignore
const maleFirstNames = [
  "Adhelm", "Adoran", "Aeldereth", "Albuin", "Anshag", "Baerjan", "Bosjew", "Branwyn", "Curathan", "Dietrad", "Dunarth",
  "Ealdawin", "Elfert", "Elko", "Enolf", "Farnion", "Firunjan", "Firutin", "Gerlin", "Gerwulf", "Grimjan", "Hanko", "Heleon",
  "Herodan", "Ifirnion", "Imion", "Isenbard", "Jorinen", "Lanthir", "Leoderich", "Lorion", "Marnion", "Mew", "Nurian", "Olean",
  "Orschin", "Ortwin", "Oswin", "Patril", "Pettar", "Rodegar", "Rondril", "Thalion", "Thorolf", "Tuljew", "Waidhart", "Wolforn"
];

//prettier-ignore
const femaleFirstNames = [
  "Adilgunde", "Adlanga", "Aldare", "Alfianna", "Baerhild", "Baernja", "Bilhildis", "Carissima", "Damaris", "Dorell",
  "Elftraute", "Elfwyn", "Elkwine", "Elslin", "Farnlieb", "Fianna", "Firnwild", "Gerlin", "Griseldis", "Heleona", "Heronda",
  "Holdtraude", "Ifirnja", "Ila", "Jascham", "Kajani", "Leleth", "Lidwina", "Linnea", "Lyncordia", "Madagund", "Mandlin",
  "Minnegard", "Nadjescha", "Nanna", "Nirka", "Norgard", "Olja", "Riana", "Rodegard", "Rondrine", "Rowena", "Saari", "Sibille",
  "Svea", "Swangard", "Thalia", "Tjeika", "Ulfhild", "Valariel", "Valborga", "Vanjescha", "Waidgunde", "Widogard", "Wisgard",
  "Wulfhild", "Yrme"
];

//prettier-ignore
const lastNames = [
  "Arlin", "Bergwacht", "Bogner", "Frantischek", "Gerstenschröter", "Grünfelde", "Kolenbrander", "Mandelaug", "Rohtkop",
  "Schmied", "Sewerin", "Stiewick", "Waldner", "Waidmann", "Wangelwilder", "Wolfhein"
];

//prettier-ignore
const nobleNames = [
  "Amselsprung", "Ahorning", "Birkenbach", "Bjaldorn", "Bruchau", "Donnerbach", "Lewenstein", "Rennetal", "Rüsterbach",
  "Starkenfall", "Waldeck", "Wehrlau"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, regionSpecifics };
