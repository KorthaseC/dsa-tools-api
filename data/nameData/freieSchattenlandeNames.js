//prettier-ignore
const maleFirstNames = [
  "Alold", "Alonju", "Aloran", "Arso", "Avus", "Blako (Blakkharazi)", "Faidon (Xarfaidon)", "Grimo (Angrimmo)", "Gunifred (Thargunifred)", 
  "Kromold (Nekromold)", "Lettal (Skelettalrik)", "Manti (Nekromantiode)", "Mieshka (Mishkarazal)", "Miro", "Monik (Daimoniko)", 
  "Nagri (Nagrachius)", "Nigor", "Oltan", "Olvis", "Phazo (Nephazzo)", "Rasmus (Belshirasmus)", "Rypto (Charypto)", 
  "Tarius (Skeletarius)", "Thargo (Thargunison)", "Turno (Nocturno)", "Zorion (Rhazzazorion)"
];

//prettier-ignore
const femaleFirstNames = [
  "Alene", "Ammas (Ammazeronike)", "Amri", "Asfa (Asfalotte)", "Azine (Nephazzine)", "Belke (Belkeleia)", 
  "Cali (Calijida)", "Epha (Nephazza)", "Fara (Tasfarialia)", "Gindel (Thargindel)", "Gine (Thargine/Braggine)", 
  "Gunde/Guni/Ragunde (Braggunde)", "Hule", "Ira (Iraja)", "Kramunde (Nekramunde)", "Lolgra (Lolgramothlieb)", 
  "Macca", "Mona (Globomona)", "Mothild", "Nira", "Olgrima (Lolgrima)", "Radne", "Ravena (Nirravena)", "Tholde (Thargotholde)", 
  "Tija (Tijakoolia)", "Tya (Tyakrane)", "Xari/Faida (Xarfaiada)", "Zora (Rhazzazora)"
];

//prettier-ignore
const lastNames = [
  "Abbauer", "Angstmann", "Arkenser", "Berghusen", "Blatner", "Dargel", "Diibelsen", "Dunkelsinn", "Ebering", "Eichmoorer", 
  "Emmersen", "Fleischhauer", "Funkensen", "Glotzenmacher", "Gorbensen", "Knochenklauer", "Ledersen", "Melber", "Mithrensen", 
  "Nabersin", "Peresen", "Rallersin", "Schiifer", "Schauer", "Schinder", "Schwertdegen", "Tobrier", "Triibsinn", "Viereicher", "Wulfing"
];

//prettier-ignore
const nobleNames = [
  "Augstein", "Bebendorf", "Bergenhus", "Blutfelden", "Bregelsaum", "Burmisch", "Darbonia", "Dunkelstein", "Ebersfeld", 
  "Ehrenstein", "Eichmoor", "Eisenrath", "Ellenforst", "Falkenstein", "Finsterried", "Freudenberg", "Granelfels", "Geibenfeld", 
  "Gerdenwald", "Kaltenalrik", "Kaltenstein", "Kathenberg", "Knochenhain", "Liliengrund", "Lindenhain", "Mittelleydingen", 
  "Niederweyhe", "Schwarzsichelh", "Spogelsen", "Streitzigä", "Waischenroth", "Willbergen", "Wulfenfels"
];

//prettier-ignore
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
