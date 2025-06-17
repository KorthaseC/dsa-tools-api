const fs = require("fs");
const path = require("path");

// laod all characters
function loadCharacters() {
  const directoryPath = path.join(__dirname, "../data/characterData");
  const files = fs.readdirSync(directoryPath);

  return files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const filePath = path.join(directoryPath, file);
      return JSON.parse(fs.readFileSync(filePath));
    });
}

// select random characters
function getRandomCharacters(allCharacters, excludeNames = [], count = 1) {
  const availableCharacters = allCharacters.filter((character) => !excludeNames.includes(character.name));

  const randomCharacters = [];
  while (randomCharacters.length < count && availableCharacters.length > 0) {
    const index = Math.floor(Math.random() * availableCharacters.length);
    randomCharacters.push(availableCharacters.splice(index, 1)[0]);
  }

  return randomCharacters;
}

function getCharacters(requestedNames, count) {
  const allCharacters = loadCharacters();
  // select specific characters
  const selectedCharacters = allCharacters.filter((character) => requestedNames.includes(character.name));
  // save names of selected characters
  const selectedNames = selectedCharacters.map((character) => character.name);
  // fill list with random characters
  const remainingCount = count - selectedCharacters.length;
  const randomCharacters = getRandomCharacters(allCharacters, selectedNames, remainingCount);

  return [...selectedCharacters, ...randomCharacters];
}

function getRoomCharacters(roomCharacters, requestedNames = [], count) {
  // select specific characters
  const selectedCharacters = roomCharacters.filter((character) => requestedNames.includes(character.name));
  // save names of selected characters
  const selectedNames = selectedCharacters.map((character) => character.name);
  // fill list with random characters
  const remainingCount = count - selectedCharacters.length;
  const randomCharacters = getRandomCharacters(roomCharacters, selectedNames, remainingCount);

  return [...selectedCharacters, ...randomCharacters];
}

function skillCheck(character, probe, category, modifier, isAttack) {
  const probeObject = findObjectByProbeAndCategory(character, probe, category);
  const skillCheckResult = evaluateCheck(probeObject, character.attributes, modifier, isAttack);
  return { result: skillCheckResult.result, rolls: skillCheckResult.rolls, remainingValue: skillCheckResult.remainingValue, cost: probeObject.cost };
}

function findObjectByProbeAndCategory(character, probe, category) {
  return (
    {
      attributes: () => character.attributes[probe],
      combatTechniques: () => character.combatTechniques[probe],
      skills: () =>
        Object.values(character.skills)
          .flat()
          .find((s) => s.name === probe),
      magic: () => character.magic.find((m) => m.name === probe),
      equipment: () => [...character.equipment.closeCombat, ...character.equipment.rangeCombat].find((e) => e.weapon === probe),
    }[category]?.() || null
  );
}

function evaluateCheck(probeObject, attributes, modifier, isAttack = false) {
  let rolls = [];
  let criticalSuccess = false;
  let criticalFailure = false;
  let remainingValue = 0;

  if (probeObject.probe) {
    rolls = Array.from({ length: 3 }, () => Math.ceil(Math.random() * 20));
    const differences = rolls.map((roll, i) => Math.max(0, roll - ((attributes[probeObject.probe[i]] || 0) + modifier)));
    const totalDifference = differences.reduce((sum, diff) => sum + diff, 0);
    remainingValue = probeObject.value - totalDifference;
  } else {
    rolls = Array.from({ length: 1 }, () => Math.ceil(Math.random() * 20));
    criticalSuccess = rolls.filter((r) => r === 1).length >= 2;
    criticalFailure = rolls.filter((r) => r === 20).length >= 2;
    const checkValue = isAttack ? probeObject.at : probeObject.pa ?? probeObject;
    remainingValue = checkValue + modifier - rolls[0];
  }

  criticalSuccess = rolls.filter((num) => num === 1).length / rolls.length > 0.6;
  criticalFailure = rolls.filter((num) => num === 20).length / rolls.length > 0.6;
  const result = criticalSuccess ? "criticalSuccess" : criticalFailure ? "criticalFailure" : remainingValue >= 0 ? "success" : "failure";

  return { result, rolls, remainingValue };
}

function setNestedValue(obj, path, value) {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("The first parameter must be a non-null object");
  }
  if (typeof path !== "string" || path.trim() === "") {
    throw new Error("The path must be a non-empty string");
  }

  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current.hasOwnProperty(key)) {
      throw new Error(`Path "${keys.slice(0, i + 1).join(".")}" not found`);
    }
    current = current[key];
  }

  const lastKey = keys[keys.length - 1];
  if (!current.hasOwnProperty(lastKey)) {
    throw new Error(`Key "${lastKey}" not found at path "${path}"`);
  }

  current[lastKey] = value;
}

module.exports = {
  loadCharacters,
  getRandomCharacters,
  getCharacters,
  getRoomCharacters,
  skillCheck,
  setNestedValue,
};
