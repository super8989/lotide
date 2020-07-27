const flatten = (array) => {
	let flatArray = [];

	for (let item of array) {
		if (Array.isArray(item)) {
			for (let i of item) {
				flatArray.push(i);
			}
		} else {
			flatArray.push(item);
		}
	}
	return flatArray;
};

// const flatten = (array) => {
// 	//for loop and push result of flatten to an new array
// 	array.forEach((item) => {
// 		if (Array.isArray(item)) {
// 			flatten(item);
// 		} else {
// 			return item;
// 		}
// 	});
// };

// Review this for recursion!
// const flatten = function (array) {
// 	let flatArray = [];
// 	for (const element of array) {
// 		if (Array.isArray(element)) {
// 			flatArray = flatArray.concat(flatten(element));
// 		} else {
// 			flatArray.push(element);
// 		}
// 	}
// 	return flatArray;
// };

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
