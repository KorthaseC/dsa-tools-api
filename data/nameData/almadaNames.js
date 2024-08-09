//prettier-ignore
const maleFirstNames = [
  "Almaedo", "Almanzor(o)", "Alonso", "Alric(j)o", "Alr(ego)", "Amando", "Assavo", "Azulejo", "Baliabo", "Bartolo", 
  "Bathocar", "Bodar", "Boromeo", "Boronanthan", "Bornat", "Cahusac", "Caldaio(s)", "Camados", "Cazorlenyo", "Danilo", 
  "Eglamo(r)", "Ernesto", "Escolia", "Eslam(o)", "Espelido", "Federigo", "Gaftaro", "Gerio(n)", "Giralomo", "Gonzalo", 
  "Gulado", "Gujaidal", "Hazanyo", "Hernando", "Hesindio", "Hilario", "Ijamo(r)", "Igeno", "Iglorio", "Irigno", "Ippolito", 
  "Isenzo", "Jacopo", "Joselito", "Kazanyo", "Lanuvio", "Laurenzo", "Lerico", "Lessandero", "Lodovico", "Ludovigro", 
  "Lucion", "Lucio", "Lutwin", "Madramo", "Maqueda(r)", "Marborano", "Moritato", "Nazir", "Obidos", "Ordonyo", "Pelayo", 
  "Perinyo", "Peziamo", "Punino", "Rahjian(o)", "Raul(o)", "Rondrigo", "Rustam(o)", "Salvestro", "Sansovino", "Selindano", 
  "Selindo", "Servando", "Talfan", "Tassio", "Tenneto", "Tessano", "Taldo", "Tsayano", "Urrito", "Valdemoro", "Valpo", 
  "Vencelao", "Viento", "Volapio", "Yaberto", "Yalach", "Yanturio", "Yelador", "Zahir", "Zayano", "Zelsono"
];

//prettier-ignore
const femaleFirstNames = [
  "Ahumeda", "Aldea", "Aldonza", "Almadea", "Amaria", "Antara", "Azila", "Baraya", "Bellamara", "Boronya", "Caldaya", 
  "Caldja", "Caneya", "Concabella", "Corvara", "Daroca", "Debona", "Doloresa", "Dunyaca", "Elae", "Emilgia", "Escalada", 
  "Esfera", "Eshilya", "Eslamida", "Eslamidia", "Esfreada", "Farfanya", "Fhadime", "Firella", "Ghazalita", "Gonzaga", 
  "Gujadayna", "Ilmice(a)", "Imeria", "Ismeralda", "Jazemina", "Luciana", "Madaleana", "Marqueda", "Mirandola", 
  "Mirahneba", "Morena", "Noiona", "Noava", "Olenga", "Olivenza", "Pasqua", "Pelira", "Rabena", "Rahjada", "Rahjania", 
  "Rahjineza", "Richeza", "Rifada", "Rinaya", "Rondrala", "Rondrahia", "Shahane", "Sefira", "Sigranza", "Simanca", 
  "Solival", "Solsona", "Travanca", "Tsaaia", "Tsaya", "Ulzedona", "Unata", "Usanza", "Unicornia", "Valposella", 
  "Volanova", "Vinnyoza", "Vinyaza", "Yanis", "Yagulira", "Yedra", "Yega", "Yesabella", "Zafira", "Zalamea", 
  "Zarpa(da)", "Zaya", "Zefira", "Zorilla"
];

//prettier-ignore
const lastNames = [
  "Aldubher", "Assiref", "Ballurat", "Branthoed", "Brannthagen", "Blaemendal", "Bolongaro", "Castanyeda", 
  "Cavazaro", "Contador", "Cronbieger", "Dallenstein", "Degenhardt", "Dischzaer", "Fettenhern", "Frostwurm", 
  "Furlani", "Galandi", "Küferhiff", "Lampeerez", "Lautenschläger", "Maltichio", "Manzanares", "Mirdazar", 
  "Muolnar", "Muwallar", "Ossentani", "Pichelstein", "Pitanza", "Pipote", "Racharger", "Ragaza", "Rüdwein", 
  "Schlewin", "Sensenleger", "Sfalja", "Sfandini", "Sfapano", "Sforigan", "Sirgra", "Taubenstanz", "Tefoso", 
  "Trapani", "Valdepenya", "Vascagni", "Zulhamidez", "Zurraiga"
];

//prettier-ignore
const nobleNames = [
  "Abundil", "Agum", "Amazetti", "Alcorta", "Al'Faran", "Al'Kasim", "Al'Shirasgan", "Berg ä. H.", "Bleichenwang", 
  "Braast", "Cavazaro", "Culming", "d'Artésa", "Ernathesa", "Eschgeir", "Franfeld", "Hammamund", "Jurios", 
  "di Lacara", "di Madjani", "Phexhilf-Rabenstein", "Ragathsuqell", "di Rastino", "Rebenthal", "Scheffelstein", 
  "Streitzig ä. H.", "Taladur ä. H.", "da Vanya", "Viryamun", "Zalfor"
];

//prettier-ignore
const epithetsMale = [
  "Punino", "Ragathio", "Amado", "Ascario", "Desidero", "Donat(he)o", 
  "Glaciano", "Gracioso", "Hilado", "Honorio", "Leovigild", "Madajuelo", 
  "Maldonado", "Merito", "Misterio", "Phessario", "Promeso", "Valeroso", 
  "Viglio", "Violante", "Zonzo"
];

//prettier-ignore
const epithetsFemale = [
  "Punina", "Ragathia", "Amada", "Ascaria", "Desidera", "Donat(he)a", 
  "Glaciana", "Graciosa", "Hilada", "Honora", "Leovigilda", "Madajuela", 
  "Maldonada", "Merita", "Misteria", "Phessaria", "Promesa", "Valerosa", 
  "Viglia", "Violanta", "Zonza"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: true,
  hasGenderSpecificEpithe: true,
  hasNoLastName: false,
  hasNoble: true,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, epithetsMale, epithetsFemale, regionSpecifics };

//können zweitnamen bzw. epithet haben müssen aber nicht diese stehen zwischen vor und nachnamen
