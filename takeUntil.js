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

const takeUntil = function(array, callback) {
  const result = [];                       // line (27) since I wasnt using a function that makes a new array for me i created a empty array
  for (let i = 0; i < array.length; i++) {    // line (28) I was going to use a different method like .filter or another method of looping
    if (callback(array[i])) {              // line (28) but i knew that i wanted to stop the loop when i got a truthy value and the break
      break;                               // line (28) method is the only way i know how to do that.
    }                                     // line (29) using a if statement im checking if the info provided from callback is true if it is the loop stops
    result.push(array[i]);                 // line (32) if the callback returns falsey then it proceeds to push the values from array to my new array results
  }                                       // line (34) I then return the array i created which has the pushed values.
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expected = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1,expected);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expected2);
module.exports = takeUntil;


