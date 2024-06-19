//prettier-ignore
const maleFirstNames = [
  "Angfold", "Aranol", "Ardin", "Ardo", "Argos", "Arras", "Arvin", "Badaur", "Barno", "Belamir", "Beldoner", "Bofel", 
  "Beoen", "Beylhardt", "Bram", "Branidahl", "Dardulan", "Darpatio", "Debrek", "Egtor", "Enarch", "Erlan", "Falgund", 
  "Falk", "Fangol", "Falalan", "Feyderich", "Frinlgas", "Galbo", "Gerbald", "Godehard", "Graburter", "Griffon", 
  "Grumo", "Gundra", "Hadrik", "Hagenbert", "Halwart", "Helburt", "Hesindian", "Hlûthar", "Isegrein", "Jolen", 
  "Karyd", "Marvelon", "Melcher", "Miron", "Myrind", "Narbod", "Narles", "Narres", "Nasilidr", "Occam", "Olorand", 
  "Orgil", "Padir", "Pallo", "Praan", "Rakulios", "Regolan", "Rondrogad", "Rudegar", "Saturos", "Scaranian", 
  "Sig(e)rain", "Sighelm", "Sigman", "Tairona", "Torben", "Valtoron", "Vino", "Wendelmir", "Wendolyn", "Werion", 
  "Wilmeirch", "Yann"
];

//prettier-ignore
const femaleFirstNames = [
  "Aliana", "Alissa", "Arda", "Angrina", "Artema", "Arda", "Arva", "Avia", "Bana", "Beylfird", "Birkhild", "Borana", 
  "Brangolda", "Brazira", "Celda", "Daria", "Dryada", "Elida", "Franelda", "Gitta", "Godera", "Hitta", "Idra", 
  "Isundra", "Khorena", "Lechmin", "Leonore", "Lutgard", "Luminella", "Luta", "Marsilia", "Melwina", "Myrva", 
  "Nantwina", "Nettel", "Nurdania", "Ondina", "Periana", "Peranjassa", "Quelda", "Racalla", "Rantalina", "Reingard", 
  "Roana", "Rondaria", "Rowena", "Salbarga", "Sephira", "Sieglavis", "Sukra", "Svelinya", "Travinana", "Tsailanda", 
  "Ulana", "Vandra", "Vanjescha", "Waldrada", "Wina", "Yindra", "Zaljoda"
];

//prettier-ignore
const lastNames = [
  "Arlovan", "Arresta", "Bader(er)", "Barbek", "Belketal", "Branugion", "Bugenhog", "Corfaia", "Debreker", "Doredan", 
  "Draustein", "Fenwasian", "Geltor", "Haverdan", "Hiligon", "Kasmir(yön)", "Kurfeld", "Melkom", "Mercator", "Tlarun", 
  "Ulaman", "Ulfaarn"
];

//prettier-ignore
const maleLastNames = [
  "der Achtbare", "der Aufrechte", "der Aussätzige", "der Axtschwinger", "der Bauernfreund", "der Blutige", "der Breite", "der Dicke", 
  "der Eilte", "der Faule", "der Große", "der Hochgewachsene", "der Jäger", "der Kalte", "der Kleine", "der Kluge", "der Kühne", "der Kurze", 
  "der Langhaar", "der Legionär", "der Priesterfreund", "der Raue", "der Schlaue", "der Stolze", "der Treue", "der Trinker", "der Untreue", 
  "der Vernarbte", "der Wahnsinnige", "der Zänksiche", "der Zornbold"
];

//prettier-ignore
const femaleLastNames = [
  "die Achtbare", "die Aufrechte", "die Aussätzige", "die Axtschwingerin", "die Bauernfreund", "die Blutige", "die Breite", "die Dicke", 
  "die Eilte", "die Faule", "die Große", "die Hochgewachsene", "die Jäger", "die Kalte", "die Kleine", "die Kluge", "die Kühne", "die Kurze", 
  "die Langhaar", "die Legionärin", "die Priesterfreund", "die Raue", "die Schlaue", "die Stolze", "die Treue", "die Trinker", "die Untreue", 
  "die Vernarbte", "die Wahnsinnige", "die Zänksiche", "die Zornbold"
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

module.exports = { maleFirstNames, femaleFirstNames, lastNames, maleLastNames, femaleLastNames, regionSpecifics };

//epothets oder nachnamen nicht in kombination for die epothes wird der artikel der oder die gehangen
