//prettier-ignore
const maleFirstNames = [
  "Feqesh", "Feqzhan", "Phecas", "Phederigo", "Phedro", "Phektor", "Phelix", "Phelizzio", "Phenando",
  "Phenardo", "Phexan", "Phexander", "Phexardo", "Phexariel", "Phexario(n)", "Phexdan", "Phexdorff", 
  "Phexej", "Phexelio", "Phexulis", "Phexfried", "Phexger", "Phexgeschwind", "Phexgrim", "Pheximus", 
  "Phexion", "Phexjosch(k)a", "Phexlyn", "Phexor", "Phexro", "Phexric(k)", "Phexrico", "Phexrik", 
  "Phexvald", "Phexwalt", "Phexwulf(f)", "Phexxarion"
];

//prettier-ignore
const femaleFirstNames = [
  "Feqzar(i)a", "Phecaya", "Phegunde(l)", "Phejanca", "Phekerike", "Phektoria", "Phelia", "Phenelika", 
  "Pherga(ra)", "Pheriga", "Phexandra", "Phexantje", "Phexburga", "Phexenia", "Phexenne", "Phexenslieb(e)", 
  "Phexette", "Phexgard", "Phexheid(e)", "Phexienne", "Phexina", "Phexine", "Phexionne", "Phexla", 
  "Phexclictias", "Phexline", "Phexlynn", "Phexrica", "Phextraude", "Phextrud", "Phexwaldis"
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
