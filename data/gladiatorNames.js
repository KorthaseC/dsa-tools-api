//prettier-ignore
const maleFirstNames = [
  "Baltrunos", "Blutbart", "Boroniades", "Boronson", "Coragon", "Khald", "Korreno", "Meiglbar", "Omar", "Spektakulos", 
  "Takate", "Tridon", "Utharion", "Viktor"
];

//prettier-ignore
const femaleFirstNames = [
  "Arva", "Azila", "Barbaria", "Boron(a)ike", "Korianna", "Taka-He", "Venenia", "Victoria", "Zylva"
];

//prettier-ignore
const lastNames = [
  "al'Kira", "al'Sayif", "al'Zuul", "der Angroscho", "die Bestie", "Blutbart", "Blutsäufer", "der Barbar", "der Basilisk", 
  "der Berg", "Dreizack", "die Echse", "Elfenhandschuh", "Eisherz", "die Flinke", "die Geißel", "der Geisterrufer", 
  "Giftzahn", "Hammerfaust", "die Hettfrau", "Ingerimmhammer", "Jaguarclaw", "der Ketzer", "die Korbamskette", 
  "der Koloss", "die Listige", "Menschenschlächter", "der Mercenario", "der Nordbade", "der Oger", "Ogerklinge", 
  "Pantherkralle", "der Schlinger", "der (almadanische) Stier", "die Schlange", "die Schwarze", "der Troll", "die Wudu", 
  "Wildfang", "Zwergentot"
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

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  lastNames,
  regionSpecifics,
};
