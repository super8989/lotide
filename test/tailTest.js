const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!: 3 === 3

// Test Case 1: Check the returned array elements
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); // 2 === 2
assertEqual(result[0], 'Lighthouse'); // 'Lighthouse' === 'Lighthouse'
assertEqual(result[1], 'Labs'); // 'Labs' === 'Labs'
