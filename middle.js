const middle = (array) => {
	let arrLength = array.length;

	if (arrLength <= 2) {
		return [];
	}

	// odd elements
	if (arrLength % 2 === 1) {
		let index = Math.floor(arrLength / 2);
		// console.log('index', index);
		// console.log(array);
		return array.slice(index, index + 1);
	}

	// even elements
	if (arrLength % 2 === 0) {
		let index = Math.floor(arrLength / 2);
		// console.log('index', index);
		// console.log(array);
		return array.slice(index - 1, index + 1);
	}
};

// console.log(middle([1])); // => []
// middle([1, 2]); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;
