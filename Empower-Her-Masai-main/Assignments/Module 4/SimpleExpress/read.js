const fs = require('fs');

const readFileContent = (filePath) => {
    try {
        // readFileSync returns a Buffer, so we use 'utf-8' to get a string
        return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
        return "Error: Could not read file. Ensure Data.txt exists.";
    }
};

module.exports = { readFileContent };