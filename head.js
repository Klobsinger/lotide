const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion Passed   ${actual}   ===   ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed ${actual}  !==  ${expected}`);
  }
};

const head = function(array) {
  return array[0];

};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");




//create a function that returns the first item in a array that you give it


