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

const middle = function(array) {
  let middleArray = [];     //create a new array to hold the middle
  if (array.length <= 2) {  // returns blank for all arrays that are 2 length and under
    return middleArray;
  }
  if (array.length % 2 !== 0) {                   //for odd numbers math.floor divides the length by 2 and rounds down
    middleArray.push(array[Math.floor(array.length / 2)]);// giving the right index location for the half way
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[Math.floor(array.length / 2 - 1)]); // for even numbers i dont think math.floor is needed for rounding
    middleArray.push(array[Math.floor(array.length / 2)]);//but i reused it to grab both the index in the middle and the one before it
  }
  return middleArray;

};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
let testUnder3 = middle([1]);
let testEven = middle([1,2,3]);
let testOdd = middle([1,2,3,4]);
let Under3 = [];
let Even = [2];
let Odd = [2,3];
assertArraysEqual(testUnder3,Under3);
assertArraysEqual(testEven,Even);
assertArraysEqual(testOdd,Odd);