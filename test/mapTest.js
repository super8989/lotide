const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
	const words = ['ground', 'control', 'to', 'major', 'tom'];
	const results1 = map(words, (word) => word);
	const stringLength = (string) => {
		return string.length;
	};
	const map2 = words.map(stringLength);

	it(`returns true for words and results1`, () => {
		assert.deepEqual(words, results1);
	});

	it(`returns true for map2 and [6, 7, 2, 5, 3]`, () => {
		assert.deepEqual(map2, [6, 7, 2, 5, 3]);
	});
});
