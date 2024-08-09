//prettier-ignore
const maleFirstNames = [
  "Altheio(n)", "Aldec", "Anselm", "Anselmo", "Ansel", "Ardo(r)", "Arras", "Bardo", "Clardior", "Dignatus", "Emmeran", 
  "Emil", "Golboral", "Griff(an)", "Griffor", "Gurvan", "Hal", "Helbrom", "Helus", "Hilberan", "Holdec", "Jariel", 
  "Jodan", "Justo", "Kathay", "Lechand", "Losan", "Lumil", "Lozan", "Malzan", "Noraleo", "Oviran", "Praiobor", 
  "Praiadan", "Praidolf", "Praiogalm", "Praiogriff", "Praiolamin", "Praiolan", "Praiogar", "Praiofanor", "Quanior", 
  "Solindar", "Silem", "Solrik", "Sitpen", "Yarum", "Yeto"
];

//prettier-ignore
const femaleFirstNames = [
  "Alatheia", "Alda", "Algrid", "Amelthona", "Aureliana", "Branibora", "Clarita", "Dimione", "Glenna", "Gryphonia", 
  "Gurva", "Gusela", "Gwidûhenna", "Gwynnia", "Helia", "Ilumina", "Iusterna", "Jalinde", "Lechmin", "Linai", 
  "Luitperga", "Lumina", "Mirya", "Obarana", "Pomona", "Praiade", "Praioubra", "Prajodan", "Praiolania", "Praiolinde", 
  "Praiolulia", "Praiomin", "Praoitina", "Praioiara", "Usvine", "Vilmaja", "Yasinth"
];

//prettier-ignore
const lastNames = [
  "Bedofeld", "Beilbergen", "Beilunker", "Berda", "Eschberg", "Lichtblick", "Radrosmauser", "Salewald", "Stanzbuer", 
  "Tuchner", "Vildromtal", "Waltich"
];

//prettier-ignore
const nobleNames = [
  "Bergenhag", "Braken", "Faldahorn", "Förthenkuppe", "Graj", "Greifenau", "Greenfeldt", "Grünau", "Gildenbaum", 
  "Lichtwald", "Lichtenhain", "Radule", "Saldersand", "Streitzigj. H.", "Waldereck", "Zweiseen"
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
