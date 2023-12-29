const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
  if (input) {
    console.log(`Your name is: ${input}`);
  } else {
    console.log('This important software is now closing');
    rl.close();
  }
});

// Handle the case when the user ends the program without entering any name
rl.on('close', () => {
  console.log('This important software is now closing');
});
