//prettier-ignore
const maleFirstNames = [
  "Aslaban", "Bagiraj", "Barlanev", "Brajev", "Feqzev", "Ghulshev", "Goleshiv", "Hidraban", "H'Szintev", "Khraion", 
  "Kragoraj", "Loriban", "Mirshiv", "Nahoban", "Olshlomo", "Prinh", "Quodazhev", "Raslavev", "Shlurmashev", "Ssadnaev", 
  "Szinthev", "Ukhraban", "Ulshushiv", "V'sarev", "Zulshev"
];

//prettier-ignore
const femaleFirstNames = [
  "Aryeh", "Barlani", "Blahba", "Charyhba", "Feqzhha", "Halakha", "H'Szintli", "Kadboli", "Mahabali", "Mhakushba", 
  "Molsha", "Nanuli", "Sathina", "Safhtuli", "Shadifeh", "Shagli", "Shivda", "Szintahba", "Tatahba", "Ukshema", 
  "Uschtamali", "Vampaja", "Visahba", "Yamorfa", "Zilishiv"
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
