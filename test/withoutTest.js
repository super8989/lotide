const assert = require('chai').assert;
const without = require('../without');

// return a subset of a given array, removing unwanted elements
describe('#without', () => {
	const words = ['hello', 'world', 'lighthouse'];

	it(`should return ['hello', 'world']`, () => {
		assert.deepEqual(without(words, ['lighthouse']), ['hello', 'world']);
	});
});
