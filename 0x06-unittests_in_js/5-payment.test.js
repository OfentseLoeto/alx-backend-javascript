const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  // Set up a spy using beforeEach
  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  // Clean up the spy using afterEach
  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', function () {
    sendPaymentRequestToApi(100, 20);

    // Assert that the console.log message was printed
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', function () {
    sendPaymentRequestToApi(10, 10);

    // Assert that the console.log message was printed
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});
