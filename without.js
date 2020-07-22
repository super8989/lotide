/* const without = (source, itemsToRemove) => {
	// create a duplicate source so the original array does not get modified
	let result = source.slice();
	// console.log(result);
	console.log('source1', source);

	for (let i = 0; i < itemsToRemove.length; i++) {
		for (let j = 0; j < source.length; j++) {
			if (itemsToRemove[i] === source[j]) {
				result.splice(j, 1);
				// console.log(i, j, result);
			}
		}
	}
	console.log('source2', source);
	return result;
};
 */

// create an empty array and push the items into it (so splice would not work)
// could use .filter and push

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(['1', '2', '3'], ['1', 2, '3'])); // => ["1", "2"]

// Another way
//find the number itself == itemsToRemove[i] -> this goes in findIndex
//result.findIndex()  -> get index and instead of j put in the index

const without = function (source, itemsToRemove) {
	newArray = source.filter((item) => !itemsToRemove.includes(item));
	return newArray;
};

//test case for checking if the original array was modified
const words = ['hello', 'world', 'lighthouse'];
// console.log('words1', words);
console.log('function', without(words, ['lighthouse']));
// console.log('words2', words);
