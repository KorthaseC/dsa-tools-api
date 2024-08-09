//prettier-ignore
const maleFirstNames = [
  "Argon", "Ber(n)fried", "Bernhelm", "Delo", "Eberhardt", "Eberhelm", "Ebernecht", "Eberwolf", "Fergold", "Firunwolf", 
  "Firunjef", "Firutin", "Frankwart", "Grimmwulf", "Hargen", "Jarlak", "Jost", "Kunibald", "Kunibraf", "Kun(jo)", 
  "Litprand", "Nibelwulf", "Rondrajew", "Ronwulf", "Rude", "Rudjew", "Sahilabard", "Sildrayon", "Thiomar", 
  "Wolfbrandt", "Wolfhardt", "Wolfhelm", "Wolfried", "Yerodin", "Zordan"
];

//prettier-ignore
const femaleFirstNames = [
  "Arnwulfe", "Dalkeshja", "Dela", "Eberlieb(e)", "Endilia", "Faduahenne", "Fian(na)", "Firunie", "Firunja", "Grimwulfe", 
  "Gundel", "Firinja", "Ilsebra", "Maila", "Merishja", "Morlenja", "Perainje", "Perjascha", "Renja", "Rondrian(ja)", 
  "Xindra", "Winfirune", "Wolfriede", "Wulfe", "Yppolita", "Ysilie", "Zylva"
];

//prettier-ignore
const lastNames = [
  "Adersin", "Alstersen", "Alttdorfer", "Auenser", "Bauernschäfer", "Birkenhain", "Birkenoff", "Donnersin", 
  "Eeblsen", "Ebering", "Egelsen", "Erlbach", "Erlenseer", "Fuchsen", "Gorbensen", "Henningsen", "Ilsurer", 
  "Jelling", "Karensen", "Knochenhacker", "Kolding", "Lammersen", "Meiling", "Neustädter", "Okenheld", 
  "Pering", "Protzinger", "Rauerding", "Riedenschäfer", "Rundling", "Schäfchenbauer", "Schafensen", "Werthag", 
  "Wollmacher", "Wulfsen", "Ysilier"
];

//prettier-ignore
const nobleNames = [
  "Alst", "Bocksweiler", "Darbonia", "Dogulsfurt", "Drachenwehr", "Dunkelstein", "Ehrenstein", "Eisenrath", "Erlbrück", 
  "Finsterzann", "Fischbach", "Firunsschilfen", "Gableweyhe", "Gerdenwald", "Gernotsborn", "Grünauen", "Isenborn", 
  "Korswandt", "Nordweide", "Ogerbusch", "Radrombrücken", "Schafweide", "Schilfsend", "Schnattermoor", "Tirandur", 
  "Treublatt", "Ulmenburg", "Wolfsruf", "Wulfenforst", "Wulfenthurm", "Yyoffrynn-Thama"
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

module.exports = { maleFirstNames, femaleFirstNames, lastNames, nobleNames, regionSpecifics };
