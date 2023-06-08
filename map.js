const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1,array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅   Assertion Passed   ${array1}   ===   ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed ${array1}  !==  ${array2}`);
  }
};

const words = ["Ghitsa", "Leo", "Robin", "Baghoul", "Goblin"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['G', 'L', 'R', 'B', 'G']);
assertArraysEqual(words, ["Ghitsa", "Leo", "Robin", "Baghoul", "Goblin"]);
