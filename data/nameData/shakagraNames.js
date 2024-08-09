//prettier-ignore
const maleFirstNames = [
  "Airai", "Athlorion", "Beryllisar", "Calherion", "Du'undril", "Fanloën", "Feyangola(r)", "Fi'Raas", 
  "Gohalainn", "Kiren", "Lyndereel", "Mandrion", "Margilon", "Nathildur", "Ranahar", "Setanta(r)", 
  "Sharazil", "Sirlion", "Val'Ayar", "Vatha'chor", "Zercor(ion)", "Zhayarh", "Zorkarash", "Zuul'ayar"
];

//prettier-ignore
const femaleFirstNames = [
  "Al'ysaaria", "Anasasiel", "Callyna", "Caythya", "Dhar'ëlla", "Dhar'yill", "Fey'Rathil", "Il'marhil", 
  "Kashariel", "Khyrdaka", "Lledrith", "Lossyril", "Lyssareth", "Mad'ahria", "Narthril", "Nindareth", 
  "Nyroiciel", "Rhiasska", "Rylarria", "Sal'ana-fey", "Valariel", "Yllaria", "Za'oreel", "Zil'Shath"
];

//prettier-ignore
const epithets = [
  "Bluttrinker", "bringt-Opfer-dar", "Dunkelfeuer", "Dunkelstern", "Eisatem", "Eisblüte", "Eisangier", 
  "Eispfeil", "Elfenschlächter", "erschafft-Leben", "Finsterblick", "Finsterklinge", "Finsterstern", 
  "Flammenauge", "Frostlachen", "Frostnacht", "gefriert-die-Tiefen", "Herz-aus-Eis", "Himmelsbrand", 
  "Klingenbrand", "Klingensänger", "Nachtstahl", "sah-Zwielicht", "Schattentanz", "Scherness", 
  "Schmerzweber", "Schwarzfels", "Schwarzflamme", "Schwarzklinge", "Schwarzträne", "spalt-die-Sphären", 
  "Spinnenhaar", "springt-in-den-Abgrund", "stillt-die-Fragen", "Sternentanz", "tief-in-die-Tiefe", 
  "trifft-mit-Eis", "trifft-nach-links", "trifft-nicht-die-Schatten", "trifft-ins-Herz", "verlacht-das-Licht", 
  "verschließt-das-Licht", "versprüht-Gift", "vertreibt-den-Sturm", "Weißhaut", "zerschmettert-den-Geist", 
  "Zunge-der-Göttin", "Zunge-der-Frevler"
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
