/* const reverse = (string) => {
	let splitArray = string.split('');
	let reversedString = '';

	for (let i = splitArray.length - 1; i >= 0; i--) {
		reversedString += splitArray[i];
	}

	return reversedString;
};

reverse('hello');

const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

assertEqual(reverse('hello'), 'olleh');
assertEqual(reverse('1'), '1');
assertEqual(reverse('fish'), 'hsif'); */

const args = process.argv.slice(2);
// console.log(args);

const reverse = (args) => {
	let reversedString = '';

	for (item of args) {
		for (let i = item.length - 1; i >= 0; i--) {
			reversedString += item[i];
		}
		console.log(reversedString);
		reversedString = '';
	}
};

reverse(args);

// console.log(reverse(['hello', 'goodbye']));

/* const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
	// console.log(actual);
	// console.log(expected);
}; */

// reverse(args), ['olleh', 'eybdoog'];

// node reverse.js hello goodbye
// olleh
// eybdoog

// node reverse.js 1 fish 2 fish
// 1
// hsif
// 2
// hsif
