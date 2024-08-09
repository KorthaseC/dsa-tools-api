//prettier-ignore
const maleFirstNames = [
  "Agdan", "Aki", "Ansgar", "Ansir", "Arngrim", "Arvid", "Asgrimm", "Askir", "Asleif", "Atli", "Atmaskott", 
  "Beorn", "Beowulf", "Bjarni", "Bjeri", "Bjorn(e)", "Brand", "Brynar", "Dongrimm", "Egil", "Eindrin", "Firik", 
  "Eldgrimm", "Faenwulf", "Firunjar", "Fjolnir", "Fjonn", "Frenjar", "Frodi", "Garald", "Garulf", "Geir", "Gerskir", 
  "Gunn(i)", "Hakon", "Halfdan", "Hallar", "Hardger", "Hardred", "Hasgar", "Helgi(r)", "Herleif", "Herm", "H(j)erolf", 
  "Hjall(di)", "H()almar", "H()aldar", "Hjelm", "Hjore", "Ingald", "Ingirid", "Ingibjorg", "Iskir", "Isl(e)if", "Jora(n)", 
  "Jurge", "Kari", "Karven", "Ketil", "Kjaskar", "Laskar", "Laske", "L(e)if", "Liskolf", "Maednir", "Noerre", "Norri", 
  "Olav", "Olgard", "Olgi", "Olvir", "Orgen", "Orm", "Orozar", "Ragnar", "Raskir", "Rekki", "Rodi", "Réngvald", 
  "Rorl(e)if", "Runolf", "Sigridur", "Sigrud", "Solvi", "Starkad", "Steinar", "Stirbjérn", "Sven"
];

//prettier-ignore
const femaleFirstNames = [
  "Akja", "A(e)lfhild", "Algrid", "Alvida", "Andra", "Anga", "Anhild", "Arva", "Asgerd(a)", "Asgrima", "Askra", 
  "Benomhild", "Bera", "Bjarnilda", "Blodgrima", "Branda", "Briderga", "Bryda", "Eilif (auch m)", "Eindara", 
  "Eirnid", "Eldgrima", "Estrid", "Eyvin", "Firunja", "Fjaellgard", "Frenja", "Fre(i)ya", "Fridger(a)", "Garhelt", 
  "Garhilda", "Grima", "Gunbritt", "Gunda", "Gundrid", "Hallbera", "Hardsgera", "Helma", "Hilda", "Hjalda", 
  "Hjaldis", "Hjalfrida", "Hjalka", "Hjalla", "Hjalma", "Hjelgira", "Hjora", "Hjordis", "Hrafnhild", "Idun", 
  "Ifiriane", "Ifimslinda", "Ikja", "Ingira", "Isliv(a)", "Jadra", "Jand(r)a", "Jora", "Jurga", "Karva", "Katla", 
  "Kjaska", "Korja", "Lialin", "Liflind", "Lingard", "Livka", "Marada", "Nellgard", "Norhild", "Odda", "Olburga", 
  "Olgerda", "Olverja", "Ragna", "Ragnnid", "Ragnild", "Raska", "Rötline(d)e", "Rorlif(a)", "Salda", "Shaya", 
  "Sigrid(a)", "Sigrun", "Solva", "Solveig", "Svala", "Svenja", "Svenna", "Swafgard", "Swafnild", "Swangard", 
  "Swanja", "Thora", "Thordis", "Thorfinna", "Thorhalla", "Thula", "Tjalva", "Torgrid", "Torlind", "Wulfgard(a)", 
  "Wulfhild(a)", "Wulflind(a)", "Yasma"
];

//prettier-ignore
const clanNames = [
  "Donnerkeil", "Eiswinger", "Eldgrimm", "Fjordzwinger", "Geraldsson", "Gischtreiter", "Haitaucher", "Hammerfaust", 
  "Hjorn", "Kleipunz", "Lassirer Drachen", "Nordlicht", "Orkschläger", "Seewölfe", "Sturmkindler", "Sturmreiter", 
  "Sturmsegler", "Thorfinn", "Walsinger", "Wellenbrecher", "Windlästerer", "Windzwinger", "Wogenreiter"
];

const maleLastNames = [...maleFirstNames, ...femaleFirstNames];

const femaleLastNames = [...maleFirstNames, ...femaleFirstNames];

const lastNamesMaleSuffix = ["son"];

const lastNamesFemaleSuffix = ["dottir"];

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: true,
};

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  maleLastNames,
  femaleLastNames,
  lastNamesMaleSuffix,
  lastNamesFemaleSuffix,
  clanNames,
  regionSpecifics,
};

//bei dem nachnamen die sowohl der von mutter als auch vater stammen kann wird entsprechend das geschlecht suffix angehängt
