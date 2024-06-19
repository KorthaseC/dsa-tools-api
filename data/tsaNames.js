//prettier-ignore
const maleFirstNames = [
  "Atsalio", "Itsador(ian)", "Itsakh", "Tsaaran", "Tsaaron", "Tsab(b)ert", "Tsaberuis", "Tsacharias", "Tsachibald",
  "Tsadaion", "Tsadalbert", "Tsadan", "Tsaddäus", "Tsadolph(o)", "Tsador", "Tsael", "Tsafik", "Tsafilio", 
  "Tsafilius", "Tsafried", "Tsagidio", "Tsagidilus", "Tsagaboert", "Tsagor(an)", "Tsagoras", "Tsahlem", 
  "Tsadiis", "Tsailo(s)", "Tsaioh", "Tsajan", "Tsajeff", "Tsajew", "Tsajochas", "Tsakar", "Tsalemeios", 
  "Tsalios", "Tsalius", "Tsamar", "Tsamar(r)o", "Tsamitri(o)", "Tsamitrius", "Tsaoldo", "Tsander", "Tsandro", 
  "Tsandes", "Tsanin", "Tsaanam", "Tsaradin", "Tsarath", "Tsarco(r)", "Tsarek", "Tsarello", "Tsariano", 
  "Tsarik", "Tsario", "Tsarisetes", "Tsaristotes", "Tsarkos", "Tsarom", "Tsasal(d)es", "Tsaske", "Tsavas", 
  "Tsavasian", "Tsavasio(n)", "Tsavelung", "Tsavero", "Tsavier", "Tsayano", "Tsayo"
];

//prettier-ignore
const femaleFirstNames = [
  "Amats(a)", "Antasasie", "Atsalea", "Atsana(dis)", "Etsafania", "Itsabel(la)", "Itsadora", "Tsabella", "Tsabelle", 
  "Tsaberna", "Tsabine", "Tsabinja", "Tsabrina", "Tsaburga", "Tsadacia", "Tsadela", "Tsadilia", "Tsadira", 
  "Tsadora", "Tsadria", "Tsadrienne", "Tsaella", "Tsafania", "Tsafika", "Tsafilia", "Tsafinea", "Tsagathe", 
  "Tsagidia", "Tsagirit(t)", "Tsaguldia", "Tsagundula", "Tsaghed(e)", "Tsaheld(e)", "Tsaholde", "Tsainais", 
  "Tsainan(a)", "Tsaingla", "Tsaiope", "Tsaja(na)", "Tsajanca", "Tsajana", "Tsajanica", "Tsaione", "Tsalea", 
  "Tsaleana", "Tsalía", "Tsali(n)", "Tsalina", "Tsalind(e)", "Tsalline", "Tsalisa(s)", "Tsalmala", "Tsalotta", 
  "Tsamalia", "Tsamande", "Tsamathna", "Tsamara", "Tsamaris", "Tsamil(j)a", "Tsamine", "Tsamunde", "Tsanasatia", 
  "Tsandr(e)a", "Tsaneesa", "Tsanea", "Tsanette", "Tsanild", "Tsanina", "Tsaphania", "Tsarabella", "Tsaralle", 
  "Tsarene", "Tsaria", "Tsariadne", "Tsariine", "Tsaristea", "Tsashina", "Tsathia", "Tsatrud(e)", "Tsavera", 
  "Tsavide", "Tsaviera", "Tsavina", "Tsavira", "Tsawide", "Tsayanita", "Tsayariel", "Tsayenne", "Tsilja"
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
