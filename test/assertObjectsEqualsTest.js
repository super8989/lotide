const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
// console.log(eqObjects(ab, ba)); // => true

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
// console.log(eqObjects(dc, cd)); // => true

assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
