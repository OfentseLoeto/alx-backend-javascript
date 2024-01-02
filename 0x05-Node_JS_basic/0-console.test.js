const displayMessage = require('./0-console');
const { expect } = require('chai');
const { captureConsole } = require('chai/lib/log');

describe('displayMessage function', () => {
  it('should print the correct message to STDOUT', () => {
    const { restoreConsole, getCaptured } = captureConsole();

    // Call the function to be tested
    displayMessage("Hello NodeJS!");

    // Restore the original console.log
    restoreConsole();

    // Get the captured output
    const capturedOutput = getCaptured().stdout;

    // Assert that the captured output is as expected
    expect(capturedOutput).to.equal('Hello NodeJS!');
  });
});
