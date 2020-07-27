const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//Test code
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]
