// // Returns true if both objects have identical keys with identical values.
// // Otherwise you get back a big fat false!

const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
	let key1 = Object.keys(object1);
	let key2 = Object.keys(object2);

	// console.log('key1:', key1);
	// console.log('key2', key2);

	if (key1.length !== key2.length) {
		return false;
	}

	for (let key of key1) {
		// console.log('key', key);
		if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
			// console.log(key, object1[key], object2[key]);
			if (!eqArrays(object1[key], object2[key])) {
				return false;
			}
		} else if (object1[key] !== object2[key]) {
			return false;
		}
	}
	return true;
};

module.exports = eqObjects;
