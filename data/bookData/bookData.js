const bookType = {
  magic: "magic",
  divine: "divine",
  profane: "profane",
};

//prettier-ignore
const profaneFeature = [
  "format", "page", "gem", "signature", "comments", "dirty", "wax", "decoration", "different",
  "burned", "missingPages", "noBinding", "wet", "lock", "worms", "noVowels", "encrypted", 
  "missingM", "noIllustration", "poison"
]

//prettier-ignore
const magicFeature = [
  "open", "demon", "ghost", "schelm", "reader", "xenographus", "memorans", "cryptogrpho", "mirrowed", 
  "fireResistent", "custodosigil", "protected", "oneTime", "memory"
]

//prettier-ignore
const namePartOne = [
  "primer", "basics", "handbook", "vademecum", "compendium", "basicConcepts", "art", "dangers", 
  "essence", "secrets", "book", "almanac", "lexicon", "register", "chronicle", "history",
  "encyclopedia", "codex", "fundamentals", "theory"
]

//prettier-ignore
const namePartTwo = [
  "unfathomable", "whiteMagic", "praioticOrder", "blackMagic", "rondraBehavior", "magicSleep",
  "seaGods", "necromancy", "hospitality", "domination", "silence", "delusions", "hesindeKnowledge",
  "mindReading", "hunting", "curseMagic", "rebirth", "exorcisms", "luck", "invocations", "sowing",
  "magicDestruction", "ingerimmCraft", "shapeShifting", "rahjanianBliss", "elementalMagic",
  "adventureLust", "shapeChange", "victoryAndGold", "objectMagic", "charity", "clairvoyance",
  "marbiden", "magicIllusions", "swafnirCult", "counterspells", "mechanics", "demonology",
  "urtulamidicGods"
]

//prettier-ignore
const namePartThree = [
  "transformation", "elvenMythology", "artifactMagic", "dwarvenLegends", "alchemy", "dragons",
  "enchantments", "demons", "weatherMagic", "travel", "witchcraft", "history", "magicalAnalysis",
  "novadis", "phantasmagoria", "mathematics", "spiritSummoning", "healingArts", "mentalInfluence",
  "castles", "metamorphoses", "wilderness", "magicalAnimation", "mountains", "protectionAndUtilitySpells",
  "theNameless", "loveSpells", "creatures", "invisibleReality", "tulamidLands", "magicalHealing",
  "meridianas", "translocations", "maraskans", "oracles", "heroes", "enchantedPlaces", "villains",
  "limbus", "alveran"
]

const bookData = { bookType, profaneFeature, magicFeature, namePartOne, namePartTwo, namePartThree };

module.exports = bookData;
