const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('should stub Utils.calculateNumber and log the correct message', function () {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Assert that Utils.calculateNumber was called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Assert that the console.log message was printed
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

    // Restore the spy and the stub to avoid side effects in other tests
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
