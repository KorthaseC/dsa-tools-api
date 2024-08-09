//prettier-ignore
const maleFirstNames = [
  "Achmedziber", "Adrejin", "Alidfiredijan", "Alchziber", "Alrijan", "Bardoarjan", "Brinjid(a)", "Cajid(jin)", 
  "Da'jin", "Denderan", "Djur(mold)", "Djurjin", "Dschindezer", "Elogoran", "Endijan", "Ephraim", "Etemolzid", 
  "Felziber", "Fjeribure", "Fumrojami", "Fumold", "Ganrijan", "Garaol", "Garamold", "Gerbaldijan", "Gormold", 
  "Hadijan", "Halijian", "Hanjomold", "Iberen", "Jemelijan", "Jeskojin", "Jostziber", "Kasparbidjan", "Keideran", 
  "Korrasmold", "Lirobaljin", "Littjweiber", "Loziber", "Madajian", "Marajian", "Marechziber", "Marijamold", "Mauraech", 
  "Mujajian", "Mulziber", "Murakziber", "Omribijan", "Perjin", "Praios(ch)ziber", "Quinziber", "Rurech", "Serajin", 
  "Torbjan", "Walbijan", "Zubjer", "Uhrziber", "Unglofziber", "Vegsziber", "Welfmold", "Kanderan", "Zendiijin", "Zifermold"
];

//prettier-ignore
const femaleFirstNames = [
  "Achtevsab(u)", "Alrik(jida)", "Alyrscha", "Aylijid(a)", "Birseljid(a)", "Boronjid(a)", "Brinjid(a)", "Cassimasab", 
  "Debrasab", "Delilhasab", "Denderaijda", "Duchenijda", "Elgoij(d)a", "Emirasab", "Endijda", "Erisaub", "Esmeralda", 
  "Firreijda", "Frijid(a)", "Garasab", "Glennaijda", "Haranisab", "Hesindasab", "Higeljrasab", "Idrajid(a)", "Jamilhaid(a)", 
  "Karhimasaab", "Madahaijda", "Milhebthijda", "Minkajid(a)", "Mirasab", "Mylenij(d)a", "Nandurijda", "Nedmaijda", 
  "Olgaij(d)a", "Perizelasab", "Phelicijda", "Praydasab", "Rahjajida", "Ramleusab", "Reijid(a)", "Renajid(a)", "Rondrasab", 
  "Ruhalla(jid)a", "Rurasab", "Rurijda", "Ruryanijda", "Sarfeschij(d)a", "Shilaij(d)a", "Sulabethijda", "Sumujid(a)", 
  "Trusneijda", "Ulfijda", "Unajid(a)", "Umrajid(a)", "Valderijda", "Vishad(a)", "Xanjid(a)", "Yasinid(a)", "Yezeminasab", 
  "Zadisab", "Zajid(a)", "Zaradij(d)a", "Zitajid(a)"
];

//prettier-ignore
const epithetsFemale = [
  "deren Familie einst die Tavern'uzak am Hafen gehörte", "deren Vater zum Einsiedler wurde", "die Bösartige", 
  "die Freundliche", "die Geschwätzige", "die Gründliche", "die Haarspalterin", "die Haimautter", "die Hartnäckige", 
  "die Heisere", "die Hirtin", "die Leichtgläubige", "die Misstrauische", "die Nachdenkliche", "die Radebrechende", 
  "die Sängerin ohne Zuhörer", "die Scharfzüngige", "die Schülerin", "die Starke", "die Unentschlossene", 
  "die Unglückliche", "die Vogelfängerin", "die Weise", "die Widerborstige", "die Zuvorkommende"
];

//prettier-ignore
const epithetsMale = [
  "der Ausgefuchste", "der Auswanderer", "der Eingebildete", "der Ferige", "der Hartnäckige", "der Heimgekehrte", 
  "der Maurerbeißer", "der Meister", "der Pfeifenputzer", "der Philosoph", "der Schamlose", "der Schnitter", 
  "der Schuldner", "der Schüler von", "der Schwätzer", "der Spötter", "der Stille", "der Tollpatschige", 
  "der Träge", "der Tragische", "der Unaussprechliche", "der Unbelehrbare", "der Verständnisvolle", 
  "der Witzbold", "der Wüterich", "der Zögerliche"
];

//prettier-ignore
const epithets = [
  "aus der Familie von [Name]", "aus der krummen Gasse", "aus der Negelskite", "mit dem Apfelbaum", "mit dem Mäuseschritt", 
  "mit dem Schnabelschuh", "mit dem Seidenhaar", "mit den 64 Zöpfen", "mit den drei Freundinnen", 
  "mit den fünf älteren Schwestern", "mit der Feuergunze", "mit der Fremdijik'hirche", "mit der langen Nase", 
  "von hinter der Mauer"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: true,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, epithetsFemale, epithetsMale, epithets, regionSpecifics };

//anstatt nachnamen werden oft epithets verwendet
