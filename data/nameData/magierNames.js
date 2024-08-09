//prettier-ignore
const maleFirstNames = [
  "Alviron", "Anselmus", "Argelion", "Balphemor", "Basilius", "Bastrabun", "Brigon", "Cereborn", "Cordovan", 
  "Cyrianus", "Dschelef", "Enanduel(e)", "Esindio(n)", "Hakim", "Hasrabal", "Hesindion", "Hexander", "Isidor", 
  "Killgorn", "Lumin", "Magnus", "Mandricon", "Nandurio(s)", "Robak", "Rohalion", "Septimus", "Sheranbil", 
  "Silesius", "Sulman", "Thamos", "Urnislaw", "Vespertilius", "Vitus", "Xelandor", "Yakuban", "Yandor"
];

//prettier-ignore
const femaleFirstNames = [
  "Aldare", "Alima", "Alverana", "Ancilla", "Ashtarra", "Belizeth", "Callida", "Celest(i)ja", "Celissa", "Dassareth", 
  "Destina", "Esindora", "Eternia", "Gloran(i)a", "Haldana", "Heshinja", "Hexandra", "Hilaria", "Kashra", 
  "Madalena", "Madane", "Nacladora", "Nahema", "Niobara", "Onyxia", "Racalla", "Rovena", "Sabella", "Sapientia", 
  "Septima", "Severina", "Sindara", "Vitriola", "Yand(a)ra", "Yaquiria", "Xeledonie"
];

//prettier-ignore
const lastNames = [
  "Albenstein", "al'Djinn", "al'Ifriitim", "Arkanion", "Arkanjeff", "Blutulme", "Deliberas", "Eternius", "Ignatius", 
  "Invocator", "Mindorias", "Nocturnus", "Rohalsthinger", "Schlangenstab", "Schlangentreu", "Scriptatore", 
  "Sphäireios", "Sternenwacht", "Weißstab", "Windrufer"
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
