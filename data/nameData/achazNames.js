//prettier-ignore
const maleFirstNames = [
  "Achatazz", "Ahazz'Hur", "A'Hrzzan", "Ak'Har", "Ant'hzzs", "Arsschazz", "Aso'Zzrt", "Azll", "Ch'Lar",
  "Churr'Tzal", "Chriazzl", "Chuszzrr", "Crmiszl", "Dschossr", "Faaschaz", "Fffssz", "G'lizss", "Gr'Kszes",
  "Hasz'Zhe", "He'Itsiz", "He'Schrr", "G'zss", "Iss'Izf", "Izs'Hff", "Jia'srr", "Kh'Hahz", "Krmmkr", 
  "Ku'lizz", "K'zze", "L'tass", "L's'Wssin", "Me'Hsizi", "Mhks", "Nga'Chrir", "Nga'Chzl", "Nh'Nalh", 
  "Nhi'kll", "Nssz", "N't'Plz", "P'rzall", "Qiqigm", "Quaz'Ra", "Quttinszz", "Qz'Shiz", "Rahsz'Nar", 
  "R'zzall", "Rqschst", "Rz'Sra", "Schar'Kar", "Schr'Zsla", "Shaschka", "Shessz'Nht", "Shkank'Wil", 
  "Shrmm", "Shrr'S'rizss", "Sirisas", "Sssintiss", "Szzirrr", "Ssztr", "Szz'Rirtrl", "T'zz Pfff", "Tschak", 
  "Tshhts", "Turaszs", "Tch'A'lar", "Tziktzal", "Tzz'Pff", "Vls'Brar", "Wsffar", "Xad'Mal", "Xa'l'Schzz", 
  "Xchag'Zzim", "Xch'war", "Xezkl", "Xsha'q'il", "Yaschukqim", "Yatschpass(ach)", "Yzsasar", "Zaf'Shar", 
  "Z'rF", "Zha'Rhadnk", "Zht", "Zinth'izss", "Zs'Nisz", "Zzahxel", "Zzs'hill", "Zzzt"
];

//prettier-ignore
const femaleFirstNames = [
  "Achatazz", "Ahazz'Hur", "A'Hrzzan", "Ak'Har", "Ant'hzzs", "Arsschazz", "Aso'Zzrt", "Azll", "Ch'Lar",
  "Churr'Tzal", "Chriazzl", "Chuszzrr", "Crmiszl", "Dschossr", "Faaschaz", "Fffssz", "G'lizss", "Gr'Kszes",
  "Hasz'Zhe", "He'Itsiz", "He'Schrr", "G'zss", "Iss'Izf", "Izs'Hff", "Jia'srr", "Kh'Hahz", "Krmmkr", 
  "Ku'lizz", "K'zze", "L'tass", "L's'Wssin", "Me'Hsizi", "Mhks", "Nga'Chrir", "Nga'Chzl", "Nh'Nalh", 
  "Nhi'kll", "Nssz", "N't'Plz", "P'rzall", "Qiqigm", "Quaz'Ra", "Quttinszz", "Qz'Shiz", "Rahsz'Nar", 
  "R'zzall", "Rqschst", "Rz'Sra", "Schar'Kar", "Schr'Zsla", "Shaschka", "Shessz'Nht", "Shkank'Wil", 
  "Shrmm", "Shrr'S'rizss", "Sirisas", "Sssintiss", "Szzirrr", "Ssztr", "Szz'Rirtrl", "T'zz Pfff", "Tschak", 
  "Tshhts", "Turaszs", "Tch'A'lar", "Tziktzal", "Tzz'Pff", "Vls'Brar", "Wsffar", "Xad'Mal", "Xa'l'Schzz", 
  "Xchag'Zzim", "Xch'war", "Xezkl", "Xsha'q'il", "Yaschukqim", "Yatschpass(ach)", "Yzsasar", "Zaf'Shar", 
  "Z'rF", "Zha'Rhadnk", "Zht", "Zinth'izss", "Zs'Nisz", "Zzahxel", "Zzs'hill", "Zzzt"
];

//prettier-ignore
const clanNames = [
  "Azzln", "Azl'Tzirtassach", "Ciszk'Hr", "Ch'Rys", "Szinth", "Cs'Szzsqu", "Dracr'Zchch", "Ffyi'dh'ysr",
  "Ha'Uruuch", "H'Rabaal", "H'Rexzem", "Lrr'Zzkrot", "Saz'dzz", "Ssd'L", "Tsh'Awah", "Tzirtassach",
  "Tkarktr", "Zch'Zchat", "Zsakssh'Ksh", "Zshorrkh"
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
  hasClanNames: true,
};

module.exports = { maleFirstNames, femaleFirstNames, clanNames, regionSpecifics };
