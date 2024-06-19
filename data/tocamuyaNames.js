//prettier-ignore
const maleFirstNames = [
  "Abadu", "Akanea", "Akivi", "Alre-Go", "Alunga", "Am'ima", "Anakena", "Anekka-Ka", "Ariki", "Asmoa", "Ataranga", 
  "Bakiri", "Dasu", "Dawa", "D'pao", "Ekaro", "Esla", "Fekka", "Hahi", "Hoa", "Jaja", "Jemina", "Ka", "Kalu", 
  "Kamali", "Kanuga", "Khaik'hai", "Kiri", "Kohao", "Kp'tanu", "Kum'tani", "Kupe", "Lante", "Lisu", "Lola'e", 
  "Lupao", "Makkika", "Manisa", "Manui", "Manutara", "Mina-Moa", "Minoma", "Miraro", "Miru", "Muna", "Nahimi", 
  "Nim'u", "Ninou", "Niwu", "Nuso-Nu", "Oniga", "Piku", "Pria", "Rangi", "Rano", "Rasuli", "Ratan", "Rawiri", 
  "Riro", "Roniga", "Rotang", "Safu", "Sama", "Sapa", "Satoh", "Simo", "Simu", "Swiha", "Taaro", "Tahai", 
  "Tare", "Temura", "Tipo", "Totora", "Tp'ari", "Tr'ana", "Uluru", "Una", "Uriga", "Wela", "Wipati", "Ya'car", 
  "Yimari", "Yuta"
];

//prettier-ignore
const femaleFirstNames = [
  "Abadu", "Akanea", "Akivi", "Alre-Go", "Alunga", "Am'ima", "Anakena", "Anekka-Ka", "Ariki", "Asmoa", "Ataranga", 
  "Bakiri", "Dasu", "Dawa", "D'pao", "Ekaro", "Esla", "Fekka", "Hahi", "Hoa", "Jaja", "Jemina", "Ka", "Kalu", 
  "Kamali", "Kanuga", "Khaik'hai", "Kiri", "Kohao", "Kp'tanu", "Kum'tani", "Kupe", "Lante", "Lisu", "Lola'e", 
  "Lupao", "Makkika", "Manisa", "Manui", "Manutara", "Mina-Moa", "Minoma", "Miraro", "Miru", "Muna", "Nahimi", 
  "Nim'u", "Ninou", "Niwu", "Nuso-Nu", "Oniga", "Piku", "Pria", "Rangi", "Rano", "Rasuli", "Ratan", "Rawiri", 
  "Riro", "Roniga", "Rotang", "Safu", "Sama", "Sapa", "Satoh", "Simo", "Simu", "Swiha", "Taaro", "Tahai", 
  "Tare", "Temura", "Tipo", "Totora", "Tp'ari", "Tr'ana", "Uluru", "Una", "Uriga", "Wela", "Wipati", "Ya'car", 
  "Yimari", "Yuta"
];

//prettier-ignore
const lastNames = [
  "Akharu", "Kehata-He", "Khai'taha", "Ko-wana", "K'trak", "Mahapeq", "Mini-Ko", "Paktupetepeq", "Taha-Tawa", 
  "Tota-Raru", "Yumapeq"
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
