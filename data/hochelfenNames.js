//prettier-ignore
const maleFirstNames = [
  "Achanill", "Adernath", "Alaris", "Aldarin", "Amantillada", "Anel", "Antaraleon", "Athavar(ion)", 
  "Avadrual", "Caedril", "Carnumoris", "Corthil", "Darion", "Dornathil", "Falvien", "Fenvarien", 
  "Ganathor", "Goibwyn", "Gwern", "Illcoron", "Iscalleon", "Kallariel", "Karvenin", "Kerunel", 
  "Lariel", "Lemiran", "Lihaundiel", "Lorian", "Meliodël", "Merthansithar", "Nahrical", "Namion", 
  "Narivielis", "Narnion", "Odothéion", "Oisin", "Ometheon", "Ornaval", "Ornimio", "Ovilein", 
  "Rinastos", "Serleen", "Shadruel", "Thamysis", "Tharkath", "Tharmyrion", "Thomion", "Titulon", 
  "Unvielel", "Vériel", "Vonthodael", "Zerzaïol"
];

//prettier-ignore
const femaleFirstNames = [
  "Adamaria", "Adarioa", "Alari", "Alfadriel", "Alionë", "Amariel", "Amayel", "Andalya", "Bilsalya", 
  "Calminis", "Camlaman", "Dainiisa", "Elionai", "Eloisia", "Eonadra", "Fanêlêa", "Ginhfares", 
  "Iantana", "Ikanadëa", "Ipalisa", "Isira", "Lafadiel", "Laneia", "Liloë", "Lyriel", "Mada(i)ya", 
  "Mydharella", "Niamh", "Nuriel", "Nuriesta", "Omraisti", "Osimira", "Panlariel", "Pyrdona", 
  "Quillel", "Ranarië", "Rhiannon", "Safiriel", "Safira", "Seijia", "Shanaia", "Shayariël", 
  "Sirtafa", "Valëfa", "Valëya", "Valadëa", "Valantana", "Visalayr", "Vivienna", "Yaterna", "Zaliel"
];

//prettier-ignore
const epithets = [
  "Bernsteinformer", "der-das-Eis-bezwingt", "der-den-Schatten-trotzt", "der-die-Götter-kennt", 
  "der-die-Sterne-deutet", "der-einsame-Wanderer", "der-Feuerweber", "der-Isiriel-sah", "der-Kristallformer", 
  "der-Verlorene", "der-Zauderer", "der-mit-dem-Sturm-singt", "der-sich-selbst-genügt", "der-taubra-spricht", 
  "dessen-Blut-singt", "die-den-Schlüssel-bewahrt", "die-den-Spiegelbaum-webt", "die-den-Tod-bringt", 
  "die-den-Weg-kennt", "die-den-Wind-ruft", "die-die-Angst-webt", "die-Entschlossene", "die-mit-Schlangen-spricht", 
  "die-Nebelruferin", "die-Singe", "die-Zauber-webt", "die-Zerzal-dient", "Goldzunge", "meister-der-Zauber", 
  "mit-dem-Flammenmal", "mit-dem-Sternenmal", "mit-dem-Zauberhaar", "mit-den-schwarzen-Pfeilen", 
  "mit-der-Echsenhand", "mit-der-Feuerklinge", "mit-der-schöpfenden-Hand", "Spähensschlange", 
  "Sturmschreiter", "Suchert-nach-dem-Licht", "Vergangenheitsseher", "verkündet-die-Wahrheit", 
  "wandelt-in-Träumen", "Zukunftsblicker"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = {
  maleFirstNames,
  femaleFirstNames,
  epithets,
  regionSpecifics,
};
