// prettier-ignore
const maleFirstNames = [
  "Rahandrat", "Randrat", "Rondemar", "Rondeo", "Ronder(an)", "Ronderick", "Rondfried", "Rondolf", "Rondrabert",
  "Rondrachilles", "Rondradan", "Rondrad(e)o", "Rondradin", "Rondrador", "Rondrafried", "Rondragoras", "Rondragim",
  "Rondrahar(d)t", "Rondraian", "Rondraig(h)e", "Rondrajan", "Rondralan", "Rondrald", "Rondraldinho", "Rondraldo",
  "Rondraleudes", "Rondralf", "Rondralob", "Rondralph", "Rondralrik", "Rondramann", "Rondrames", "Rondramir",
  "Rondramold", "Rondrary", "Rondrathiel", "Rondracion", "Rondrasil", "Rondrassian", "Rondravio", "Rondravito",
  "Rondrawulf(f)", "Rondrazar", "Rondreppo", "Rondrian", "Rondric", "Rondrich", "Rondriguez", "Rondrik", "Rondrill",
  "Rondrivar", "Rondrolf", "Rondrymion", "Rondwig", "Ronwulf(f)", "Siegrond", "Sigisrond"
];

// prettier-ignore
const femaleFirstNames = [
  "Anarondra", "Arondriella", "Riondhara", "Riondra", "Rondara", "Rondena", "Rondriai", "Rondrael", "Rondrabeth",
  "Rondrabirg", "Rondrada", "Rondraane", "Rondraiora", "Rondraga", "Rondragabund", "Rondra(h)ja", "Rondrala",
  "Rondralda", "Rondraldis", "Rondraleude", "Rondrald(a)", "Rondralind(e)", "Rondralis", "Rondramaid", "Rondramea",
  "Rondrania", "Rondranike", "Rondranita", "Rondranite", "Rondranja", "Rondrairande", "Rondrasab", "Rondreike",
  "Rondrescha", "Rondressa", "Rondrette", "Rondreweka", "Rondrharika", "Rondriaina", "Rondrica", "Rondrieke",
  "Rondrika", "Rondrike", "Rondrina", "Rondrine", "Rondrinea", "Rondwitha", "Ronja", "Rontravia"
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
