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

const assertArraysEqual = (input) => {
	if (input) {
		console.log(`The two arrays are equal.`);
	} else {
		console.log(`The arrays are not equal.`);
	}
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false
