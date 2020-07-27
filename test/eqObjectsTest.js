const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
	const ab = { a: '1', b: '2' };
	const ba = { b: '2', a: '1' };
	const cd = { c: '1', d: ['2', 3] };
	const dc = { d: ['2', 3], c: '1' };
	const cd2 = { c: '1', d: ['2', 3, 4] };

	it('returns true for (ab, ba)', () => {
		assert.isTrue(eqObjects(ab, ba));
	});

	it('returns true for (dc, cd)', () => {
		assert.isTrue(eqObjects(dc, cd));
	});

	it('returns false for (cd, cd2)', () => {
		assert.isFalse(eqObjects(cd, cd2));
	});
});
