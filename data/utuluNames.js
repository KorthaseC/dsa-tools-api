//prettier-ignore
const maleFirstNames = [
  "Akuma", "Apiye", "Boadi", "Bodongo", "Bolotongo", "Cazembe", "Epamwa", "Hwamba", "Imaro", "Kalalu", "Kalimba", 
  "Kibwa", "Kingombo", "Kirabo", "Kubesi", "Kukula", "Kweli", "Labiwasene", "Lutu", "Mangabe", "Monebu", "Mopane", 
  "Mpemba", "Mulga", "Mwasego", "Nutombi", "Obada", "Ombawa", "Oweso", "P(e)tani", "Ranabo", "Rumari", "Schegabe", 
  "Schenumba", "Shasiwatu", "Shimenege", "Takate", "Tangawizi", "Tauu", "Tenkile", "Tuhemba", "Udonka", "Umbele", 
  "Umpaba", "Unabo", "Usuthu", "Zainabu"
];

//prettier-ignore
const femaleFirstNames = [
  "Akuma", "Apiye", "Boadi", "Bodongo", "Bolotongo", "Cazembe", "Epamwa", "Hwamba", "Imaro", "Kalalu", "Kalimba", 
  "Kibwa", "Kingombo", "Kirabo", "Kubesi", "Kukula", "Kweli", "Labiwasene", "Lutu", "Mangabe", "Monebu", "Mopane", 
  "Mpemba", "Mulga", "Mwasego", "Nutombi", "Obada", "Ombawa", "Oweso", "P(e)tani", "Ranabo", "Rumari", "Schegabe", 
  "Schenumba", "Shasiwatu", "Shimenege", "Takate", "Tangawizi", "Tauu", "Tenkile", "Tuhemba", "Udonka", "Umbele", 
  "Umpaba", "Unabo", "Usuthu", "Zainabu"
];

//prettier-ignore
const lastNames = [
  "Angwasi", "Bewange", "Bujonapi-Hu", "Ibonkosi", "Kwahabunga", "Mawambe", "Ongbasi", "Rololo", "Ruwangi", 
  "Sagambu", "Shokubunga", "Tepebe-Ha", "Tscholuq", "Vodunga", "Yoru-He", "Zamango"
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

module.exports = { maleFirstNames, femaleFirstNames, lastNames, regionSpecifics };
