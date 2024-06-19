//prettier-ignore
const maleFirstNames = [
  "Arnbold", "Asgrimmjeff", "Coljew", "Däbbart", "Degold", "Dostmann", "Foggman", "Friedjew", "Gerbald", "Gerbaljew",
  "Grimmjost", "Hanko", "Hänno", "Heimuk", "Hokku", "Jaakon", "Jakkonush", "Januk", "Jasper", "Jeesko", "Jöstov", "Juchoi",
  "Kalkuk", "Keinjo", "Kervô", "Pannek", "Peltje", "Praoifried", "Simjok", "Stane", "Swanffach", "Thorwolf", "Torbanjeff",
  "Ulfried", "Urbert", "Ulfjok", "Wolfgårdf", "Wolfgrimm", "Woltan", "Wulfen", "Yagu", "Yn(ya)", "Yorraweg", "Zurabarja"
];

//prettier-ignore
const femaleFirstNames = [
  "Alrika", "Dascha", "Durinja", "Elwinja", "Erdgerda", "Fennja", "Frenja", "Galande", "Geldana", "Gunbritt", "Haudka",
  "Hedjasscha", "Hitta", "Hjalda", "Immentraud", "Jädra", "Joraja", "Jumine", "Kattlinka", "Kela", "Leivka", "Letta",
  "Minka", "Norhild", "Olja", "Selinja", "Solva", "Svänna", "Swafgard", "Swandje", "Talja", "Tatjascha", "Thornfina",
  "Torgritt", "Vajtascha", "Vedjanda", "Vladda", "Wolfgard(a)", "Wolfhild", "Wolflind(e)", "Yasmara"
];

//prettier-ignore
const lastNames = [
  "Arnboldsson/-dottir", "Bernsteinfinder", "Brecheis(en)", "Doltjeff", "Durjolev", "aus Eestiva", "Einauge",
  "Eisläufer", "Ellski", "Firnläufer", "Goldnase", "Irgjeoff", "Jämtfjöller", "Jokkthar", "Keranski", "Kleivisson",
  "Kolljason", "Langjoch", "Neunfinger", "Orkentooth", "Reusenroder", "Robbenschlächter", "Schneehaser", "aus Steinhav",
  "Yngvarsson/-dottir"
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
