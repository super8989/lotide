const eqArrays = (arr1, arr2) => {
	// console.log(arr1, arr2);

	if (arr1.length === arr2.length) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			}
		}
		return true;
	}
	return false;
};

const eqObjects = function (object1, object2) {
	let key1 = Object.keys(object1);
	let key2 = Object.keys(object2);

	// console.log('key1:', key1);
	// console.log('key2', key2);

	if (key1.length !== key2.length) {
		return false;
	}

	for (let key of key1) {
		// console.log('key', key);
		if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
			// console.log(key, object1[key], object2[key]);
			if (!eqArrays(object1[key], object2[key])) {
				return false;
			}
		} else if (object1[key] !== object2[key]) {
			return false;
		}
	}
	return true;
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
// console.log(eqObjects(ab, ba)); // => true

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
// console.log(eqObjects(dc, cd)); // => true

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
	// console.log('actual', actual);
	const inspect = require('util').inspect;
	// console.log(`Example label: ${inspect(actual)}`);

	if (eqObjects(actual, expected)) {
		console.log(
			`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
		);
	} else {
		console.log(
			`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
		);
	}
};

assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
