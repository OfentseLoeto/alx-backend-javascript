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
	console.log(`Your name is: ${input}`);
	console.log('This important software is now closing');
	rl.close();
});
