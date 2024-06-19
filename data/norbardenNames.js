//prettier-ignore
const maleFirstNames = [
  "Adrej", "Ahani", "Aikul", "Aleks", "Alriksej", "Amrun", "Arej", "Arljev", "Akhtaw", "Banjev", "Barin(s)", "Beril", 
  "Bjuro", "Bogul", "Boril", "Bradrik", "Burgev", "Dagri", "Danilew", "Darbin", "Darjew", "Daswadan", "Dergej", "Dirgis", 
  "Dorko(w/i)", "Ebran(j/i)", "Elkman", "Erdoj", "Erejev", "Etril", "Fadril", "Fagris", "Fargej", "Fenew", "Fjedril", 
  "Fijnko", "Fogutil", "Fradrik", "Fredoj", "Ganew", "Ganri", "Glawnaj", "Gojelno", "Gossud(j)ar", "Guri", "Hamakil", 
  "Ibron", "Irgoj", "Janko", "Jaslaw", "Jenko", "Juchow", "Kargemil", "Kaspaj", "Kaspron", "Kergaj", "Kolaj", "Lanjek", 
  "Lari", "Laromir", "Leguslaw", "Lexej", "Lorsij", "Malmodir", "Matajev", "Meramdin", "Mija", "Mikail", "Mischajl", 
  "Mjesko", "Mokosch", "Okil", "Okjadir", "Olboj", "Patrel", "Patril", "Perun", "Pjatril", "Radul", "Raswejd", "Respo", 
  "Rogoff", "Rurtin", "Sajud", "Samjon", "Sergej", "Sildrojan(-yan)", "Swantew", "Swiat", "Tassil", "Tatjan", "Teskisch", 
  "Thyandur", "Tuljew", "Upraw", "Uriel (Uriel)", "Watleno", "Wlad", "Zanisch"
];

//prettier-ignore
const femaleFirstNames = [
  "Abra", "Agnitha", "Aikulja", "Akilja", "Arga", "Banja", "Barina", "Berilja", "Besga", "Bilkis", "Birgat", "Bisminka", 
  "Bite(scha)", "Bogja", "Chren(ja)", "Dagris", "Dalkeshja", "Darja", "Dascha", "Datescha", "Derja", "Dirgisa", "Durscha", 
  "Eborja", "Eika", "Elkja", "Etris", "Fargisa", "Fan(j)a", "Felja", "Fetanka", "Finja", "Frankja", "Ganris", "Gerja", 
  "Girtinka", "Gulja", "Haka", "Hanija", "Hashandra", "Hedja", "Helna", "Hetinka", "Hirja", "Huldja", "Hurt(j)a", "Ibra", 
  "Imja(schala)", "Ischa", "Ismenka", "Jalinka", "Jalna", "Jaminka", "Janka", "Jascha", "Jaunava", "Jelena", "Julenka", 
  "Junmikse", "Kajena", "Kariena", "Katjenka", "Kerja", "Kittanka", "Kolja", "Koscha", "Kurja", "Lenija", "Lexaja", 
  "Liminka", "Lorsija", "Mascha", "Mersch(ja)", "Minka", "Mishala", "Mokoscha", "Miruna", "Munja", "Obanija", "Olgad(ja)", 
  "Olja", "Orinka", "Otja", "Pawla", "Pidescha", "Politka", "Pontika", "Radinka", "Raaf", "Raeescha", "Reska", "Rika", 
  "Rischinka", "Ruscha", "Sanja", "Slanka", "Soescha", "Talja", "Tatja", "Terlaja", "Thesi(ja)", "Titanka", "Tuminka", 
  "Umerike", "Upra", "Vesanak", "Wlada", "Yilbakis", "Zernika"
];

//prettier-ignore
const lastNames = [
  "Abrinken", "Aljeff", "Arlin", "Arrastin", "Atranzig", "Bagoltin", "Bartineff", "Barvedis", "Bilenizig", "Boljacheff", 
  "Burtinen", "Butanjeff", "Chadajeff", "Chopruitin", "Daginen", "Dagonneff", "Dallenthin", "Daprussek", "Dirminen", 
  "Dogejeff", "Dubej", "Dukadajeff", "Elin", "Emanjeff", "Erignen", "Etajeff", "Eugoltin", "Fagjeff", "Fantinen", 
  "Ferjeff", "Filajeff", "Firmin", "Fgol", "Fogujeff", "Frantischeff", "Fruginem", "Gamajeff", "Garkinen", "Gerjeff", 
  "Gertaining", "Gorening", "Hardering", "Helajeff", "Hormimen", "Hurlamecheff", "Ibrajeff", "Ijmgren", "Irgajeff", 
  "Itolojeff", "Janeff", "Janja", "Janfortel", "Jeninen", "Jikajeff", "Jonkjeff", "Jurgavist", "Jatanef", "Kerenling", 
  "Korzajng", "Kowalejeff", "Lenejeff", "Linara", "Loranin", "Lugoltin", "Mandragjeff", "Marginen", "Mogoljheff", 
  "Nujol", "Nurkajeff", "Olschfeff", "Otaninen", "Porgaijeff", "Rajeff", "Reschgin", "Sewerin", "Sievening", "Surjeff", 
  "Tsirkevist", "Tureljeff", "Ugradin", "Walsajew", "Wodjajeff"
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
