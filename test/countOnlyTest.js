const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
	const firstNames = [
		'Karl',
		'Salima',
		'Agouhanna',
		'Fang',
		'Kavith',
		'Jason',
		'Salima',
		'Fang',
		'Joe',
	];

	const result1 = countOnly(firstNames, {
		Jason: true,
		Karima: true,
		Fang: true,
	});

	it('returns 1 for ["Jason"]', () => {
		assert.strictEqual(result1['Jason'], 1);
	});

	it('returns undefined for ["Karima"]', () => {
		assert.strictEqual(result1['Karima'], undefined);
	});

	it('returns 2 for ["Fang"]', () => {
		assert.strictEqual(result1['Fang'], 2);
	});
});

// assertEqual(result1['Jason'], 1); // 1 === 1
// assertEqual(result1['Karima'], undefined); // undefined === undefined
// assertEqual(result1['Fang'], 2); // 2 === 2
