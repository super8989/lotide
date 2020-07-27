const eqObjects = require('./eqObjects');

// take in two objects and console.log an appropriate message to the console.
const assertObjectsEqual = function (actual, expected) {
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

module.exports = assertObjectsEqual;
