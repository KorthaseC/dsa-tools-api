//prettier-ignore
const maleFirstNames = [
  "G'Hshev", "Ghuls(h)ev", "Hach'Nhbah", "H'Azzrabal", "H'rmanoszza", "Hszinthiego", "Je'Hsszafer", "Kanzsim", 
  "Khrim", "K'shban", "Ks'henofero", "M'Hdul", "M'Hkkadin", "M'Hmud", "M'Hnach", "M'Hrabal", "M'lekh", 
  "Meszz'Hek", "N'Hapreszza", "Naszirh", "Naszzr'Heddin", "Neb'Hath", "Neszt'hario", "Nezz'Haet", "Om'Hrr", 
  "Pak'Hizzal", "P'Hzorro", "Prh'man", "Rafisz", "Raszman", "Raszt'Fan", "R'Ban", "R'Chan", "Rezzan", 
  "R'Hal", "R'Hayad", "R'Hukeyf", "R'Shim", "Szahid", "Szahil", "Szalpico", "Szedhef", "Szelhim", 
  "Szhaiman", "Szimodo", "Szulhaman", "Yelmisz", "Yuszufh", "Z'Hal", "Z'Hir", "Z'hurberan", "Z'lhamid", 
  "Zz'chabn", "Zzandrho"
];

//prettier-ignore
const femaleFirstNames = [
  "Chli'Bah", "Daszzareth", "Emerensziha", "Erszz'Beth", "Esmalda", "E'Zshila", "Ezzmerald'ha", "Ferusz'Han", 
  "Heyeszhan", "H'Liantha", "Inarézzh", "Izz'Hmelde", "Jezz'Hbella", "Khorraszzén", "Ks'Antilha", "Ks'Imena", 
  "M'Hiban", "M'Lhbeth", "M'Rszhan", "N'Bra", "N'Hma", "N'han", "N'Sliha", "N'Zzmeya", "Oncha'Bth", 
  "P'Rrishan", "P'Rrizzl", "Rach'Hjadézz", "Rhnah'ban", "R'Shmin", "Sh'hane", "Sz'Hanja", "Sz'Harssad", 
  "sh'Hazzadra", "Szajidah", "Szaranya", "Searjabhan", "Sze? Hira", "Sz'Hbra", "Szhenny", "Sz'Herizzeth", 
  "Se'Heydan", "S2'Hlibeth", "Sz'Hlime", "Sz'Huhelja", "Sz'Hulam", "Sz'Mirhija", "Szilla", "Tomasszina", 
  "Veszsandra", "Yeszhinna", "Yezzemin", "Z'Llhamin", "Zzhalinés", "Zzhephirina", "Zzheradiha", "Zz'Hiban", 
  "Zzhar'Hrabellha", "Zz'Hrabeth"
];

//prettier-ignore
const lastNames = [
  "al'Azzar", "al'Chadim", "al'Uruch", "Delassa", "Denar'z", "Hassanesz", "Harlamug", "H'Lem", "Khajszir", 
  "Musten'Cha", "Razzim", "Sayaladam", "Shr'szar", "Szaguaro", "Szelemati(h)", "Zeszhayad", "Zurshazs"
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

module.exports = { maleFirstNames, femaleFirstNames, lastNames, regionSpecifics };
