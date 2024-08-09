//prettier-ignore
const maleFirstNames = [
  "Agaloch", "Allerbatsh", "Bagsch", "Banderatsch", "Berkhold", "Bombatsch", "Bomborosch", 
  "Bompeldatsch", "Bortosch", "Brototaksh", "Budotash", "Dollarkust", "Forkhold", "Gneiserich", 
  "Gnorix", "Gramumpf", "Graugdash", "Grimdasch", "Grollombotsch", "Gsmatsch", "Gumbladosch", 
  "Hilkhold", "Kahrtamar", "Kerbhold", "Knopphock", "Krorer", "Krallerwatsch", "Krallulatsch", 
  "Kraschtonk", "Kroppgomp", "Krumpletaratsch", "Latschdusch", "Murldatsch", "Römpldatsch", 
  "Ronkhhold", "Rumpold", "Rurak", "Strampuff", "Strock", "Strotrom", "Sturzz", "Stubenbar", 
  "Tarbasch", "Tarmpff", "Tarmilan", "Torkomp", "Traillaufsch", "Troddsch", "Trollatsch", 
  "Tublosch", "Tumpatsch", "Wungwatsch", "Ylkholt"
];

//prettier-ignore
const femaleFirstNames = [
  "Aldascha", "Amakscha", "Bagoscha", "Bartroscha", "Borrcke", "Doscha", "Dotscha", "Draschpatscha", 
  "Durchsanma", "Ellermudd", "Garlescha", "Gnoscha", "Goscha", "Grascha", "Grauramek", "Grollcke", 
  "Grollgascha", "Gumuncke", "Horoschka", "Illkscha", "Knopphild", "Knorralka", "Knorrholde", 
  "Knoschpanke", "Krallschka", "Knaschta(r)", "Kullamenke", "Latschka", "Manscha", "Moschgrimma", 
  "Murscha", "Ornda", "Pompfke", "Roschara", "Ruppicke", "Schmorka", "Schemmme", "Slibberhaaar", 
  "Tromprancke", "Trumpke", "Urte", "Wamruncke", "Wantascha"
];

//prettier-ignore
const lastNames = maleFirstNames;

//prettier-ignore
const epithets = [
  "Ahnennsänger", "Blutsänger", "der Frevler", "der Ketzer", "der Traumspötter", "die Ausgestoßene", 
  "die Verlorene", "Einarm", "Mondfelsenlauscher", "Mondmachtweber", "Ork(stumpf)hauer", "Silberhaar", 
  "Stumpfhauer", "Trollfaust", "Trollhau", "Wimmelkriegerfreund", "Zottelhaar", "Zweigesicht"
];

//prettier-ignore
const clanNames = [
  "Argampf", "Bumbartosch", "Drolldarsch", "Gotschomp", "Kambeltampf", "Matschalatsch", 
  "Mulmarotsch", "Rudhrasch", "Trampeldasch", "Trollgrash", "Urmlatasch", "Zumbeltosch"
];

const lastNamesMalePrefix = ["Sohn des "];

const lastNamesFemalePrefix = ["Tochter des "];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
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
  lastNames,
  lastNamesMalePrefix,
  lastNamesFemalePrefix,
  epithets,
  clanNames,
  regionSpecifics,
};
