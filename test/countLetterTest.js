const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('#countLetter', () => {
	const input = 'LHL';
	const resultObj = countLetters(input);

	it('returns 2 for ["L"]', () => {
		assert.strictEqual(resultObj['L'], 2);
	});

	it('returns 1 for ["H"]', () => {
		assert.strictEqual(resultObj['H'], 1);
	});
});
