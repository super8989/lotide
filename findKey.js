const findKey = (object, callback) => {
	for (let item in object) {
		if (callback(object[item])) {
			return item;
		}
	}
};

const place = {
	'Blue Hill': { stars: 1 },
	Akaleri: { stars: 3 },
	noma: { stars: 2 },
	elBulli: { stars: 3 },
	Ora: { stars: 2 },
	Akelarre: { stars: 3 },
};

console.log(findKey(place, (x) => x.stars === 2)); // => "noma"

// const test = {
// 	'Blue Hill': { stars: 1 },
// 	Akaleri: { stars: 3 },
// 	noma: { stars: 2 },
// 	elBulli: { stars: 3 },
// 	Ora: { stars: 2 },
// 	Akelarre: { stars: 3 },
// };

// console.log(Object.entries(test));

// Testing
// check if 2 arrays are equal -> returns true/false
//

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

assertEqual(
	findKey(place, (x) => x.stars === 2),
	'noma'
);
