const namesData = require('./namesData');

function getRandomElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Expected a non-empty array');
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateNames(gender, origin, noble) {
    const originKey = `${origin}Names`;

    const originData = namesData[originKey];
    
    if (!originData) {
      throw new Error(`Origin ${origin} not found in data`);
  }

    const maleFirstNamesList = originData.maleFirstNames;
    const femaleFirstNamesList = originData.femaleFirstNames;
    const lastNamesList = originData.lastNames;

    if (noble && Array.isArray(originData.nobleTitles) && originData.nobleTitles.length > 0) {
      lastNamesList = originData.nobleTitles;
  }
    
    if (!maleFirstNamesList || !femaleFirstNamesList || !lastNamesList) {
      throw new Error(`Names list not found for origin: ${origin}`);
  }

    const names = [];

     for (let i = 0; i < 10; i++) {
        let firstName;
        if (!gender) {
            // Randomly choose between male and female
            firstName = Math.random() < 0.5 ? getRandomElement(maleFirstNamesList) : getRandomElement(femaleFirstNamesList);
        } else {
            firstName = gender === 'male' ? getRandomElement(maleFirstNamesList) : getRandomElement(femaleFirstNamesList);
        }
        const lastName = getRandomElement(lastNamesList);
        names.push(`${firstName} ${lastName}`);
    }


    return names;
}

module.exports = { generateNames };