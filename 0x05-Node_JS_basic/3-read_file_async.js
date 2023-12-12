const fs = require('fs');

/**
 * Reads the database file asynchronously and counts the number of students in each field.
 *
 * @param {string} path - The path to the database file.
 * @returns {Promise<void>} - A Promise that resolves when the counting is done.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the database file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Handle the error if the database is not available
        reject(new Error('Cannot load the database'));
        return;
      }

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

      // Resolve the Promise
      resolve();
    });
  });
}

module.exports = countStudents;
