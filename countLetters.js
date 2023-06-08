const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion Passed   ${actual}   ===   ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed ${actual}  !==  ${expected}`);
  }
};

const countLetters = function(sentence) {
  let lettersCounted = {};          //creating a blank object
  for (const letters of sentence) { // using the for of loop to loop through the string given to the function
    if (letters === ' ') {         // I found the continue statement online and used a if statement to find spaces
      continue;                    //and to skip to the next loop right away if it finds a space so they arent counted
    }
    if (lettersCounted[letters]) { //using the same if else statement as the previous assingment to check for truthy
      lettersCounted[letters] += 1; //or falsey if false the letter hasnt appeared yet and is undefined so we make its value 1
    } else {                        // if true it already exists, isnt undefined so its value is increased by 1
      lettersCounted[letters] = 1;
    }
  }

  return lettersCounted;
};
module.exports = countLetters;
const result = countLetters("lighthouse in the house");
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
assertEqual(JSON.stringify(result), JSON.stringify(expected));    // I was not sure how to do the previous test from countOnly.js
//online i found the json.stringify method which converts objects to strings
//and then compares the values? i believe this works for testing