const fs = require('fs');
const path = require('path');

const dataDirectory = __dirname;
const files = fs.readdirSync(dataDirectory);

const namesData = {};

files.forEach(file => {
    if (file !== 'namesData.js' && file.endsWith('.js')) {
        const filePath = path.join(dataDirectory, file);
        const moduleName = path.basename(file, '.js');
        namesData[moduleName] = require(filePath);
    }
});

module.exports = namesData;