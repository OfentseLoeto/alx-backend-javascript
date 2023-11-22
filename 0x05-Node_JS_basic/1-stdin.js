/**
 * Writing to the stdin
 */

const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Display the initial message
console.log('Welcome to Hoberton School, What is your name?');

// Listen to the user input
rl.on('line', (input) => {
	// Display the user's name
	console.log(`What is your name: ${input}`);
});

// Listen for the close event
rl.on('close', () => {
  // Display the closing message
  console.log('This important software is now closing');
  // Exit the process
  process.exit();
});

// Handle the case where the user ends the program with Ctrl+C
process.on('SIGINT', () => {
  // Close the readline interface
  rl.close();
  // Exit the process
  process.exit();
});
