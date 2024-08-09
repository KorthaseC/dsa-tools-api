const bookData = require("../data/bookData/bookData");

function getRandomBookType() {
  const bookTypes = Object.values(bookData.bookType);
  const randomValue = Math.random();
  //profane has 60% chance
  return randomValue < 0.6 ? bookTypes[2] : randomValue < 0.8 ? bookTypes[1] : bookTypes[0];
}

function getRandomElement(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Expected a non-empty array");
  }
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateBooks(bookType, hasFeature, bookCounter) {
  if (!bookData) {
    return console.error("no bookData");
  }

  const books = [];

  bookCounter = bookCounter > 50 ? 50 : bookCounter;

  for (let i = 0; i < bookCounter; i++) {
    //set book name
    let partOne = getRandomElement(bookData.namePartOne);
    let partTwo = getRandomElement(bookData.namePartTwo);
    let partThree = getRandomElement(bookData.namePartThree);

    let feature = "";

    //set random book type
    setBookType = !bookType ? getRandomBookType() : bookType;

    if (!hasFeature) {
      const magicBookFeathance = 0.25;
      const defaultBookFeatChance = 0.1;
      hasFeature = Math.random() < (setBookType === bookData.bookType.magic ? magicBookFeathance : defaultBookFeatChance);
    }

    if (hasFeature) {
      feature = Math.random() < 0.5 ? getRandomElement(bookData.profaneFeature) : getRandomElement(bookData.magicFeature);
    }

    books.push({ bookType: setBookType, namePartOne: partOne, namePartTwo: partTwo, namePartThree: partThree, feature: feature });
  }

  return books;
}

module.exports = { generateBooks };
