const maleFirstNames = [
  "Abelmir", "Adamo", "Aldorn", "Aldo", "Alesandro", "Allrico", "Alviero", "Almodio", "Arbos", "Argelione", "Arion", 
  "Aristo", "Arn", "Ascanio", "Aurelian", "Bardo", "Basilius", "Bembo", "Benvenuto", "Boranfer", "Bragon", "Bren", 
  "Brindor", "Cadvalon", "Caelumno", "Caldras", "Caldor", "Calaron", "Candro", "Carolan", "Chiranor", "Ciro", "Cornara", 
  "Cordovan", "Croenar", "Curan", "Curthan", "Cusimo", "Damion", "Darian", "Dartan", "Delgado", "Dettmar", "Dorgando", 
  "Draco", "Drugon", "Edo", "Eferdo", "Eolan", "Erlan", "Ezzelino", "Faldor", "Fardenin", "Festo", "Folnor", "Gabrino", 
  "Gardelan", "Gareno", "Gerion", "Gilmon", "Gismondo", "Grifone", "Haka", "Haldan", "Haldur", "Hesindeago", "Hesindio", 
  "Hexander", "Horasio", "Horathio", "Imaculo", "Irian", "Jaltek", "Kalman", "Kedor", "Khadan", "Khoren", "Landor", 
  "Leomar", "Leonello", "Lessand", "Lorian", "Luca", "Lucan", "Ludolfo", "Lysander", "Malvolio", "Marbio", "Masaniello", 
  "Midon", "Mondino", "Muracio", "Nepolemo", "Nestario", "Nitor", "Orsino", "Ostilio", "Pasquino", "Perainio", 
  "Phederino", "Phedro", "Pirtho", "Polinaro", "Praionor", "Pulpio", "Quendan", "Rahjacon", "Rahyodan", "Ralhon", 
  "Rasuan", "Refardeon", "Reo", "Rimaldo", "Romin", "Romualdo", "Rondraman", "Rondravio", "Rondrigo", "Salarino", 
  "Salquiro", "Sal", "Saras", "Seliman", "Silem", "Sindarion", "Stordian", "Sumudan", "Sulvodan", "Talor", "Tanglan", 
  "Tassilo", "Terdin", "Thalon", "Thisdan", "Thuan", "Timor", "Torlon", "Torvon", "Ugo", "Umbario", "Uras", "Usim", 
  "Varsinian", "Vassel", "Vermis", "Vicino", "Vilate", "Xeranio", "Yarum", "Yerno", "Yulio", "Zadalon", "Zandor", "Zordan"
];

const femaleFirstNames = [
  "Adamante", "Adaque", "Ada", "Afiniga", "Afjalea", "Ainada", "Alanda", "Alane", "Alaine", "Amazella", "Ambrassa", 
  "Amene", "Amine", "Amarelle", "Anais", "Andara", "Andra", "Andria", "Aneirin", "Anghessa", "Aniel", "Anivania", 
  "Anthea", "Antissa", "Antolia", "Areliane", "Ariana", "Arissa", "Asandel", "Asja", "Atalaya", "Atessa", "Aurelia", 
  "Avesandra", "Averda", "Aveline", "Avessandra", "Beli", "Belari", "Bellaphina", "Bellatrix", "Bonaventa", "Boromea", 
  "Cavara", "Caya", "Celissa", "Cirina", "Clariza", "Coruna", "Dalida", "Daria", "Dara", "Desaya", "Dragontina", "Dulcinea", 
  "Duridanya", "Eferda", "Ela", "Elissa", "Elvene", "Englard", "Elysia", "Eriona", "Feodora", "Fiaga", "Findulaja", 
  "Fiammetta", "Fora", "Ghislaine", "Gorrada", "Gylduria", "Gylda", "Gylyana", "Haldana", "Haricia", "Harika", "Hela", 
  "Hesine", "Hesindana", "Hesindiane", "Hesindra", "Hexandra", "Horantha", "Horasianne", "Horathia", "Imacula", "Imperia", 
  "Ingramanda", "Irioyna", "Isida", "Jatane", "Kusmara", "Laema", "Larona", "Lavinia", "Lelia", "Leomara", "Logistilla", 
  "Loretta", "Lovisa", "Lucara", "Lucietta", "Lutana", "Lyssandra", "Madalea", "Maline", "Marbis", "Maryan", "Melisande", 
  "Modesta", "Morena", "Myrana", "Mytharea", "Nanda", "Nandine", "Nandora", "Nevinia", "Niam", "Niothia", "Nissara", 
  "Nissa", "Nita", "Odina", "Oleanna", "Ola", "Oloranth", "Pamina", "Perainella", "Phedre", "Pheroda", "Phelicitas", 
  "Phrosina", "Polissena", "Praiadne", "Premodia", "Prisya", "Rahjalina", "Rahjamande", "Rahjane", "Rahjanes", "Remira", 
  "Rinaya", "Rondava", "Rondriga", "Sabeth", "Salyka", "Sari(ya)", "Savinya", "Silvana", "Simonia", "Selyna", "Sylvette", 
  "Synella", "Thalnel", "Theris(a)", "Thesida", "Tilian", "Travienne", "Traviella", "Tsabella", "Tsaida", "Udora", 
  "Usvina", "Valiana", "Vanosya", "Viviona", "Xaviera", "Yalma", "Yasinthe", "Yesaria", "Yalonde", "Zarya", "Zerline", 
  "Zryasa"
];

