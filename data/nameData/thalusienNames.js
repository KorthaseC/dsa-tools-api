//prettier-ignore
const maleFirstNames = [
  "Ahjanankhra", "Ajit", "Amar", "Ankhra", "Ashar", "Bahram", "Bharma", "Djaffar", "Dolgurug", "Duwok", 
  "Elkarim", "Erkhaban", "Esam", "Faramud", "Harak", "Haschabna", "Hashin", "Hraban", "Kalkarib", "Karesh", 
  "Kasan", "Kasib", "Khunsha", "Mardhur", "Mhapasha", "Mozaffa", "Mustafa", "Muyanpasha", "Muzaffer", "Najara", 
  "Perhiman", "Rashaman(a)", "Rhayad", "Rifat", "Sayesh", "Selim", "Shantir", "Sulman", "Surkan", "Tamir", 
  "Waddif", "Yadail", "Yadda", "Yussam", "Zamir"
];

//prettier-ignore
const femaleFirstNames = [
  "Abrizah", "Amina", "Anupame", "Asha", "Azalee", "Azilabati", "Azizel", "Bastrabeth (Bastrabati)", 
  "Bitharam", "Buhrami", "Dalilah", "Elmandasi", "Halifa", "Jushibi", "Lailatum", "Madayanti", "Manyola", 
  "Mechallabith", "Mellabati", "Meera", "Meribani", "Naranya", "Peraschija", "Peri(beth)", "Raschanti", 
  "Sabaram", "Sabatum", "Sharisad", "Shenny", "Shukurani", "Suriyabati", "Suryabeth", "Yazamin", "Zahrasadja"
];

//prettier-ignore
const lastNames = [
  "Abukhuncha", "Adjani", "Albahram", "Alhashim", "Alkhalim", "Bruckensi", "Brucktal(er)", "Elawall", 
  "Elessam", "Elyussam", "Misaryesh", "Nabatili", "Ongalabadi", "Perhimani", "Reistreter", "Ronissagami", 
  "Thalusfurter", "Zulhamidi"
];

//prettier-ignore
const epithets = [
  "Aal-", "Abtakel-", "Abtritt-", "Achter-", "Affenfaust-", "Altoum-", "Anbohrer-", "Anker-", "Ausguck-", "Backbord-", 
  "Barken-", "Beidreh-", "Belegnagel-", "Bilgen-", "Blut-", "Blutauge(n)-", "Bootsmacher-", "Bordschwein-", "Boronstaucher-", 
  "Brabacuda-", "Brisen-", "Bug-", "Charypso-", "Deckschrubber-", "Dublonen-", "Efferd-", "Einäugig-", "Einhand-", 
  "Einschleicher-", "Entermesser-", "Filzlaus-", "Flaggen-", "Fusel-", "Geißel-", "Ghurenia-", "Gold-", "Goldzahn-", 
  "Haken-", "Hakenhand-", "Hängematten-", "Harpunen-", "Heck-", "Holzbein-", "Hornissen-", "Jungfer-", "Kaventsmann-", 
  "Kenter-", "Kielhol-", "Kielwasser-", "Klabauter-", "Knoten-", "Koggen-", "Kutter-", "Landgang-", "Landratten-", 
  "Leuchtfeuer-", "Meskinnes-", "Messer-", "Meuter-", "Muränen-", "Mützen-", "Nebel-", "Necker-", "Ohnezeh-", "Papageien-", 
  "Peitschen-", "Perlen-", "Piranha-", "Planken-", "Plankentod-", "Prisen-", "Rochen-", "Rotzen-", "Ruder-", "Rum-", 
  "Sibel-", "Schiffszwieback-", "Schnapp(e)s-", "Schuppen-", "Seegras-", "Seegurken-", "Silber-", "Smutje-", "Sprotten-", 
  "Starkarm-", "Sterngucker-", "Steuerbord-", "Stiefelriemen-", "Sylla-", "Takelagen-", "Tang(feld)-", "Überbord-", 
  "Uthuria-", "Waldinsel-", "Windpinkler-", "Wogen-", "Wrack-", "Wudu-", "Zahnlücken-", "Zauber-", "Zitter-", "Zossen-", 
  "Zwinker-"
];
const maleLastNames = maleFirstNames;

const femaleLastNames = femaleFirstNames;

const lastNamesMalePrefix = ["ibn ", "ben "];

const lastNamesFemalePrefix = ["saba "];

const lastNamesFemaleSuffix = ["sun(n)i ", "sunya"];

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: true,
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
  epithets,
  maleLastNames,
  femaleLastNames,
  lastNamesMalePrefix,
  lastNamesFemalePrefix,
  lastNamesFemaleSuffix,
  regionSpecifics,
};

//prefix und suffix nur wenn der Vater name für den männlichen namen oder für töchter der muttername verwendet wird
