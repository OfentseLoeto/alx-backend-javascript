const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');
const { expect } = chai;

describe('calculateNumber', function () {
  it('should perform SUM operation and round numbers', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should perform SUBTRACT operation and round numbers', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should perform DIVIDE operation and round numbers', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for DIVIDE when roundedB is 0', function () {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('should throw an error for an invalid operation type', function () {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(/Invalid operation type/);
  });
});
