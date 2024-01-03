const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
	it('should round and sum two numbers', function () {
		assert.strictEqual(calculateNumber(1, 3), 4);
		assert.strictEqual(calculateNumber(1, 3.7), 5);
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});

	it('should handle rounding for the second number', () => {
		// Add test cases for rounding the second number
		assert.strictEqual(calculateNumber(3.2, 1.5), 5);
		assert.strictEqual(calculateNumber(2.8, 1.1), 4);
	});
});
