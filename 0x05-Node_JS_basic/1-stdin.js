/**
 * Writing to the stdin
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log('This important software is now closing');
        rl.close();
    } else {
        console.log(`Your name is: ${input}`);
        console.log('Welcome to Holberton School, what is your name?');
    }
    });

    rl.on('close', () => {
	    console.log('This important software is now closing');
        process.exit(0);
    });

if (!process.stdin.isTTY) {
	process.stdin.on('end', () => {
		console.log('This important software is now closing');
		rl.close();
		process.exit(0);
	});
}
