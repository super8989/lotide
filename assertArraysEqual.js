// accept an argument and prints whether true or false
const assertArraysEqual = (input) => {
	if (input) {
		console.log(`✅ The two arrays are equal.`);
	} else {
		console.log(`🛑 The arrays are not equal.`);
	}
};

module.exports = assertArraysEqual;
