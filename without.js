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

const without = function(source, itemsToRemove) {
  let removedArray = [];
  for (let i = 0; i < source.length; i ++) {
    if (source[i] !== itemsToRemove[i]) {
      removedArray.push(source[i]);
    }
  }
  return console.log(removedArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(['test','test1'],['test']);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without


//push items from source array into my new blank array.
//use a if statement to check if the values match on the itemsToRemove array and if they do dont
//push them.