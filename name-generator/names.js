const namesData = require("../data/nameData/namesData");

function getRandomElement(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Expected a non-empty array");
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRegionData(origin) {
  const originKey = `${origin}Names`;

  const originData = namesData[originKey];

  if (!originData) {
    throw new Error(`Origin ${origin} not found in data`);
  }

  return originData;
}

function getFirstName(isMale, originData, noble) {
  let maleFirstNamesList = [];
  let femaleFirstNamesList = [];
  if (noble && originData.regionSpecifics.hasNobleFirstNames) {
    maleFirstNamesList = originData.nobleMaleFirstNames;
    femaleFirstNamesList = originData.nobleFemaleFirstNames;
  } else {
    maleFirstNamesList = originData.maleFirstNames;
    femaleFirstNamesList = originData.femaleFirstNames;
  }

  //Multi vornamen
  let firstName;
  if (originData.regionSpecifics.hasMultiFirstNames) {
    let numberOfFirstNames = Math.floor(Math.random() * 3) + 2; // Zufällige Zahl zwischen 2 und 4
    let firstNames = [];
    for (let i = 0; i < numberOfFirstNames; i++) {
      let name = isMale ? getRandomElement(maleFirstNamesList) : getRandomElement(femaleFirstNamesList);
      firstNames.push(name);
    }
    firstName = firstNames.join(" ");
    //--------------
  } else {
    firstName = isMale ? getRandomElement(maleFirstNamesList) : getRandomElement(femaleFirstNamesList);
  }

  return firstName;
}

function getLastName(isMale, originData, noble) {
  let lastNamesList = [];
  let neutralLastNameList = [];
  if (noble && originData.regionSpecifics.hasNoble) {
    lastNamesList = [...originData.nobleNames];
    if (originData.regionSpecifics.hasNoblePrefix) {
      lastNamesList = lastNamesList.map((lastNames) => getRandomElement(originData.noblePrefix) + lastNames);
    }
  } else {
    let genderLastNameList = [];
    if (originData.regionSpecifics.hasGenderSpecificLastName) {
      genderLastNameList = isMale ? [...originData.maleLastNames] : [...originData.femaleLastNames];

      //add prefix to gender specific last name
      if (isMale && (originData.lastNamesMalePrefix || originData.lastNamesMaleSuffix)) {
        genderLastNameList = originData.lastNamesMalePrefix
          ? genderLastNameList.map((name) => getRandomElement(originData.lastNamesMalePrefix) + name)
          : genderLastNameList.map((name) => name + getRandomElement(originData.lastNamesMaleSuffix));
      }
      if (!isMale && (originData.lastNamesFemalePrefix || originData.lastNamesFemaleSuffix)) {
        const hasPreAndSuffix = originData.lastNamesFemalePrefix && originData.lastNamesFemaleSuffix;

        if (hasPreAndSuffix) {
          const prefixLength = originData.lastNamesFemalePrefix.length;
          const suffixLength = originData.lastNamesFemaleSuffix.length;
          const distribution = prefixLength / (prefixLength + suffixLength);
          genderLastNameList = genderLastNameList.map((name) =>
            Math.random() < distribution
              ? getRandomElement(originData.lastNamesFemalePrefix) + name
              : name + getRandomElement(originData.lastNamesFemaleSuffix),
          );
        } else {
          genderLastNameList = originData.lastNamesFemalePrefix
            ? genderLastNameList.map((name) => getRandomElement(originData.lastNamesFemalePrefix) + name)
            : genderLastNameList.map((name) => name + getRandomElement(originData.lastNamesFemaleSuffix));
        }
      }
    }

    if (originData.lastNames) {
      neutralLastNameList = originData.lastNames;
    }

    lastNamesList = [...neutralLastNameList, ...genderLastNameList];
  }

  return getRandomElement(lastNamesList);
}

function setClanName(lastName, originData) {
  let clanName = getRandomElement(originData.clanNames);

  return Math.random() < 0.4 ? `${lastName} ${clanName}` : lastName;
}

function getEpithet(isMale, originData) {
  let epithetList = [];
  let genderEpithetList = [];
  let neutralEpithetList = [];
  if (originData.regionSpecifics.hasGenderSpecificEpithe) {
    genderEpithetList = isMale ? originData.epithetsMale : originData.epithetsFemale;
  }
  if (originData.epithets) {
    neutralEpithetList = originData.epithets;
  }
  epithetList = [...neutralEpithetList, ...genderEpithetList];
  return getRandomElement(epithetList);
}

function cleanName(name) {
  return name.trim().replace(/\s+/g, " ");
}

function generateNames(gender, origin, noble) {
  const originData = getRegionData(origin);

  if (!originData) {
    return console.error("no originData");
  }

  const names = [];

  for (let i = 0; i < 10; i++) {
    let firstName;
    let lastName = "";
    let epithet = "";

    if (!gender) {
      //set random gender
      const isMale = Math.random() < 0.5 ? true : false;

      firstName = getFirstName(isMale, originData, noble);
      lastName = originData.regionSpecifics.hasNoLastName ? "" : getLastName(isMale, originData, noble);

      if (originData.regionSpecifics.hasEpithet) {
        epithet = getEpithet(isMale, originData);
      }
    } else {
      firstName = getFirstName(gender === "male", originData, noble);
      lastName = originData.regionSpecifics.hasNoLastName ? "" : getLastName(gender === "male", originData, noble);

      if (originData.regionSpecifics.hasEpithet) {
        epithet = getEpithet(gender === "male", originData);
      }
    }

    if (originData.regionSpecifics.hasClanNames) {
      lastName = setClanName(lastName, originData);
    }

    let name;
    if (originData.regionSpecifics.hasEpithet) {
      name = Math.random() < 0.5 ? `${firstName} ${lastName}` : `${firstName} ${epithet} ${lastName}`;
    } else {
      name = `${firstName} ${lastName}`;
    }

    names.push(cleanName(name));
  }

  return names;
}

module.exports = { generateNames };
