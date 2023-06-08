const test = (flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
const test1 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(test,test1);