const assertArraysEqual = require('../assertArraysEqual')
const test1 = [1,2,3,4];
const test2 = [1,2,3,4];
const test3 = [1,2,3];
assertArraysEqual(test1,test2);
assertArraysEqual(test1,test3);