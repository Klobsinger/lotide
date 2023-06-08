const index = require('../index')

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log((index.findKeyByValue(bestTVShowsByGenre, "The Wire")));

index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
index.assertEqual(index.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);