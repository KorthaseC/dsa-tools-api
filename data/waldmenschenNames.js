//prettier-ignore
const maleFirstNames = [
  "Ake-Iya", "Anhe", "Bahene", "Bohantopa", "Cankuna", "Cante-Tinza", "Catka", "Cekpa", "Eyapa-Tisa", "Hahatowan", 
  "Han-Hepi", "Hayatepe", "He-Sche", "Hey-Mo", "Hiye-Haja", "Ho-Iaya-Yo", "Huka", "Huka-Hey", "Isna-Inti", 
  "Istima-Tonko", "Jebato", "Kauka-He", "Kehala", "Ketaqua", "Miniwatu", "Mumpoto", "Pahaha", "Panhaha", "Sica", 
  "Takate", "Tapam-Wah", "Tapo", "Taya-Ko", "Tetaka", "Tiki-Ta", "Tokahe", "Tonkwan", "Tonku", "Totogi", "Wapiya", 
  "Yako"
];

//prettier-ignore
const femaleFirstNames = [
  "Ake-Iya", "Anhe", "Bahene", "Bohantopa", "Cankuna", "Cante-Tinza", "Catka", "Cekpa", "Eyapa-Tisa", "Hahatowan", 
  "Han-Hepi", "Hayatepe", "He-Sche", "Hey-Mo", "Hiye-Haja", "Ho-Iaya-Yo", "Huka", "Huka-Hey", "Isna-Inti", 
  "Istima-Tonko", "Jebato", "Kauka-He", "Kehala", "Ketaqua", "Miniwatu", "Mumpoto", "Pahaha", "Panhaha", "Sica", 
  "Takate", "Tapam-Wah", "Tapo", "Taya-Ko", "Tetaka", "Tiki-Ta", "Tokahe", "Tonkwan", "Tonku", "Totogi", "Wapiya", 
  "Yako"
];

//prettier-ignore
const lastNames = [
  "Anhepa-Ha", "Anoiha", "Chirakah", "Darna", "Ganak-Si", "Haipu", "Keke-Wanaq"
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
