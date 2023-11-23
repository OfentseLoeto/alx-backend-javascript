const fs = require('fs');

/**
 * Reads the database file and counts the
 * number of students in each field.
 *
 * @param {string} path - The path to the database file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');

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
  } catch (error) {
    // Handle the error if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
