const index = require('../index')
index.without([1, 2, 3], [1]); // => [2, 3]
index.without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
index.without(['test','test1'],['test']);
const words = ["hello", "world", "lighthouse"];
index.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
index.assertArraysEqual(words, ["hello", "world", "lighthouse"]);