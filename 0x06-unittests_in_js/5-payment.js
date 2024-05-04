const Utils = require('./utils');

function sendPaymentsToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${sum}`);
}

module.exports = sendPaymentsToApi;
