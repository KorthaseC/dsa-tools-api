//prettier-ignore
const maleFirstNames = [
  "Aarwin", "Abbo", "Adalric", "Aedin", "Angord", "Aureus", "Baldos", "Basin", "Bodar", "Brun", "Celio", "Cian", "Donewald", 
  "Dorcas", "Eddo", "Elko", "Fulger", "Gebbert", "Gerfild", "Gorwin", "Grifo", "Hagrian", "Hartuwal", "Heriland", "Hilberan", 
  "Humbran", "Ingeras", "Ingmar", "Irian", "Jast", "Jorgast", "Kalver", "Koradin", "Leodegar", "Lucramn", "Markward", 
  "Merkan", "Morand", "Nerek", "Odumir", "Pagol", "Quendan", "Rabanus", "Radbod", "Radulf", "Rupo", "Sandrad", "Sigred", 
  "Sirin", "Ulfried", "Vitold", "Walram", "Wando", "Winfrid", "Wunnemar", "Yendan"
];

//prettier-ignore
const femaleFirstNames = [
  "Adula", "Alwe", "Amafis", "Auxilia", "Basilissa", "Beregis", "Bilhild", "Calderine", "Daria", "Dhuoda", "Elida", "Elwene", 
  "Ermelind", "Frederun", "Gelka", "Gezelin", "Guda", "Gundelin", "Hadlind", "Hemma", "Imelda", "Isavena", "Isfrid", 
  "Isora", "Iveta", "Jocasta", "Lioba", "Luassa", "Lucasta", "Mafalda", "Mayura", "Mika", "Miril", "Olda", "Orudrel", 
  "Prinana", "Rabanna", "Raxa", "Regintrud", "Richild", "Roana", "Siric", "Talina", "Utsine", "Vea", "Veriya", "Wiltrud", 
  "Wina", "Witta", "Zaberga"
];

//prettier-ignore
const lastNames = [
  "Arsinger", "Bachtenbrecht", "Bergner", "Bock", "Demheim", "Drachenschlag", "Eisenblatt", "Engstrand", "Flussweiser", 
  "Grubrech", "Halbach", "Harbener", "Holzer", "Laussinger", "Kleibock", "Klippstein", "Kratosmann", "Kynderer", "Marag", 
  "Outerich", "Salzbuck", "Schollbrecher", "Sturmtrutzer", "Ulmdur", "Windrufer"
];

//prettier-ignore
const nobleNames = [
  "Aichhain", "Drachenwacht", "Greifenklamm", "Grötz", "Östahgen", "Schattengrund", "Trutzburg", "Westwind", "Windock", 
  "Windisch", "Wüdenhall"
];

const clanNames = [
  "aus Borgurn Sippe",
  "aus Cortak Sippe",
  "aus Garan Sippe",
  "aus Gerfin Sippe",
  "aus Hellron Sippe",
  "aus Peukin Sippe",
  "aus Tauron Sippe",
  "aus Udaman Sippe",
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
  hasClanNames: true,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, clanNames, regionSpecifics };

//clan namen können zusätztlich verwendet werden wenn characte aus dem clan entstammt aber nichtr bei adeligen
