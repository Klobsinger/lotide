const index = require('../index')
const test = (index.flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
const test1 = [1, 2, 3, 4, 5, 6];
index.assertArraysEqual(test,test1);