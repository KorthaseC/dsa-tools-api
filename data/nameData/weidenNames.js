//prettier-ignore
const maleFirstNames = [
  "Alifir", "Aligrimm", "Alarwin", "Aldewin", "Agnelitt", "Angristr", "Anshag", "Arbofl", "Arlan", "Arnöd", "Arnulf", 
  "Avon", "Bärfried", "Baeromar", "Bernhelm", "Binsbart", "Borckhardt", "Bunsenhold", "Dankward", "Darwolf", "Derling", 
  "Dietrad", "Dolgorn", "Drachwulf", "Dreufang", "Edil", "Efferdin", "Eibhart", "Emmeran", "Erwulf", "Falen", "Feenward(t)", 
  "Feling", "Fingaln", "Fir", "Firnar", "Firutin", "Geldor", "Gerwulf", "Gille", "Giselhold", "Gorge", "Grimmold", 
  "Hargord", "Harmwulf", "Hartmann", "Hasrofl", "Heldar", "Herfan", "Ilmar", "Ilmbald", "Ingerman", "Ingram(m)", 
  "Jargold", "Jarlan", "Josold", "Karlang", "Kerling", "Knorrhold", "Lantweld", "Lein", "Leunman", "Lingmar", "Marbert", 
  "Marmwulf", "Meinhardt", "Menzel", "Nassing", "Nolle", "Norsold", "Odlilbert", "Olin", "Pagol", "Perdan", "Phexlieb", 
  "Radumard", "Rondril", "Rondrech", "Sadelhold", "Sigeholm", "Sigelmar", "Sighelm", "Siltja", "Tannfried", "Terkol", 
  "Tiro", "Thiomar", "Thorendin", "Thorolf", "Tobor", "Uldarich", "Vallo", "Walthardt", "Waldemar", "Weldmar", "Wilfing", 
  "Wolfhelm", "Yann"
];

//prettier-ignore
const femaleFirstNames = [
  "Aartrude", "Adilgunde", "Aligrid", "Alwen(-wid)", "Amselgunde", "Ardariel", "Arline", "Bärlind(e)", "Bärtraut", 
  "Bormunde", "Danje", "Derlinde", "Dylga", "Elfrid(e)", "Elfwid(de)", "Ellmholda", "Enn", "Erlgard", "Erlinde", "Fann", 
  "Farlgard", "Farlgine", "Farnlieb", "Feengrund(e)", "Fenia", "Freyenholde", "Firre", "Fjya", "Fredegunde", "Freugern", 
  "Frohlinde", "Frohlind", "Germlind", "Glaimund", "Gun(gelde)", "Gusella", "Gwynna", "Helchtrut(a)", "Hennya", "Herdrind", 
  "Hiltrut(de)", "Hodtaude", "Ilfwid", "Ilme", "Irglinde", "Kium", "Kupundaln", "Lann", "Lanzelind", "Linje", "Liebholde", 
  "Luitperga", "Maildholde", "Matissa", "May", "Mairhilde", "Nalle", "Neunhild", "Nifgunde", "Olgianil", "Omwid(da)", 
  "Prajda", "Raugunde", "Rondoperga", "Rondragund", "Rechhilde", "Rinnfolde", "Sindaja", "Tannfrede", "Thargrün", 
  "Traute", "Ullgrèin", "Waidgunde", "Waltra", "Waldereia", "Waldtraute", "Waliburia", "Walpurgia", "Yandebirg", "Yolina"
];

//prettier-ignore
const lastNames = [
  "Ackermann", "Brachfelder", "Buthner", "Danckert", "Donnerbacher", "Elenfold", "Fahrenholz", "Faulhaber", "Finsterbacher", 
  "Flösser", "Freidank", "Ganzert", "Gerber", "Hohenwald", "Hollerheider", "Ibendor", "Kolenbrander", "Morgenthorb", 
  "Mühlenfels", "Nettzköpfer", "Orkenrädr", "Orkenhauer", "Rathlistenler", "Riemenschneider", "Rindsherder", "Rohleder", 
  "Runhager", "Schmiedefrau/mann", "Teichenberger", "Ulmenschläger", "Waldner"
];

//prettier-ignore
const nobleNames = [
  "Auenfels", "Blauenburg", "Bibergau", "Binsböckl", "Birselburg", "Blaubinge", "Dergelauf", "Fälklin", "Finsterbach", 
  "Fuchsgab", "Graufels", "Grüngelbamm", "Harlburg", "Hohenstien", "Leuenfeste", "Löwenhaupt", "Nordfalk", "Pandrall", 
  "Roterwasser", "Schneehag", "Schweinlin", "Schrauffensfels", "Sichelbruch", "Weissenstein", "Weiden"
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
