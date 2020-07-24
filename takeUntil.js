const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// const result = function (array) {
// 	let output = [];

// 	for (let data of array) {
// 		console.log(data);

// 		if (data < 0) {
// 			break;
// 		}
// 		output.push(data);
// 	}
// 	return output;
// };

// console.log(result(data1));

// Takes an array and a callback function to loop through an array and returns output when callback function is truthy
const takeUntil = (array, callback) => {
	// console.log(array, callback(array));
	let output = [];

	for (let item of array) {
		if (callback(item)) {
			return output;
		}
		output.push(item);
	}
};

const results1 = takeUntil(data1, (x) => x < 0);
// const results1 = takeUntil(data1, function (x) {
// 	return x < 0;
// });

console.log('results1', results1);

console.log('---');

//
//
//2.
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
console.log(results2);

// Testing
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

// [1, 2, 5, 7, 2];
// ---["I've", 'been', 'to', 'Hollywood'];

assertArraysEqual(eqArrays(results1, [1, 2, 5, 7, 2])); // => true
assertArraysEqual(eqArrays(results2, ["I've", 'been', 'to', 'Hollywood'])); // => true
