const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with type SUM, totalAmount, and totalShipping', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
