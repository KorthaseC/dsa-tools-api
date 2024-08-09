//prettier-ignore
const maleFirstNames = [
  "Firael", "Firesso", "Firnfried", "Firnhold", "Firnmar", "Firubald", "Firudan", "Firudelus", "Firudolin",
  "Firudar", "Firujas", "Firjahand", "Firjandur", "Firant(h)an", "Firunbert", "Firuncio", "Firuncius", 
  "Firundal", "Firundel", "Firunes", "Firunew", "Firnfried", "Firungar", "Firungrim", "Firunhar(d)t", 
  "Firunhelm", "Firunhold", "Firunians", "Firunid(es)", "Firuno", "Firunisalus", "Firunjahand", "Firunjeff", 
  "Firuneldur", "Firunnek", "Firunti", "Firuntio", "Firunvid", "Firunwin", "Firunwulf(f)", "Firunzio(s)", 
  "Firunzis", "Firupold", "Firutin", "Firunbert", "Firunmar", "Firunhar(d)t"
];

//prettier-ignore
const femaleFirstNames = [
  "Firael", "Firella", "Firelle", "Firessa", "Firnella", "Firneld", "Firngard", "Firnja", "Firuna", "Firunata", 
  "Firunbirg", "Firuncella", "Firunda", "Firundora", "Firunde", "Firunelda", "Firunessa", "Firunette", 
  "Firunfriede", "Firunhelde", "Firunhar(d)t", "Firunheld(e)", "Firunold(e)", "Firunians", "Firunja", 
  "Firunjan(n)e", "Firunliebe", "Firunleude", "Firunna", "Firuntraut", "Firunessa", "Firunscha", "Firuldine", 
  "Firungard", "Firunj(a)", "Firunjahand", "Firuntraut", "Firunjana", "Firunhold(e)"
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
