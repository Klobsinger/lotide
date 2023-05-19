const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion Passed   ${actual}   ===   ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed ${actual}  !==  ${expected}`);
  }
};


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




assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]),false); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



// use a forloop to go through just the length of array1 this should check if they are the same
// this may have problems if they are different lengths so check for that using .length and fail
//right away if they arent the same length
//compare each spot between the two using a forloop to check each part of the array
//if something is wrong return false if nothing is wrong always return true

