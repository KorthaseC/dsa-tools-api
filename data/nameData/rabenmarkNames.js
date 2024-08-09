//prettier-ignore
const maleFirstNames = [
  "Alboron", "Boretheo(n)", "Bo(ro)dariel", "Borotin", "Brondan", "Bronfried", "Corvin", "Corvinius", "Firnar", "Gernot", 
  "Golgarik", "Golgarior", "Golgoran", "Schweigrfid", "Silentus", "Travidan", "Travidor", "Uthariel", "Welfert", 
  "Wendehold"
];

//prettier-ignore
const femaleFirstNames = [
  "Alwen", "Balatravie", "Bishdalia", "Borondria", "Boronin(de)", "Bronhilda", "Dorlen(a)", "Etilie", "Golg(a)rita", 
  "Heilbrun", "Karneola", "Leuhlid", "Marbirga", "Marbogard", "Marbolene", "Marilne", "Noina", "Norike", "Oleana", 
  "Travide", "Travinleib(e)", "Travilea(h)", "Valdara", "Wendeholde"
];

//prettier-ignore
const lastNames = [
  "Ahlert", "Altzoller", "Dunkelfähr", "Gerber", "Gutheis", "Fellner", "Fleegschlinder", "Firmberger", "Ostlander", 
  "Riswulf", "Schildmacher", "Sensenadler", "Trollzacker", "Vargurd", "Wulfenried", "Xerber"
];

//prettier-ignore
const nobleNames = [
  "Ackerer", "Ährengatter", "Aschenfeld", "Baernfarn", "Beschleger", "Binsböckel", "Blutfelden", "Boronsbaum", 
  "Mersingen", "Pfeilbrander", "Praiosau", "Rabenfeld", "Rahentracker", "Rechtag", "Senenshild", "Sichelkras", 
  "Trollsburger", "Trollstadt"
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
