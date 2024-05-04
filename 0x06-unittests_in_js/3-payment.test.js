const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentsToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentsToApi', function() {
  it('should call Utils.calculateNumber with the type SUM, totalAmount, totalShipping', function() {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentsToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
