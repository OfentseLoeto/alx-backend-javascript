/**
 * Print the given message to STDOUT
 *
 * @param {string} message - Message to be displayed.
 */

function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
