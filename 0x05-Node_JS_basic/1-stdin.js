process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Reading user input from stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  // Displaying the user's name
  process.stdout.write(`Your name is: ${name}\n`);

  // Closing the program
  process.stdout.write('This important software is now closing\n');

  // Exiting the process
  process.exit(0);
});

// Handling the case when the user ends the program
process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
