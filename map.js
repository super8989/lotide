const words = ['ground', 'control', 'to', 'major', 'tom'];

// Map words into a new array using
const map = function (array, callback) {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
};

const results1 = map(words, (word) => word);
// console.log(results1);

//
//
// Return an array of string lengths of a given array
const stringLength = (string) => {
	return string.length;
};

// using a callback function
const map2 = words.map(stringLength);

// same as the function above
// const map2 = words.map((word) => word.length);

// console.log(map2);

//
//
// check if 2 arrays are equal -> returns true/false
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

//accept an argument true or false
const assertArraysEqual = (input) => {
	if (input) {
		console.log(`✅ The two arrays are equal.`);
	} else {
		console.log(`🛑 The arrays are not equal.`);
	}
};

assertArraysEqual(eqArrays(words, results1)); // => true

assertArraysEqual(eqArrays(map2, [6, 7, 2, 5, 3])); // => true
