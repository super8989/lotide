// keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = (array, callback) => {
	let output = [];

	for (let item of array) {
		if (callback(item)) {
			return output;
		}
		output.push(item);
	}
};

module.exports = takeUntil;
