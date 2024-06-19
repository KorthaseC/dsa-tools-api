//prettier-ignore
const maleFirstNames = [
  "Tradan", "Trajan", "Travaclad", "Travdan", "Trave", "Travegund", "Traverich", "Travero", "Travesco", "Travestes", 
  "Travesto(s)", "Travian", "Traviard(o)", "Traviardus", "Traviasper", "Traviates", "Travidan", "Travideus", 
  "Travienfried", "Travienhold", "Travingatio", "Travingantz", "Travigo(r)", "Travihold", "Travileas", "Travillo", 
  "Travin", "Travinatus", "Travingo", "Travinio", "Travinior", "Travinor", "Travinzius", "Travio", "Travios", "Travis(os)"
];

//prettier-ignore
const femaleFirstNames = [
  "Balatravia", "Balatravis", "Travanca", "Travegunde", "Travera", "Traves(ch)na", "Travesca", "Travessa", "Travfrieda", 
  "Travhild", "Travhilda", "Travhilde", "Travi(n)zia", "Traviadne", "Traviahild(e)", "Traviahilf", "Traviala", "Travialin", 
  "Travialyn", "Traviane", "Travianna", "Traviata", "Travida", "Travidane", "Travieke", "Travienborg", "Travienburga", 
  "Traviengard", "Travienholde", "Travienlieb", "Travigenia", "Travigenie", "Travigunde", "Travijida", "Travilena", 
  "Travlinja", "Travine", "Travinés", "Travinella", "Travinettia", "Traviopa", "Travithea"
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
