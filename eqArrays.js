// Returns true if 2 arrays are equal
const eqArrays = (arr1, arr2) => {
	if (arr1.length === arr2.length) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr1[i] !== arr2[i]) {
				return false;
			}
		}
		return true;
	}
	return false;
};

module.exports = eqArrays;
