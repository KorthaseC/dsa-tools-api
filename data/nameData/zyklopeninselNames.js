//prettier-ignore
const maleFirstNames = [
  "Aisyrphan", "Alrikos", "Amenealos", "Amdeos", "Avasios", "Avessandar", "Belemanias", "Berytos", "Chysos", 
  "Darion", "Dirimetheos", "Effadarios", "Horakles", "Ingerydos", "Kalthas", "Karydios", "Kykarios", "Madajon", 
  "Meneander", "Mermydion", "Mironos", "Odendios", "Okeanardos", "Peleïstion", "Pelmiades", "Peraistos", 
  "Praïokles", "Pydilion", "Rahjenyios", "Rahjoros", "Rondrakes", "Seneb", "Sidor", "Stoelios", "Thalanios", 
  "Thynda(r)jos", "Tykates", "Tyndareos", "Xeleidonios", "Ximater", "Yidaïyon", "Zephyros", "Zesrad"
];

//prettier-ignore
const femaleFirstNames = [
  "Aglaÿa", "Aldara", "Alrike", "Apogea", "Araške", "Aurika", "Avesinna", "Beleneïa", "Boronike", "Borothea", 
  "Chysalis", "Efferdiana", "Garafanïa", "Harika", "Ingerydike", "Insïna", "Iskaote", "Iolantha", "Korina", 
  "Kyklaïna", "Lanïke", "Leonore", "Liaïella", "Menkrides", "Mira", "Myrtale", "Nautika", "Nemeaka-the", 
  "Nermaka", "Odenia", "Peraina", "Phaylioïnya", "Phyllinna", "Phyllis", "Praaïste", "Praïope", "Rahja(nïd)is", 
  "Rahjamandra", "Rondrike", "Sapeïdra", "Telemanche", "Thalassandra", "Tsaëdra", "Tsaaïdne", "Xelena", 
  "Yppodamae", "Zoïra", "Zyraste"
];

//prettier-ignore
const lastNames = [
  "Amranthis", "Antonomos", "Armedos", "Atholios", "Beuerys", "Bupheistos", "Bythrios", "Calakis", "Chyrikos", 
  "Daneïos", "Darostis", "Dorianrdos", "Dorikeikos", "Ego-rythios", "Ertholïos", "Garothis", "Gaumanthis", 
  "Grapheïos", "Gryphïlos", "Hethmanios", "Ken-kaukis", "Kolemästos", "Kyrkandros", "Laïkis", "Lorkis", 
  "Lytha-lis", "Memathïis", "Mero-gios", "Moulïssos", "Myiäbulos", "Nau-machis", "Nestriotis", "Olemanïos", 
  "Ozyreïos", "Phyrikos", "Praïopoulos", "Pydoktis", "Spha-reïos", "Sphyritis", "Stygmalion", "Styrmikos", 
  "Tantalaïas", "Thorgantas", "Tymemidios", "Tyrakis", "Ulyïos", "Xanthalas", "Ykladis", "Zaturïas",
  "Akidosa", "Arkisa", "Baltrea", "Dubara", "Heliopolosa", "Hylaïlosa", "Hylypia", "Kethas Kethenisa", "Kutakia", 
  "Lardosa", "Mylamasa", "Pailosa", "Phenosa", "Phrygaïosa", "Putrasa", "Tenosa", "Teremona", "Tyllosa", "Tyrakisa",
  "Aryïosa", "Athyrosa", "Ayodona", "Balträa", "Fereina", "Garéna", "Laryïosa", "Lÿjosa", "Mura", "Palakara", "Putrasa"
];

//prettier-ignore
const nobleNames = [
  "dyll Aleistos", "dyll Aralthis", "dylli Cosseïra", "dylli Garén", "dylli Lÿjos", "dylli haliyin", "dyll Uÿos"
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
