// return a count of each of the letters in that sentence.
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

module.exports = countLetters;
