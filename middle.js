const assertArraysEqual = require('./assertArraysEqual');
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
module.exports = middle;