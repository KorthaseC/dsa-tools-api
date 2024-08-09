//prettier-ignore
const maleFirstNames = [
  "Ablasion", "Alriklas", "Andaryn", "Basilio", "Bosper", "Dolferius", "Drodoren", "Esindol(in)", "Franio", "Frenglon", 
  "Fringlas", "Gasparyn", "Haldoryn", "Halvorion", "Ingvalion", "Jasper", "Karmo", "Kasimir", "Kaspardal", "Linnerian", 
  "Linneweber", "Muraro", "Niolald", "Omborian", "Orsalias", "Pipo", "Polfer", "Prainerlyn", "Savtyron", "Toran", 
  "Travino", "Urfararn", "Waldmiryn"
];

//prettier-ignore
const femaleFirstNames = [
  "Aaraloth", "Andaraine", "Asmodette", "Belenoleth", "Brealeatha", "Cariasthe", "Delusia", "Elida", "Elysmine", "Elysthea", 
  "Firunette", "Franiahse", "Ingalvaine", "Islaava", "Jelspeth", "Jolantha", "Kasmyra", "Linai", "Lynia", "Noraletha", 
  "Nostraine", "Ronaya", "Sythala", "Selma", "Senebaine", "Thalania", "Tommeliane", "Triumfine", "Urmavile", "Yasmina", "Zanya"
];

//prettier-ignore
const lastNames = [
  "Altgewander", "Brachinger", "Bramhusen", "Damme", "Darbhork", "Deichbauer", "Deickmoler", "Elgeryn", "Fangseygn", 
  "Garsinger", "Hallgery", "Hugemand", "Ingvaler", "Kirschen", "Köpenvind", "Koyner", "Kremelsick", "Liekensick", 
  "Linneweber", "Nietenader", "Notfink", "Onderbruk", "Oskin", "Permstyn", "Riedner", "Riethard", "Rikvard", "Salzerin", 
  "Schlachtrössler", "Siebenacken", "Styper", "Theulermed", "Tryming", "Turmer", "Viskopen", "Visserad", "Wilmhold", 
  "Wirth"
];

//prettier-ignore
const nobleNames = [
  "Ansfinion", "Baumbach", "Eichenschlag", "Fenmling", "Gischtreyter", "Hyttenhaun", "Ingvalshorden", "Moorweiden", 
  "Ornibian", "Rheideraryan", "Salis", "Sappensattel", "Tiefenbach", "Tommelfurt", "Vestwind", "Wartfburg", "Wymbluth"
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
