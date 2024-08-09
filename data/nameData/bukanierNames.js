//prettier-ignore
const maleFirstNames = [
  "Abulondrio", "Achmedio", "Alevson", "Alrechio", "Alreq", "AI'Rik", "Balio", "Bo(rro)", "Chalico", "Charumpo", 
  "Dado", "Dschadirmez", "Efferdez", "Efferdito", "Ef frayim", "Elreq", "Hammerfausto", "Hammo", "Horatez", "Ischa-Ko", 
  "Jocke(I)", "Karmalio", "Karydor", "Kasimez", "Lafran", "Mokko", "Nadanero", "Olporio", "Rafidez", "Rahjivio", 
  "Rubannio", "Seffel", "Swafnirez", "Tammtan-Sun", "Tarhito", "Taro", "Tonkuez", "Yasimio", "Yelmez", "Yelrigo-Tsche", 
  "Yussufiego"
];

//prettier-ignore
const femaleFirstNames = [
  "Alrecha", "Alriqa", "Amaxia", "Balies", "Cheska", "Culita", "Dida", "Dschinna", "Dunjanella", "Effe(lia)", 
  "Elriga", "Fara", "Hallah", "Hammerfausta", "Hequitella", "Honkaekka", "Ila(na)", "Jamalita", "Karyb(di)a", "Karys", 
  "Laila-Li", "Manna", "Marbella-To", "Marchesca", "Meralda", "Mihi", "Muna", "Nahemia", "Niri", "Perdita", 
  "Perizella", "Quekka", "Ramira", "Resheminis", "Rizella", "Shilaes", "Sila-He", "Tara", "Thorwallia", "Ula", 
  "Vanja", "Zilla"
];

//prettier-ignore
const lastNames = [
  "Alrechsonno/-dottira", "Amanyas", "Bochsbanniez", "Borotigez", "Borretos", "de Sores", "di Diago", "Dschelefsonno/-dottira", 
  "Faizaluez", "Hakenhand", "Hananduez", "Itzingeros", "Marnez", "Mendez", "Nadaljeff", "Olgerdaz", "Rodiakez", "Rubanez", 
  "Sappazerez", "Seebiir", "Stoppelbart", "Strutzas", "Sumuarez", "Travayez", "Wadrunez", "Wertimolioz", "Wogenbrecher", 
  "Wulfirsonno/-dottira", "Zumbelios"
];

//prettier-ignore
const epithets = [
  "Aal-", "Abtakel-", "Abtritt-", "Achter-", "Affenfaust-", "Altoum-", "Anbohrer-", "Anker-", "Ausguck-", "Backbord-", 
  "Barken-", "Beidreh-", "Belegnagel-", "Bilgen-", "Blut-", "Blutauge(n)-", "Bootsmacher-", "Bordschwein-", "Boronstaucher-", 
  "Brabacuda-", "Brisen-", "Bug-", "Charypso-", "Deckschrubber-", "Dublonen-", "Efferd-", "Einäugig-", "Einhand-", 
  "Einschleicher-", "Entermesser-", "Filzlaus-", "Flaggen-", "Fusel-", "Geißel-", "Ghurenia-", "Gold-", "Goldzahn-", 
  "Haken-", "Hakenhand-", "Hängematten-", "Harpunen-", "Heck-", "Holzbein-", "Hornissen-", "Jungfer-", "Kaventsmann-", 
  "Kenter-", "Kielhol-", "Kielwasser-", "Klabauter-", "Knoten-", "Koggen-", "Kutter-", "Landgang-", "Landratten-", 
  "Leuchtfeuer-", "Meskinnes-", "Messer-", "Meuter-", "Muränen-", "Mützen-", "Nebel-", "Necker-", "Ohnezeh-", "Papageien-", 
  "Peitschen-", "Perlen-", "Piranha-", "Planken-", "Plankentod-", "Prisen-", "Rochen-", "Rotzen-", "Ruder-", "Rum-", 
  "Sibel-", "Schiffszwieback-", "Schnapp(e)s-", "Schuppen-", "Seegras-", "Seegurken-", "Silber-", "Smutje-", "Sprotten-", 
  "Starkarm-", "Sterngucker-", "Steuerbord-", "Stiefelriemen-", "Sylla-", "Takelagen-", "Tang(feld)-", "Überbord-", 
  "Uthuria-", "Waldinsel-", "Windpinkler-", "Wogen-", "Wrack-", "Wudu-", "Zahnlücken-", "Zauber-", "Zitter-", "Zossen-", 
  "Zwinker-"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, epithets, regionSpecifics };

//vorname wir direkt an daas epithets gehängt aber mit binde strich es werden aber nicht immer diese Verwendet
//epithes optional
