const bestTVShowsByGenre = {
	sci_fi: 'The Expanse',
	comedy: 'Brooklyn Nine-Nine',
	drama: 'The Wire',
};

const findKeyByValue = (tvShows, showTitle) => {
	for (let genre in tvShows) {
		if (tvShows[genre] === showTitle) {
			console.log(genre);
			return genre;
		}
	}
};

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
	if (actual === expected) {
		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
	}
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
