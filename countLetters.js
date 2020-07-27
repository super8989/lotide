const input = 'lighthouse in the house';

const countLetters = (string) => {
	let result = {};
	let joinString = string.split(' ').join('');

	for (letter of joinString) {
		if (result[letter]) {
			result[letter]++;
		} else {
			result[letter] = 1;
		}
	}
	console.log(result);
	return result;
};

const resultObj = countLetters(input);

const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

assertEqual(resultObj['L'], 2);
assertEqual(resultObj['H'], 1);
