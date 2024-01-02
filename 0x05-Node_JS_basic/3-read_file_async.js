const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines
      const lines = data.split('\n');

      // Filter out empty lines
      const nonEmptyLines = lines.filter((line) => line.trim() !== '');

      // Calculate the total number of students
      const numberOfStudents = nonEmptyLines.length - 1; // Exclude the header line

      console.log(`Number of students: ${numberOfStudents}`);

      // Create an object to store the counts for each field
      const fieldCounts = {};

      // Iterate over the lines (excluding the header line)
      for (let i = 1; i < nonEmptyLines.length; i++) {
        const fields = nonEmptyLines[i].split(',');

        // Update the count for each field
        const field = fields[3]; // Assuming the field is in the fourth column (0-indexed)
        fieldCounts[field] = (fieldCounts[field] || 0) + 1;
      }

      // Log the counts for each field
      const fieldEntries = Object.entries(fieldCounts);
      for (let i = 0; i < fieldEntries.length; i++) {
        const [field, count] = fieldEntries[i];
        const list = nonEmptyLines.slice(1) // Exclude the header line
          .filter((line) => line.split(',')[3] === field) // Filter lines for the specific field
          .map((line) => line.split(',')[0]); // Extract first names

        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
