const index = require('../index')
const result = index.countLetters("lighthouse in the house");
const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};
index.assertEqual(JSON.stringify(result), JSON.stringify(expected));    // I was not sure how to do the previous test from countOnly.js
//online i found the json.stringify method which converts objects to strings
//and then compares the values? i believe this works for testing