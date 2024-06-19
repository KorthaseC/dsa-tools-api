//prettier-ignore
const maleFirstNames = [
  "Answin", "Barnhelm", "Buchlieb", "Cordovan", "Egilmar", "Friedbert", "Friedebald", "Friedebrecht", "Friedeman", 
  "Friedensreich", "Friecher", "Gansbert", "Gänselieb", "Gänsebrecht", "Gansfried", "Gansel", "Gansrik", "Geldor", 
  "Gerindor", "Hagen", "Herdfried", "Herdin", "Herdmann", "Jesgrein", "Lindebrecht", "Ludeger", "Oldewin", 
  "Randolph", "Redenhardt", "Siegmann", "Trauthold", "Trautman", "Trautmund", "Travihold", "Travidan", "Travinor", 
  "Treubret"
];

//prettier-ignore
const femaleFirstNames = [
  "Darpatia", "Diethlinde", "Fr(i)edegard", "Friedgunde", "Friedhilde", "Friedeke", "Fro(h)mute", "Gänsegard", 
  "Gansela", "Ganselda", "Gänselinde", "Gansje", "Herda", "Herdgard", "Herdtraut", "Herdfrieda", "Herdfriede", 
  "Herdine", "Herdlinde", "Herdwiga", "Herdwinja", "Herzlinde", "Hildegund", "Hildelind", "Ismena", "Lindegard", 
  "Svelinja", "Swantje", "Traviata", "Travide", "Trautgund(e)", "Treu(leude)", "Waldtraute"
];

//prettier-ignore
const lastNames = [
  "Armiger", "Darpater", "Daubenmacher", "Dergelbauer", "Finsterbring", "Grobbinder", "Heisinger", "Hufermark", 
  "Landsknecht", "Ochsenschärer", "Rattel", "Silbergerger", "Tannhaus", "Trutzbacher", "Tuchschneider", 
  "Viehtreiber", "Werckenfels", "Zwerchinger"
];

//prettier-ignore
const nobleNames = [
  "Baernfarn", "Bregelsaum", "Darpatstrom", "Dergebrück", "Erlanfang", "Firunslicht", "Gemattfurten", "Gernsingen", 
  "Natternfurt", "Natterwacht", "Ochs", "Ochsenswasser", "Ockenheld", "Oppstein", "Rabenmund", "Rosshagen", 
  "Sturmfels"
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
