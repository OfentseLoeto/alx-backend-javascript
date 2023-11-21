/**
 * Writing to the stdin
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout
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
        ProcessingInstruction.exit(0);
    });