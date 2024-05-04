const fs = require('fs');

function countStudents(path) {
  try {
    // Reading the database asyncronously
    const data = fs.readFileSync(path, 'utf-8').toString().split('\n');

    // Remove empty lines
    const students = data.filter(line => line.trim() !== '');

    // Count students
    console.log(`Number of students: ${students.length}`);

    // Count students in each fields
    const fields = {};
    for (const student of students) {
      const field = student.split(',')[3];
      if (fields[field]) {
        fields[field].push(student.split(',')[0]);

      } else {
          fields[field] = [student.split(',')[0]];
      }
    }
    // Log number of students in each field
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (err) {
      // If the database is not available, throw an error.
      console.error("Cannot load the database");
  }
}

module.exports = countStudents;
