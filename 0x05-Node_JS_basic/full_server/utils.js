const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    // Process the data as needed
    return processData(data);
  } catch (error) {
    throw new Error(`Cannot load the database: ${error.message}`);
  }
};
module.exports = { readDatabase };
