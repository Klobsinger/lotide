const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle')
let testUnder3 = middle([1]);
let testEven = middle([1,2,3]);
let testOdd = middle([1,2,3,4]);
let Under3 = [];
let Even = [2];
let Odd = [2,3];
assertArraysEqual(testUnder3,Under3);
assertArraysEqual(testEven,Even);
assertArraysEqual(testOdd,Odd);