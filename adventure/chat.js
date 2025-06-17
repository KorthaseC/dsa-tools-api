const ChatCategory = {
  Usertext: "usertext",
  Skill: "skill",
  Combat: "combat",
  Attribute: "attribute",
  Magic: "magic",
  Roll: "roll",
};

function createChatMessage(category, username, message, metadata = {}) {
  return { category, username, message, metadata };
}

function rollDice(rollMatch, username) {
  const numberOfRolls = parseInt(rollMatch[2], 10);
  const diceType = parseInt(rollMatch[4], 10);
  let chatMessage;
  const rolls = [];
  if (numberOfRolls > 0 && diceType > 0) {
    for (let i = 0; i < numberOfRolls; i++) {
      const result = Math.floor(Math.random() * diceType) + 1;
      rolls.push(result);
    }

    chatMessage = createChatMessage(ChatCategory.Roll, username, "", { numberOfRolls, diceType, rolls });
  } else {
    chatMessage = createChatMessage(ChatCategory.Usertext, username, "Invalid roll command. Use /rollXdY.");
  }

  return chatMessage;
}

function getSkillCheckMessage(characterName, probe, category, rolls, modifier, remainingValue, result, isAttack, cost) {
  let metadata = {};
  metadata.probe = probe;
  metadata.rolls = rolls;
  metadata.modifier = modifier;
  metadata.result = result;

  let chatCategory;
  switch (category) {
    case "attributes":
      chatCategory = ChatCategory.Attribute;
      break;
    case "combatTechniques":
      chatCategory = ChatCategory.Combat;
      metadata.category = category;
      metadata.isAttack = isAttack;
      break;
    case "equipment":
      chatCategory = ChatCategory.Combat;
      metadata.category = category;
      metadata.isAttack = isAttack;
      break;
    case "skills":
      chatCategory = ChatCategory.Skill;
      metadata.remainingValue = remainingValue;
      break;
    case "magic":
      chatCategory = ChatCategory.Magic;
      metadata.remainingValue = remainingValue;
      metadata.cost = cost;
      break;
  }

  return createChatMessage(chatCategory, characterName, "", metadata);
}

module.exports = {
  createChatMessage,
  rollDice,
  ChatCategory,
  getSkillCheckMessage,
};
