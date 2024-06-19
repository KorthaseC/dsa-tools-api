//prettier-ignore
const maleFirstNames = [
  "Esindiago", "Esindiego", "Esindio", "Hesander", "Hesijavier", "Hesindagoras", "Hesinderi(c)k", "Hesindiago",
  "Hesindian", "Hesindiander", "Hesindiano", "Hesindiego", "Hesindio", "Hesindion", "Hesindor", "Hesindir", 
  "Hesindoran", "Hesindolph", "Hesindrick", "Hesindrix", "Hexander", "Sindiego", "Sindion"
];

//prettier-ignore
const femaleFirstNames = [
  "Esindia", "Esindora", "Hesa", "Heshinji", "Hesina", "Hesindajela", "Hesindajida", "Hesindane", "Hesindaya", 
  "Hesindelieb(e)", "Hesindia", "Hesindiana", "Hesindiane", "Hesindiela", "Hesindigard", "Hesindigund(e)", 
  "Hesindine", "Hesindis", "Hesinditta", "Hesindite", "Hesindjana", "Hesindjanka", "Hesine", "Hesinja", "Hesinje", 
  "Hesinriette", "Hesinri(e)ke", "Hexandra", "Sindana", "Sindara", "Sindiela", "Sindtraut(e)"
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
