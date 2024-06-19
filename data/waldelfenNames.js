//prettier-ignore
const maleFirstNames = [
  "Aelindir", "Alarion", "Alanel", "Albion", "Alirion", "Amariel", "Amarylion", "Aranel", "Aratahon", 
  "Ardarell", "Arikarion", "Ariolan", "Arsalion", "Avalarion", "Biundralar", "Calhenheri", "Calomiriel", 
  "Ciryaniil", "Delaîma", "Delayar", "Dendayar", "Diundriel", "Eber(e)on", "Elbrenell", "Eldariel", 
  "Eldarion", "Elestir", "Elina(r)on", "Elsurion", "Fælændal", "Faelindel", "Fanaion", "Fanoë(n)", 
  "Fanloën", "Farnion", "Farivirloel", "Felerlain", "Feysiriel", "Firionel", "Floriel", "Glilon", 
  "Goldion", "Hanyariel", "Ilcoron", "Ilmamaiel", "Ilmaion", "Imon", "Imrayon", "Jyvindar", "Lamandorn", 
  "Laryllan", "Lellindor", "Lindariel", "Lindion", "Lorindion", "Lorion", "Mand(a)rion", "Mandavar", 
  "Marnion", "Mer(d)arion", "Nyadawin", "Navarion", "Nindariel", "Oioild", "Olindar", "Olivindar", 
  "Ranarior", "Sanyadriel", "Sanyarin", "Talayar", "Tuleirin", "Valandriel", "Valayar", "Varlaran", 
  "Vindarel", "Visalayr"
];

//prettier-ignore
const femaleFirstNames = [
  "Adailana", "Ada(i)loë", "Ailiniel", "Alaniel", "Alari", "Allacaya", "Allechandriel", "Amariel", 
  "Arallian", "Asamandra", "Belimonë", "Biundrala", "Calaya", "Calenleya", "Ciryaniil", "Daleonë", 
  "Dariala", "Dariavida", "Darindel", "Dialya", "Dimeloë", "Eäriel", "Eiliniel", "Elayoë", "Eldalë", 
  "Esdiraï", "Faelindel", "Feyariä", "Fianna", "Fiannon", "Filyna", "Florindel", "Gwendala", "Gwendel(la)", 
  "Haleonë", "Himiyana", "Ilmariel", "Ivriniel", "Kilanrana", "Lauriel", "Layariel", "Leyloën", 
  "Liasanya", "Lielil", "Liloë", "Lorindel", "Lorindië", "Lynissel", "Lysira", "Mandara", "Mayaharia", 
  "Mayana", "Melaonë", "Milalëë", "Milmiria", "Miriel", "Miriyama", "Naheniel", "Nindariel", "Odania", 
  "Oioial", "Oimonël", "Racalla", "Rhena(ya)", "Rhiannon", "Rileona", "Safiriel", "Sahanya", "Saliyomë", 
  "Sanary", "Sanyadriel", "Sanyaran", "Shaya", "Shayariel", "Sindria", "Teleria", "Ufnidel", "Valaria", 
  "Valeriania"
];

//prettier-ignore
const epithets = [
  "Ahornlied", "Bogentänzer", "Dornengänger", "Dunkelpfel", "Erlenhüter", "Eulenschwinge", "Flockenläufer", 
  "Flötenspiel", "Frühlingslachen", "Fuchsläufer", "Krähneruf", "Krallenglanz", "Luchsreiter", "Mistelzweig", 
  "Mondpfad", "Mondläufer", "Nachtlied", "Nebellicht", "Nebelpfad", "Reifbringer", "Schachtelhalm", 
  "Schattentänzer", "Schwalbenfreund", "Schwarzmoos", "Schwarzstamm", "Sturmreiter", "Tannenwächter", 
  "Tannenweg", "Tarnelmschützer", "Tränensucher", "Ulmenhüter", "Ulmenzauber", "Weidenschützer", 
  "Wolfssang", "Wolkentanz", "Zauberfalter"
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
  hasClanNames: false,
};

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  epithets,
  regionSpecifics,
};
