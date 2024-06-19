//prettier-ignore
const maleFirstNames = [
  "Anargh", "Anchas", "Artach", "Balfoch", "Bartakh", "Barwad", "Bearach", "Bradruch", "Braighdan", "Branchan", 
  "Branduch", "Breac", "Brein", "Caerfynh", "Cainncoh", "Cammur(r)", "Cainu", "Cormach", "Daragh", "Derwoth", "Druan", 
  "Donnachadh", "Dundoch", "Etzel", "Firnwar", "Friedr(i)", "Gabran", "Gaschnig", "Gedwed", "Hagwar", "Harw", "Harwy", 
  "Hjallldr", "Ifirnundoch", "Islogh", "Kazan", "Lannoch", "Lurash", "Madadshkoch", "Madhru", "Marzagh", "Meku", 
  "Mjesgold", "Morgach", "Mordach", "Muradch", "Murdoch", "Ohdrul", "Orunu", "Parthach", "Rastar", "Roslagh", 
  "Siegmoch", "Struan", "Strunlog(h)", "Tormud", "Turdoch", "Tsharbak", "Ulf", "Ulraigh", "Watredh", "Walduch", 
  "Wuran", "Yahrad", "Yarrodh", "Yorged", "Yuchdan", "Yurrgold"
];

//prettier-ignore
const femaleFirstNames = [
  "Aesa", "Andraga", "Aruleyd", "Bebann", "Blöt(ulind)", "Borrgach", "Brona", "Brucha", "Caltha", "Cirnach", "Corrja",
  "Dairdra", "Danduna", "Dunyabra", "Durrcha", "Eimri(d)", "Frunira", "Froya", "Gardrha", "Gharya", "Gjayka", "Grainne",
  "Griadhra", "Grimheyd", "Griwer", "Hachwa", "Hagwa", "Harwa", "Háslin", "Hjalbeth", "Hjurrgat", "Hulf", "Harw", 
  "Ifrun", "Irdath", "Irfaid", "Keirnath", "Lurag", "Madhreth", "Margrainh", "Marthal", "Mearw", "Marzagh", "Megrim",
  "Milbeth", "Miharva", "Moirya", "Mordra", "Muraya", "Oighred", "Rachainh", "Saryja", "Sayja", "Sidheag", "Shinnarch",
  "Skraja", "Sorna", "Sorcha", "Thorhalla", "Thorra", "Thron(a)", "Uthra", "Yrrwa", "Yuchgard", "Yurrgira", "Ywen", 
  "Zurakka"
];

//prettier-ignore
const lastNames = [
  "vom Alrudh", "vom Dhartaech", "vom Lyrgach", "vom Mortakh", "vom Nielllyn", "vom Rayyadh", "vom Arryach-Mûr", "vom Benbhalûr", "vom Benskôth", 
  "vom Cregg-Yôlir", "vom Ishtar-Barr", "vom Oshthar-Sloch"
];

const lastNamesMalePrefix = ["bren "];

const lastNamesFemalePrefix = ["brai "];

const maleLastNames = maleFirstNames;

const femaleLastNames = femaleFirstNames;

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

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
  lastNamesMalePrefix,
  lastNamesFemalePrefix,
  maleLastNames,
  femaleLastNames,
  regionSpecifics,
};

//last names bzw sippenname können vorkommen müssen aber nicht
