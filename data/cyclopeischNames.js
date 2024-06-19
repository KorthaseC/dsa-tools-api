//prettier-ignore
const maleFirstNames = [
  "Aerealos", "Aeros", "Aviotes", "Basileos", "Braänos", "Brazikarleön", "Calmanos", "Cassíös", "Darmios", "Efferdokles", 
  "Eindrokles", "Gunmedes", "Gyldos", "Hadrokles", "Hallaryon", "Harmidos", "Isathion", "Jarlos", "Míronos", 
  "Morios", "Niothídes", "Numinorios", "Orozëos", "Pertokaes", "Prosperos", "Ragnareos", "Raíanos", "Tímeos", 
  "Ucúrios", "Ucurolkes", "Yareíös"
];

//prettier-ignore
const femaleFirstNames = [
  "Alvides", "Bidaretes", "Braíana", "Braíainke", "Brajaene", "Brandeís", "Cíeta", "Clodea", "Dolopia", "Effradéete", 
  "Efferdiane", "Ibidmenes", "Istapheia", "Kutañe", "Lamea", "Livíkare", "Lyseís", "Menkrídes", "Niothídís", 
  "Olgereís", "Perínope", "Raíaníke", "Sikónteia", "Valerís", "Valerís", "Valpomene"
];

//prettier-ignore
const nobleNames = [
  "dyllios Akidosa", "dyllios Arkisa", "dyllios Baltrea", "dyllios Dubara", "dyllios Heliopolosa", "dyllios Hylaïlosa",
  "dyllios Hylypia", "dyllios Kethas Kethenisa", "dyllios Kutakia", "dyllios Lardosa", "dyllios Mylamasa", 
  "dyllios Pailosa", "dyllios Phenosa", "dyllios Phrygaïosa", "dyllios Putrasa", "dyllios Tenosa", "dyllios Teremona", 
  "dyllios Tyllosa", "dyllios Tyrakisa", "dyllios Aryïosa", "dyllios Athyrosa", "dyllios Ayodona", "dyllios Balträa", 
  "dyllios Fereina", "dyllios Garéna", "dyllios Laryïosa", "dyllios Lÿjosa", "dyllios Mura", "dyllios Palakara", 
  "dyllios Putrasa"
];

const regionSpecifics = {
  hasGenderSpecificLastName: false,
  hasEpithet: false,
  hasGenderSpecificEpithe: false,
  hasNoLastName: true,
  hasNoble: true,
  hasNoblePrefix: false,
  hasNobleFirstNames: false,
  hasMultiFirstNames: false,
  hasClanNames: false,
};

module.exports = { maleFirstNames, femaleFirstNames, nobleNames, regionSpecifics };
