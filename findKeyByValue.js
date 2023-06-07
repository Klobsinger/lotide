const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion Passed   ${actual}   ===   ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed ${actual}  !==  ${expected}`);
  }
};






const findKeyByValue = function(object,value) {
  let genres = Object.keys(object);  //creating a array that stores all the keys in the object given to the function
  for (const genre of genres) { //loop through the array checking if the key matches the value given to the function
    if (object[genre] === value) { //checks to see if the value of the key matches the value inputed into the function
      return genre; //if it does match it returns the key
    }
  }
  return undefined; // if it doesnt match then the key and value does not exist within the object and undefined is returned
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
module.exports = findKeyByValue;

console.log((findKeyByValue(bestTVShowsByGenre, "The Wire")));

assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

