//prettier-ignore
const maleFirstNames = [
  "Abdul", "Abu", "Achmad", "A(c)hmed", "Achtev", "Adil", "Ahmedin", "Akim", "Akram", "Alam", "Alev", "Ali", 
  "Alrik", "Amaryd", "Amir", "Amjad", "Arif", "Arkos", "Asad", "Asim", "Assaf", "Aytan", "Azhar", "Azim", 
  "Baba", "Babur", "Bachar", "Bahir", "Basir", "Basman", "Benayman", "Bey", "Chadim", "Chaled", "Chamza", 
  "Charef", "Charim", "Chassan", "Cherek", "Chetin", "Dajin", "Dawud", "Deniz", "Dilhab", "Djamil", "Djuned", 
  "Dschadir", "Dscherid", "Dunachan", "Erkhaban", "Eslam", "Fahd", "Faiz", "Faizal", "Farand", "Far(s)id", 
  "Faruk", "Farag", "Fatin", "Feruz", "Feyach", "Fitah", "Gaftar", "Ghulam", "Gulshev", "Habo", "Habled", 
  "Hadi", "Haim", "Haimuad", "Harah", "Ha(j)ar", "Hakim", "Hamed", "Hamar", "Hamed", "Hamid", "Hamil", 
  "Has(d)rah", "Harun", "Hasam", "Haschim", "Hassan", "Hial", "Hisseyin", "Ijad", "Ismach", "Isneth", "Issam", 
  "Jabir", "Jachman", "Jalif", "Jamal", "Jasfer", "Jedin", "Jedrech", "Jibrak", "Jikhbar", "K(h)adir", "Kamil", 
  "Karkib", "Karim", "Karmal", "Kashban", "Kasim", "Kazan", "Kemal", "Khalda", "Khalid", "Khalim", "Kharel", 
  "Khatar", "Khudur", "Lashkar", "Laskar", "Madhi", "Mufid", "Mahmoud", "Maukr", "Marwan", "Marad", "Meah", 
  "Meazid", "Mehadi", "Mehdi", "Murad", "Mussad", "Mustafa", "Nadim", "Nadrash", "Najara", "Nabreb", "Nasim", 
  "Nasir", "Nasreddin", "Nazir", "Nebahath", "Neriman", "Nezaher", "Omar", "Omjaid", "Pakhizal", "Perhiman", 
  "Rachman", "Rafid", "Rafik", "Rahim", "Rashar", "Rashid", "Rashim", "Rashman", "Rashtul", "Rastafan", 
  "Ras(u)l", "R(a)hul", "Rechan", "Rezzan", "Rhayad", "Rhukeyef", "Rohal", "Ruban", "Ruchan", "Sadir", 
  "Sahil", "Said", "Saif", "Saiman", "Sali", "Sanhedi", "Sede", "Sef", "Selim", "Selo", "Seyashan", "Shabob", 
  "Shafir", "Shah", "Shanhan", "Shakir", "Shanatif", "Sheik(h)", "Sheranbil", "Sulmahadin", "Sulman", 
  "Surkan", "Tahir", "Tarek", "Thamir", "Tulachmin", "Tulef", "Tuleyman", "Ukhraban", "Umar", "Umran", 
  "Wahid", "Yadail", "Yakuban", "Yali", "Yassir", "Yelmis", "Yerdawan", "Yusuf", "Zachaban", "Zachan", 
  "Zahir", "Zekih", "Zelihman", "Zulah", "Zulhamid"
];

