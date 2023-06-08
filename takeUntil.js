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
module.exports = takeUntil;