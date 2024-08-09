//prettier-ignore
const maleFirstNames = [
  "Angardur", "Asgold", "Askleivir", "Balkur", "Banibeorn", "Bardagimur", "Baskir", "Blotgrim", "Blotulfur", "Bodvar",
  "Darnlaugr", "Darkir", "Engur", "Felldur", "Fenrissir", "Fjallgart", "Frungrim", "Frunibrandt", "Frunobar", "Frunwulf",
  "Gjallur", "Greimdrur", "Harsthor", "Havgrimur", "Heffnard", "Herfnir", "Hjanir", "Hjant", "Hjort", "Hjorvard", "Ilkjart",
  "Ilvnir", "Isgrinur", "Jolmi", "Kargrim", "Kladogant", "Mjosgur", "Pandur", "Raluf", "Sigrindur", "Skarbeorn", "Skjoldur",
  "Snallnard", "Snarkir", "Songrimur", "Steinthor", "Surthor", "Svartbanir", "Tjuntart", "Torgrim", "Tronthor", "Valbrand",
  "Waleif"
];

//prettier-ignore
const femaleFirstNames = [
  "Angveig", "Arnthrudir", "Asgora", "Baska", "Bjorga", "Blotsaxa", "Dandagard", "Draumirga", "Fenrissa", "Frunvirga",
  "Funudara", "Fyrveig", "Gimmahalra", "Gunnlaug", "Halfga", "Halstakkara", "Hellgard", "Hildur", "Hoelgjirda", "Ifnirga",
  "Irngrid", "Isjarda", "Jaldrud", "Karherga", "Lotgara", "Lykvuda", "Lyrveig", "Ordruna", "Rangra", "Rannveig", "Sigrundra",
  "Sirngrid", "Sisnaveld", "Skarda", "Skirngard", "Snorja", "Svallveig", "Svannlaug", "Svellgra", "Ulfgard", "Varrag", "Walgrid",
  "Walgrimdra", "Wyrmtrud", "Ylwa", "Yngheldir"
];

//prettier-ignore
const epithets = [
  "der Allesesser", "Bärenzwinger", "Bluträchern", "die Blutsäuferin", "Donnerschrei", "Eisenschwingerin",
  "Eisläufer", "Fellreißerin", "Feuerbringer", "Frostherz", "Frostzunge", "die Furchtlose", "Grimmauge",
  "Keulenbrecher", "Schneeschleicher", "Stoßzahnbrecherin", "Todesaxt", "Todesklinge", "Todespfeil",
  "Todesfaust", "der Unbezwingbare", "Vollstreckerin", "der Wächter", "Wildherz"
];

//prettier-ignore
const clanNames = [
  "Bluttrinker", "Doppelaxt", "Eisbrecher", "Eisfuchs", "Firnklippen", "Frostfeuer",
  "Funkenglut", "Grimmfrost", "Schreiende-Schwerter", "Sturmbrüller"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: true,
};

module.exports = { maleFirstNames, femaleFirstNames, epithets, clanNames, regionSpecifics };

//können ehrennamen hier lastnames und clan namen nutzen oder nur eins von beiden
