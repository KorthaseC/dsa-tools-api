//prettier-ignore
const maleFirstNames = [
  "Rahjacomo", "Rahjad", "Rahjadan", "Rahjadin", "Rahjado", "Rahjalieb", "Rahjalyn", "Rahjamir", "Rahjamiro",
  "Rahjamo", "Rahjan", "Rahjandrei", "Rahjandes", "Rahjanios", "Rahjanek", "Rahjannes", "Rahjano", "Rahjanor",
  "Rahjaromir", "Rahjarro", "Rahjasco", "Rahjatreu", "Rahjazar", "Rahjesus", "Rahjev", "Rahjiano", "Rahjid", 
  "Rahjiv", "Rahjoscha", "Rayad"
];

//prettier-ignore
const femaleFirstNames = [
  "Rahjabeth", "Rahjada", "Rahjadane", "Rahjadee", "Rahjadés", "Rahjadette", "Rahjadine", "Rahjadis", 
  "Rahjagunde", "Rahjaina", "Rahjaia", "Rahjalane", "Rahjalanthe", "Rahjalena", "Rahjalieb(e)", 
  "Rahjalina", "Rahjalind(a)", "Rahjaline", "Rahjalynn", "Rahjamand(r)a", "Rahjama", "Rahjamira", 
  "Rahjanda", "Rahjane", "Rahjanirra", "Rahjanne", "Rahjanthe", "Rahjaphanie", "Rahjar(r)a", 
  "Rahjasmin", "Rahjatreu", "Rahjella", "Rahjessa", "Rahjette", "Rahjienne", "Rahjin(d)a", "Rahyatis", 
  "Rajaniella", "Ras(c)halia", "Raschanna", "Rayawen", "ReShalia", "Sarahjanja"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: false,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, regionSpecifics };