//prettier-ignore
const femaleFirstNames = [
  "Abla", "Abrizah", "Afra", "Aicha", "Aischa", "Aishulibeth", "Alhina", "Alima", "Amina", "Amira(h)", "Arika", 
  "Ashaybith", "Asifa", "Asra", "Ayda", "Aydina", "Ayla", "Ayrina", "Ayshal", "Azina", "Aziza", "Bedi(y)a", 
  "Belima", "Belizeth", "Beychaliban", "Birshen", "Byalabeth", "Chadijah", "Chalibah", "Chandra", "Chaneefa", 
  "Chanisa", "Chanya", "Dassarath", "Delilah", "Demeya", "Dilibeth", "Dimah", "Dimiona", "Djamila", 
  "Djamilla", "Dunja", "Emira(mis)", "Erzibeth", "Eshila", "Esmalda", "Ezra", "Fadime", "Fahimja", "Faiza", 
  "Farah", "Fatime", "Fayrishe", "Ferushan", "Hadiya", "Hakima", "Halima", "Hanan", "Harani", "Hennah", 
  "Heyeshan", "Hidaybeth", "Isha", "Ishara", "Izmaban", "Jamil(h)a", "Jaouna", "Jehmina", "Josmabith", 
  "Jushibi", "Karhima", "Kemillja", "Kerime", "Khadifa", "Khadija", "Khalila", "Laana", "Laila", "Lamia", 
  "Layan", "Layla", "Leila", "Manjula", "Maram", "Marwa", "Meriban", "Milhibeth", "Mirhiban", "Mirshan", 
  "Mogtah", "Nada", "Nadi(y)a", "Nahda", "Nahema", "Naima", "Nasira", "Nassiban", "Nayla", "Nazmeya", 
  "Nedime", "Neraida", "Nesliha", "Niobara", "Nishat", "Nurhan", "Onchabeth", "Oyan", "Oymira", "Palmeya", 
  "Peribeth", "Perishan", "Perizel", "Rabi(y)a", "Rajiha", "Ranchel", "Raniya", "Rasha", "Reem", "Renahban", 
  "Reshemin", "Riftah", "Sabi(y)a", "Sadia", "Sahar", "Sajida", "Salma", "Sarjaban", "Sefira", "Selima", 
  "Selime", "Semirhija", "Shabra", "Shahane", "Shanhazadra", "Shanja", "Sharisad", "Shenny", "Sherizeth", 
  "Sheydan", "Shila", "Shuhelja", "Shulam", "Sulibeth", "Tulameth", "Tulmyrja", "Yalisa", "Yamira", 
  "Yashima", "Yasine", "Yasmin", "Yeshinna", "Yessamin", "Yezemin", "Yilbalis", "Ymrai", "Yosmabith", 
  "Yullabeth", "Zahia", "Zahina", "Zahira", "Zahrabeth", "Zamira", "Zechiban", "Zuleik(h)a", "Zulhamin"
];

//prettier-ignore
const epithets = [
  "abu'l Aram", "abu'l Ketab", "al'Ahjan", "al'Ahmad", "al'Alam", "al'Amar", "al'Ankhra", "al'Azila", "al'Azizel", 
  "al'Chadid", "al'Djinn", "al'Fessir", "al'Haimamud", "al'Hakim", "al'Jamila", "al'Kebir", "al'Kira", "al'Raschtul", 
  "al'Rashid", "al'Rik", "al'Saher", "al'Sarjaban", "al'Shabra", "al'Sharisad", "al'Shaya", "al'Yalla", "al'Yeshinna", 
  "al'Zahra", "bint el'Buchare", "bint el'ifriit", "bint el'Zul", "bint el'Leila", "bint el'sulef", "el'Fenneq", 
  "el'Schaddai", "el'Zitagi", "umm'el Kachelaq"
];

const lastNamesNovadi = femaleFirstNames.map((name) => "bint el'" + name);

const maleLastNames = maleFirstNames;

const femaleLastNames = maleFirstNames;

const lastNamesMalePrefix = ["ibn ", "ben "];

const lastNamesFemalePrefix = ["saba "];

const lastNamesFemaleSuffix = ["sun(n)i ", "sunya"];

const regionSpecifics = {
  hasGenderSpecificLastName: true,
  hasEpithet: true,
  hasGenderSpecificEpithe: false,
  hasNoLastName: false,
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
  maleLastNames,
  femaleLastNames,
  lastNamesMalePrefix,
  lastNamesFemalePrefix,
  lastNamesFemaleSuffix,
  regionSpecifics,
};

//prefix und suffix wird für den nachnamen verwendet dies ist meist der name vom Vater aus bei den novadi dort wird der mutter name verwendet und ein anderer prefix

// beinamen sind kompliziert weil die überall stehen können und auch zB den vornamen ersetzen können
