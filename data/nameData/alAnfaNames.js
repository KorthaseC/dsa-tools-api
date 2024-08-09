//prettier-ignore
const maleFirstNames = [
  "Adario", "Agusto", "Alondro", "Alriego", "Alveron", "Amato", "Amir", "Amirato", "Apreno", "Armado", "Assanto",
  "Boromeo", "Cascador", "Calmano", "Coragon", "Corvo", "Damiano", "Deredan", "Desiderio", "Diago", "Diamantes",
  "Dirial", "Domingo", "Dorio", "Efferdito", "Egiliano", "Ellio", "Emano", "Emilio", "Enrisco", "Fiorenzo",
  "Firunando", "Flaminio", "Gaiomo", "Ghonzo", "Ghorio", "Gordo", "Hesindiego", "Iago", "Imaculo", "Imperioso",
  "Ingarin", "Irato", "Irschan", "Jesidoro", "Kalman", "Kamillio", "Khalid", "Lirobal", "Losian", "Lucan",
  "Lucio", "Luiz", "Mandolo", "Marbido", "Marboso", "Marlo", "Marno", "Massino", "Micirio", "Moralo", "Morisys",
  "Nestario", "Nostromo", "Nuncio", "Orelio", "Panfilo", "Pedresco", "Praiopio", "Quintilian", "Rahiano",
  "Rahjadan", "Ramin", "Ramon", "Rayo", "Romero", "Rondrigan", "Rondrigo", "Salpico", "Sandro", "Simodo",
  "Superbo", "Tarquinio", "Thiago", "Tirato", "Trienco", "Tito", "Ulan", "Unnio", "Vareno", "Vessario",
  "Vitario", "Vito", "Vittorio", "Wilciano", "Xenofero", "Yorge", "Yuan", "Zurbaran"
];

//prettier-ignore
const femaleFirstNames = [
  "Adaque", "Alara", "Amira", "Avessandra", "Balatravis", "Baniatella", "Blanca", "Boronaya",
  "Calmora", "Carimina", "Cessandra", "Cessaria", "Consuela", "Cortessa", "Corvinida",
  "Desiderya", "Desmonda", "Diantha", "Dolorita", "Dominga", "Doriana", "Duridanya", "Elodia",
  "Emerencia", "Emilia", "Esmeralda", "Estrella", "Fiara", "Fiona", "Fiorella", "Folsina",
  "Galindia", "Gerlita", "Gilia", "Heliantha", "Hevane", "Imelde", "Imperia", "Inares",
  "Iunivera", "Ivarena", "Jesabela", "Jessande", "Joseda", "Karianna", "Katalinya", "Korrasson",
  "Leona", "Levita", "Luisina", "Marchesca", "Maryarita", "Mercara", "Merida", "Morisca",
  "Neva", "Nicolasina", "Olea", "Orelia", "Phelicitas", "Phelippa", "Phranya", "Praiociose",
  "Querinia", "Rahjades", "Ramira", "Rayades", "Rimiona", "Rosinia",
  "Sabela", "Salina", "Santilia", "Saranya", "Simiona", "Tomassina", "Ugolines", "Ulembina",
  "Ursania", "Vadoria", "Valerfa", "Varinella", "Velvenya", "Vida", "Violanda", "Xantilia",
  "Ximena", "Yvonya", "Zalines", "Zephirina", "Zeradia"
];

//prettier-ignore
const lastNames = [
  "Acostez", "Albahir", "Almanzar", "Alvarez",
  "Anthos", "Arragenos", "Barrera", "Belafloros", "Beratas", "Boronez", "Botero", "Brabaker", "Casarez", "Charazzar", "Comitez",
  "Cornio", "Delazar", "Dominguez", "Erabenas", "Fontanez", "Fontanoya", "Fiovarez", "Golgarez", "Gorodez", "Gorralas", "Gredo",
  "Gutmund", "Hammerfaust", "Immenstatt", "Inezano", "Jacobella", "Kalando", "Klippstein", "Koriguez", "Lanistos", "Lupinez",
  "Madarez", "Malagro", "Marquez", "Meridiana", "Monterey", "Montez", "Morales", "Nirrano", "Oldenport", "Olibantin", "Phelipez",
  "Piriones", "Queseda", "Quintone", "Ramirez", "Rivitox", "Rondriguez", "Salmorantes", "Sandoz", "Santana", "Schönredner",
  "Sylvaron", "Tannspitz", "Tiamartin", "Treufreund", "Uludaz", "Zaldahan"
];

const noblePrefix = ["von ", "von und zu ", "zum ", "da ", "di ", "da ", "ya "];

const nobleNames = lastNames;

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: true,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, noblePrefix, regionSpecifics };
