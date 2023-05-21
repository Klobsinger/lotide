const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅   Assertion Passed   ${actual}   ===   ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed ${actual}  !==  ${expected}`);
  }
};

const countLetters = function(sentence){
let lettersCounted = {}           //creating a blank object 
  for( const letters of sentence){ // using the for of loop to loop through the string given to the function
    if (lettersCounted[letters]) { //using the same if else statement as the previous assingment to check for truthy
      lettersCounted[letters] += 1; //or falsey if false the letter hasnt appeared yet and is undefined so we make its value 1
    } else {                        // if true it already exists isnt undefined so its value is increased by 1
      lettersCounted[letters] = 1;
  }
  }


return lettersCounted
}


console.log(countLetters("lighthouse in the house"))

//each letter gets returned as a key and its value is the amount of times its shown
//increase the count each time that 
//assign the values of the object based on the letters passed through?