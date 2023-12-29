const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');

    const fields = lines[0].split(',').map(field => field.trim());

    const students = lines.slice(1).map(line => line.split(','));

    console.log(`Number of students: ${students.length}`);

    const fieldNames = {
      firstname: 'CS',
      lastname: 'SWE',
      age: 'CS',
      field: 'SWE',
    };

    Object.keys(fieldNames).forEach(fieldName => {
      const actualFieldName = fieldNames[fieldName];
      const index = fields.indexOf(actualFieldName);

      if (index !== -1) {
        const studentsInField = students.filter(student => student[index].trim() !== '').length;
        const studentNames = students
          .filter(student => student[index].trim() !== '')
          .map(student => student[index].trim())
          .join(', ');

        console.log(`Number of students in ${fieldName}: ${studentsInField}. List: ${studentNames}`);
      }
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
