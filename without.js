// return a subset of a given array, removing unwanted elements
const without = function (source, itemsToRemove) {
	newArray = source.filter((item) => !itemsToRemove.includes(item));
	return newArray;
};

module.exports = without;
