const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

// return all the indices in the string where each character is found.
describe('#letterPositions', () => {
	it(`returns true for ('hello').e, [1]`, () => {
		assert.deepEqual(letterPositions('hello').e, [1]);
	});

	it(`returns true for ('lighthouse in the house').l, [0]`, () => {
		assert.deepEqual(letterPositions('lighthouse in the house').l, [0]);
	});
});
