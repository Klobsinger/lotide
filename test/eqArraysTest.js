const index = require('../index')
index.assertEqual(index.eqArrays([1, 2, 3], [1, 2, 3, 4]),false); // => true
index.assertEqual(index.eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
index.assertEqual(index.eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
index.assertEqual(index.eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
index.assertEqual(index.eqArrays([1, 2, 3], [1, 2, 3]), true);