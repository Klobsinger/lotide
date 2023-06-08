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