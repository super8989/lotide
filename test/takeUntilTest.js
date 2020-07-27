const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

// keep collecting items from a provided array until the callback provided returns a truthy value.
describe('#takeUntil', () => {
	const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
	const results1 = takeUntil(data1, (x) => x < 0);

	const data2 = [
		"I've",
		'been',
		'to',
		'Hollywood',
		',',
		"I've",
		'been',
		'to',
		'Redwood',
	];
	const results2 = takeUntil(data2, (x) => x === ',');

	it('returns true for [1, 2, 5, 7, 2, -1, 2, 4, 5] and [1, 2, 5, 7, 2]', () => {
		assert.deepEqual(results1, [1, 2, 5, 7, 2]);
	});

	it(`returns true for data2 and ["I've", 'been', 'to', 'Hollywood']`, () => {
		assert.deepEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
	});
});
