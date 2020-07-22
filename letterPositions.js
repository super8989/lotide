// const letterPositions = function (sentence) {
// 	const results = {};
// 	// logic to update results here

// 	for (let i = 0; i < sentence.length; i++) {
// 		if (results[sentence[i]] && sentence[i] !== ' ') {
// 			results[sentence[i]].push(i);
// 		} else if (sentence[i] !== ' ') {
// 			results[sentence[i]] = [i];
// 		}
// 	}
// 	console.log(results);
// 	return results;
// };

const letterPositions = function (sentence) {
	const results = {};
	// logic to update results here

	for (let i = 0; i < sentence.length; i++) {
		if (sentence[i] === ' ') {
			continue; // continue on to next iteration
		}
		if (results[sentence[i]]) {
			results[sentence[i]].push(i);
		} else {
			results[sentence[i]] = [i];
		}
	}
	console.log(results);
	return results;
};

letterPositions('lighthouse in the house');
// const output = letterPositions(input);

// const eqArrays = (arr1, arr2) => {
// 	// console.log(arr1, arr2);

// 	if (arr1.length === arr2.length) {
// 		for (let i = 0; i < arr1.length; i++) {
// 			if (arr1[i] !== arr2[i]) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// 	return false;
// };

// // FUNCTION IMPLEMENTATION
// const assertEqual = function (result) {
// 	if (result) {
// 		console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
// 	} else {
// 		console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
// 	}
// };

// assertEqual(eqArrays([0], [0]));
