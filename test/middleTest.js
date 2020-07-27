const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
	it(`returns [3, 4] from [1, 2, 3, 4, 5, 6]`, () => {
		assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
	});

	it(`returns [] from [1, 2]`, () => {
		assert.deepEqual(middle([1, 2]), []);
	});

	it(`returns [2] from [1, 2, 3]`, () => {
		assert.deepEqual(middle([1, 2, 3]), [2]);
	});

	it(`returns [3] from [1, 2, 3, 4, 5]`, () => {
		assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
	});
});