const lastNames = [
  "Agricola", "Aldubhor", "Altrovis", "Angussiola", "Anzani", "Arbalista", "Arsago", "Ballurat", "Barberigo", 
  "Berylli", "Bibiena", "Boccalino", "Bomarzo", "Bossvani", "Botta", "Bresefinck", "Bronzino", "Broock", "Buffarsis", 
  "Calarastra", "Calvanti", "Calmo", "Caranda", "Casella", "Castellani", "Castracane", "Cavalcanti", "Cerrano", 
  "Cornamus", "Corsini", "Cosentini", "Crassac", "Darneel", "Damtoli", "Dolvarn", "Droste", "Durazzo", "Durenald", 
  "Eselbeon", "Esthenar", "Falconieri", "Farfara", "Fernell", "Fiammingo", "Floranda", "Folango", "Fondo", "Forca", 
  "Foscani", "Furbesca", "Gaburra", "Galletta", "Ghislieri", "Gildorra", "Gozzi", "Gravura", "Graziani", "Greven", 
  "Grimani", "Horrad", "Hortulani", "Ilsand", "Issefora", "Kalamal", "Kureon", "Lafierei", "Lasca", "Lorvai", "Malagreia", 
  "Matarazzo", "Marmotte", "Mazonion", "Mazarin", "Melior", "Menhardt", "Mercator", "Merzari", "Monesta", "Montazzi", 
  "Monte", "Morcalino", "Muratori", "Narveer", "Neethling", "Nestefan", "Novara", "Offantas", "Ohlantar", "Pamphili", 
  "Pelargon", "Peruzzi", "Pheligonde", "Picantilo", "Ponte", "Ponziani", "Preudi", "Prosperi", "Quendillion", "Raborn", 
  "Radostani", "Raffacani", "Regalado", "Regotis", "Rijfsen", "Rocomable", "Rochas", "Rubini", "Rufo", "Rutella", 
  "Salvain", "Samudo", "Sandoval", "Sarostes", "Sbasiti", "Scacabarezzi", "Scala", "Scardeoni", "Scossavalli", "Scribani", 
  "Serpoletti", "Simondi", "Soranzo", "Spada", "Spillatorti", "Stipenbrink", "Tebaldeo", "Terumaris", "Tharedion", 
  "Torese", "Torme", "Tortona", "Trabaccantes", "Trequona", "Tripada", "Ulfarana", "Vansanti", "Vardent", "Villani", 
  "Westerfolden", "Willant", "Zampatte", "Zopping", "Zuberthin"
];

const nobleNames = [
  "Aralzin", "ash Manek", "ay Oikaldiki", "Berlinghân", "da Malagreia", "della Giudice", "della Tegalliani", "della Trezzi", 
  "della Turani", "di Balligur", "di Bellafoldi", "di Camaro", "di Matienna", "Dorn", "Firdayon", "Firdayon-Bethana", 
  "Galahan", "Garlischgrötz", "Marvinko", "Oikaldiki", "Silgario", "Sirensteen", "Tarcalo", "Thirindar", "von Hasbeck-Galahan", 
  "von Malur", "von Radoleth", "von Thegûn", "von Veliris", "von Costermana"
];

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames };
