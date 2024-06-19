//prettier-ignore
const maleFirstNames = [
  "Aatto", "Abjo", "Adjok", "Altanan", "Arjuk", "Bannuk", "Beranen", "Berko", "Binjok", "Danjuk", "Enban", "Eikaljok", 
  "Eiko", "Erik(i)", "Enan", "Enko", "Enuk", "Erm Sen", "Finjhon", "Garnuk", "Genko", "Gurjinen", "Hanko", "Hautan(an)", 
  "Heimnauk", "Hietanen", "Honuk", "Horganan", "Iivarr", "Jan", "Jas", "Jorisnen", "Jurtan(an)", "Kaikankuk", "Karukujko", 
  "Kautno", "Keinjo", "Kernovan", "Kiamu", "Kilhi(j)o", "Kinajo", "Kintan(an)", "Kylanäk", "Lanan", "Lattu", "Lieto", 
  "Loschim", "Madä(nan)", "Maenan", "Miko", "Neajo", "Nejhan", "Numjo", "Poukai", "Raiko", "Rasjuk", "Rik(i)", "Sein(j)o", 
  "Tojok", "Uljok", "Valen", "Valjok", "Zeino"
];

//prettier-ignore
const femaleFirstNames = [
  "Aikku", "Ariksela", "Amuri", "Au(k)aiju", "Baituri", "Beri", "Bjanju", "Dakauju", "Dana", "Duri", "Eikajau", "Eskola", 
  "Falkja", "Guaäna", "Hallri", "Hauka", "Helja", "Hikia", "Janaha", "Jokela", "Jonuri", "Ek Rajani", "Kataba", "Kajenju", 
  "Kelva", "Kisa", "Kuopi", "Lauka", "Leenja", "Lieskau", "Loaja", "Mido", "Mu-rula", "Märja", "Nahji", "Najaljevena", 
  "Neli", "Niuka", "Nivalaukij", "Ojakalla", "Ol(p)i", "Pel-tuj", "Pori", "Rauma", "Roika", "Sakari", "Taimi", "Terhi", 
  "Tulja", "Tiensu", "Talsa", "Ulu", "Usi", "Vailara", "Viela", "Viek(i)", "Vijatsa", "Zurti"
];

//prettier-ignore
const lastNames = [
  "Hokke", "Kaiku", "Kaiyakuu-Lie", "Kettu-Lie", "Kyljänäk", "Lieska-Jaärna", "Lieska-Kangerluk", "Lieska-Leddu", 
  "Lieska-Lie", "Lieska-Madukju", "Majava-Lie", "Navalaukij", "Rika-Lie", "Takku", "Toivoa", "Uusipuaki", "Villikauka"
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

//clan namen oft als nachnamen verwendet
