const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then(() => {
      res.send('This is the list of our students\n');
    })
    .catch((error) => {
      res.status(500).send(`Internal Server Error: ${error.message}\n`);
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
