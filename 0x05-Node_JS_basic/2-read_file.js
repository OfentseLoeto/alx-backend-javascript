const fs = require('fs').promises;

/**
 * Reads the database file asynchronously and counts the
 * number of students in each field.
 *
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} A Promise that resolves when the counting is done.
 */
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      // Split the data into lines and filter out empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Skip the first line (header)
      const header = lines.shift();

      // Count the number of students in each field
      const counts = {};
      lines.forEach(line => {
        const [firstName, , , field] = line.split(',');
        if (!counts[field]) {
          counts[field] = { count: 0, list: [] };
        }
        counts[field].count += 1;
        counts[field].list.push(firstName.trim());
      });

      // Log the results
      console.log(`Number of students: ${lines.length}`);
      for (const field in counts) {
        const { count, list } = counts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      }
    })
    .catch((error) => {
      // Handle the error if the database is not available
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
