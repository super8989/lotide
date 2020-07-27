// return the middle-most element(s) of the given array
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

module.exports = middle;
