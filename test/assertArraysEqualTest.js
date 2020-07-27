const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1])); // => false
