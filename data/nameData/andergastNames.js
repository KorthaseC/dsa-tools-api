//prettier-ignore
const maleFirstNames = [
  "Andraus", "Arnbold", "Bogumil", "Bogumislaus", "Borkfried", "Depold", "Detter", "Eichbald", "Eichward", "Erlmann",
  "Eulrich", "Firunislaus", "Firunz", "Gartwald", "Gerwulf", "Gilm", "Gosthelm", "Gwinnling", "Havel", "Holmar",
  "Jagoslaus", "Jindrich", "Krusold", "Ludewich", "Marik", "Mispert", "Odoring", "Ogo", "Olderich", "Osgar",
  "Oswald", "Seffel", "Steinrich", "Strammgert", "Sumudan", "Sumudor", "Trogar", "Ulfried", "Urichslaus",
  "Wendemar", "Wendolyn", "Wengelyn", "Wenzeslaus", "Zoltan"
];

//prettier-ignore
const femaleFirstNames = [
  "Andela", "Andra", "Arnhild", "Asumudette", "Berga", "Birsel", "Domela", "Dorota", "Erlgard", "Farnlieb",
  "Fira", "Freilinde", "Gerswide", "Gundel", "Hadwiga", "Hilda", "Holdtraude", "Ifirngund", "Ildaria",
  "Irmela", "Kascha", "Kunhuta", "Larja", "Ludmila", "Marmelunde", "Mina", "Mirnhild", "Nia", "Silvana",
  "Sumiana", "Suminella", "Treshka", "Trautgold", "Traviane", "Rusena", "Varena", "Waldegund", "Wendeline"
];

//prettier-ignore
const lastNames = [
  "Alrikshuber", "Birgelbaum", "Bodiak", "Borkmeister", "Dreuber", "Eichinger", "Fassbender", "Flößler",
  "Haubeiler", "Holzgut", "Holzhauer", "Joborner", "Karden", "Krück", "Kuhbauer", "Meeltheuer", "Ochsenbrecht",
  "Peutler", "Roskop", "Sattelhuber", "Sehweinwirt", "Seffelgruber", "Seggenmund", "Straub", "Tannhauser",
  "Wenzelin", "Wulfen", "Zibbelgruber"
];

//prettier-ignore
const nobleNames = [
  "Bärental", "Billingen", "Borkenquell", "Buchenhain", "Egeling", "Kolburg", "Langfurt", "Leuengrund",
  "Otternpfot", "Reichenstieg", "Rotbaum", "Rothschild", "Schönburg", "Steineichenwacht", "Tatzenhain",
  "Tiefenklamm", "Zitterfels", "Zornbold"
];

const lastNamesFemaleSuffix = ["in"];

const maleLastNames = lastNames;

const femaleLastNames = lastNames;

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, maleLastNames, femaleLastNames, nobleNames, lastNamesFemaleSuffix, regionSpecifics };

//der suffix wir immer an den nachnamend er frau gehängt
