//prettier-ignore
const maleFirstNames = [
  "Aalrik", "Aargal", "Argal", "Barl", "Bornz", "Borstjew", "Brini", "Bruutsch", "Ceet", "Chraaz", 
  "Chruuk", "Dravuvo", "Dreggi", "Duchdo", "Eelko", "Ertzel", "Ettel", "Firurz", "Gnatz", "Gnap", 
  "Golle", "Gorm", "Gragh", "Grimrow", "Groben", "Groggi(s)", "Grohm", "Groink", "Grootz", "Grul", 
  "Gruum", "Gurkij", "Guurkh", "Haag", "Haal", "Hurdlo", "Iigor", "Jaak", "Jaast", "Joost", "Joraak", 
  "Juch", "Kwörk", "Norf", "Norfjew", "Örf", "Öswinn", "Paawel", "Peer", "Pettarh", "Pheliks", "Polter", 
  "Priidul", "Ragnaak", "Raul", "Röffjew", "Sulrik", "Suviini", "Traak", "Tschak", "Urjil", "Urmeg", 
  "Urmek", "Uugo", "Vulpo", "Vurl", "Xätsch", "Xeebert", "Xeetsch"
];

//prettier-ignore
const femaleFirstNames = [
  "Aada", "Aagnitas", "Alda", "Cela", "Danikkaa", "Danutija", "Dorlien", "Eela", "Elilyn", "Elkewiene", 
  "Gribin", "Gribina", "Hel(la)", "Hildis", "Idra", "Irinija", "Jääni", "Jacula", "Jadviken", "Jaunavai", 
  "Kasuus", "Khischaa", "Leelos", "Linai", "Maaline", "Maalis", "Merischja", "Morkaajesha", "Nana", "Ol ja", 
  "Oozolwine", "Phexlin", "Porsa", "Prähinds", "Russuula", "Sakuuska", "Schanmä", "Scherschai", "Seenä", 
  "Sewejescha", "Sieva", "Sievaaken", "Siisikai", "Sinja", "Sulje", "Sunku", "Suviintä", "Theeschja", 
  "Tineeka", "Tjulkaa", "Treeschke", "Tschiiba", "Üinin", "Urjeelke", "Ushka", "Uulkra", "Uulankaa", 
  "Varmijeschaa", "Viivä", "Wlaada", "Yaanis", "Yedrä", "Zokatjaa"
];

//prettier-ignore
const lastNames = [
  "Abdecker", "Altlapper", "Bangra", "Bornske", "Borstensen", "Braunrot", "Drulga", "Fahlrot", "Feinpelz", 
  "Festumse", "Feudlebess", "Feueroth", "Fleckenpelz", "Gerbensen", "Gerberow", "Glumske", "Grauorth", 
  "Groopski", "Haritzka", "Heidorth", "Ilumske", "Kaiba", "Krummrücken", "Kupferpelz", "Kürschner", 
  "Lederer", "Lettka", "Lohgar", "Löscher", "Olkolka", "Ouvski", "Rattentoth", "Rödestrupp", "Schinder", 
  "Sempelka", "Silberstreif", "Sirinski", "Smueddlvies", "Steinzahl", "Swerenja", "Swinsikj", "Vieltrag", 
  "Walasksihj", "Wutzkij"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
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
  regionSpecifics,
};
