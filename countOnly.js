// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// take in a collection of items and return counts for a specific subset of those items
const countOnly = function (allItems, itemsToCount) {
	const results = {};

	for (const item of allItems) {
		if (itemsToCount[item]) {
			if (results[item]) {
				results[item]++;
			} else {
				results[item] = 1;
			}
		}
	}
	console.log(results);
	return results;
};

module.exports = countOnly;
