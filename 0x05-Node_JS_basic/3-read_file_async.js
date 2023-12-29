const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = fileContent.split('\n').filter(line => line.trim() !== '');

      const fields = lines[0].split(',').map(field => field.trim());
      const students = lines.slice(1).map(line => line.split(','));

      console.log(`Number of students: ${students.length}`);

      fields.forEach((field, index) => {
        const studentsInField = students.filter(student => student[index].trim() !== '').length;
        const studentNames = students
          .filter(student => student[index].trim() !== '')
          .map(student => student[index].trim())
          .join(', ');

        console.log(`Number of students in ${field}: ${studentsInField}. List: ${studentNames}`);
      });

      resolve(); // Resolve the promise when done
    });
  });
}

module.exports = countStudents;
