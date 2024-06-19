//prettier-ignore
const maleFirstNames = [
  "Amadei", "Amadeo", "Ananduros", "Avessialos", "Avesian", "Avestoetes", "Bishdajew", "Bishdahor", 
  "Corvinian", "Corvis", "Garafoled", "Golgarion", "Götterfried", "Greifbert", "Greifwin", "Greikor", 
  "Horasian", "Horathor", "Ifirntrassar", "Ifirnides", "Ifirnija", "Ifirnio", "Ifirnion", "Ifirnius", 
  "Ifirnwulf", "Korald", "Korben", "Korberus", "Korintian", "Korovus", "Koriakos", "Korian", "Korlian", 
  "Korlios", "Korlis", "Korniolus", "Kornibald", "Koronos", "Konstantin", "Korsten", "Korvin", 
  "Korvinio", "Korvinius", "Leoderich", "Leomar", "Leonides", "Leu(en)fried", "Levthanslaus", "Levtherios", 
  "Levthmann", "Losos", "Madabert", "Madogobert", "Madahue", "Madajaelo", "Madalino", "Madard", 
  "Madaret", "Madalachir", "Marbelio", "Marbelius", "Marborad", "Marborus", "Marborius", "Marbos", 
  "Marbos(ö)ian", "Marboed", "Markor", "Manadael", "Nanduin", "Nando", "Mandor", "Nandojew", "Nandran", 
  "Nandrea", "Nandreas", "Nandauro", "Nandurian", "Nandurjon", "Nanduskaedsthar", "Nanjoef", "Nicias", 
  "Nokas", "Santanivian", "Saturnian", "Scranor", "Simjaew", "Simoslav", "Simioster", "Simitros", 
  "Simitrosij", "Simjajef", "Sifmon", "Swafnan", "Uclufire", "Ucurian", "Ucuriard", "Wefnanus", 
  "Xeledonuis", "Xeledor"
];

//prettier-ignore
const femaleFirstNames = [
  "Amadea", "Anandura", "Asimina", "Avesca", "Avessa", "Avessalia", "Avessandra", "Avessia", "Avesse", 
  "Avessina", "Avessita", "Avexia", "Bishdara", "Corvara", "Corviane", "Galarafele", "Golgarde", 
  "Götterfriede", "Greifwinja", "Griffwalda", "Herofania", "Horathia", "Horasiana", "Horasie", 
  "Ifirneia", "Ifirnessa", "Ifirnette", "Ifirngund", "Ifirnia", "Ifirniane", "Ifirnara", "Ifirnijanne", 
  "Ifirnijaid", "Ifirnja", "Ifirntrau", "Korinna", "Kornelia", "Korona", "Kortina", "Kortinia", 
  "Koscha", "Leomara", "Leurada", "Leutraut(e)", "Levthitia", "Madabel", "Madalinda", "Madaela", 
  "Madaelle/a", "Madajulea", "Madalberta", "Madalen", "Madalena", "Madaina", "Madainela", "Madanuela", 
  "Madarete", "Madalissa", "Madinese", "Madiana", "Madusa", "Marbeaux", "Marbelia", "Marbelle", 
  "Marbolena", "Marbelle", "Marbotella", "Mokoschaia", "Mokoscheschda", "Mokschalia", "Nandella", 
  "Nandeschia", "Nandine", "Nandogard", "Nandorette", "Nandrea", "Nanduella", "Nandulla", "Nandunella", 
  "Noionida", "Obaria", "Satua", "Satu(a)dina", "Satuwinja", "Simdiana", "Simella", "Simigrid", 
  "Similia", "Sumudane", "Sumudja", "Sumujida", "Swafne", "Swafild", "Swafnilde", "Swafnina", 
  "Ucuriante", "Ucurtisana", "Xeledonia", "Xeledonine"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, regionSpecifics };
