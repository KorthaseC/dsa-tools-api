//prettier-ignore
const maleFirstNames = [
  "Angbert", "Angfried(er)", "Angroban", "Angromold", "Angrond", "Angwart", "Ingban", "Ingbin", "Ingalf", 
  "Ingar(im)", "Ingeras", "Ingerd(t)", "Ingerio(n)", "Ingerio(s)", "Ingerwulf(f)", "Ingmar", "Ingmykliois", 
  "Ingralidor", "Ingralio", "Ingram", "Ingramir", "Ingramold", "Ingramor", "Ingrawin", "Ingrenio(s)", 
  "Ingrikes", "Ingrimbert", "Ingrimides", "Ingrimidor", "Ingrimjeff", "Ingrim(m)o", "Ingrimold", 
  "Ingrimmon", "Ingromos", "Ingrimon", "Ingrimslob", "Ingrobalid", "Ingrodorik"
];

//prettier-ignore
const femaleFirstNames = [
  "Angrasch(n)a", "Angrella", "Angrelle", "Angnita", "Angera", "Ingerieke", "Ingerlind(e)", "Ingjaids", 
  "Ingken", "Ingaja", "Ingreaux", "Ingreniosa", "Ingrette", "Ingrimande", "Ingrimbor", "Ingrimette", 
  "Ingrimhold(e)", "Ingrimia", "Ingrimine", "Ingrimjanna", "Ingrimlieb(e)", "Ingrimild(e)", "Ingrimma", 
  "Ingrimitx", "Ingrimtraud", "Ingrit(ta)", "Ingund(e)", "Ingwen", "Ingwinja"
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
