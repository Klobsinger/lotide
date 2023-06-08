const index = require('../index')
const test1 = [1,2,3,4];
const test2 = [1,2,3,4];
const test3 = [1,2,3];
index.assertArraysEqual(test1,test2);
index.assertArraysEqual(test1,test3);
