//prettier-ignore
const maleFirstNames = [
  "Borech", "Borocenz(o)", "Borderich", "Boroggio", "Borogidio", "Boromedes", "Borome(r)o", "Boromeus",
  "Boromil", "Boromilius", "Boromualdo", "Boromuerto", "Boronaldo", "Boronando", "Boronar(do)", "Boronar(r)o",
  "Boronas", "Boronat(h)an", "Boronatus", "Borondin(i)o", "Borondreas", "Borondri", "Borondrian", "Borondrio",
  "Boroneas", "Boronek", "Boroneus", "Boronhar(d)t", "Boronius", "Boroniandro", "Boroniardus", "Boroniar",
  "Boroniardor", "Boronias", "Boronicco", "Boronides", "Boriondir", "Boronifatus", "Boronigo", "Boronin(o)",
  "Boronjio", "Boronis", "Boronislaus", "Boronjeff", "Boronjew", "Boromir", "Borondikit", "Boroniôt", "Boronslob",
  "Boronso", "Boronto(s)", "Boronvert(o)", "Borominus", "Boropjan(us)", "Boroslav", "Borotello", "Borothur",
  "Borotin", "Borovian", "Bortholomäus", "Zaboron"
];
//prettier-ignore
const femaleFirstNames = [
  "Boraggia", "Boranka", "Bor(e)alis", "Borgit(ta)", "Borgunde", "Boriana", "Borodilia", "Borodine", "Borojida",
  "Borolina", "Borolind", "Boroma(n)da", "Boromande", "Boromandra", "Boromée", "Boromilia", "Boromine", "Borominia",
  "Borona", "Boronaide", "Boronaja", "Boronande", "Boronante", "Boronaya", "Boronette", "Borondriede", "Borongard",
  "Borongunde", "Boronhild", "Boronia", "Boronica", "Boronde", "Borondijis", "Boronienne", "Boronika", "Boronike",
  "Boronima", "Boronimue", "Boromina", "Boroniqua", "Boronisława", "Boronya", "Boronjanca", "Boronjela", "Boronjica",
  "Boronleude", "Boronlieb(e)", "Borolina", "Borollind(e)", "Borollinda", "Boronlyl", "Boronor(e)", "Borowinja",
  "Boroniwinje", "Boronya", "Borothea", "Borowine", "Borowinja"
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
