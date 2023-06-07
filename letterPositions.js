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





const letterPositions = function(sentence) {
  const results = {};                                   //creating a empty object
  for (let i = 0; i <= sentence.length; i++) {      //using a forloop that loops through the string thats inputed
    const letter = sentence[i];               //creating a var that holds the current character in the loop
    if (results[letter]) {                //using a if statement that checks if the key value exists or not in the object
      results[letter].push(i);            //if it does already exist it pushes the index location to the already existing array
    } else {
      results[letter] = [i];               //if it does not exist it creates a new key value pair with the key being the letter
    }                                    //and the value being a array with the index location
  }
  console.log(results);                         //i used console log to make sure results looked like i wanted it to
  return results;
};

module.exports = letterPositions


assertArraysEqual(letterPositions("LightHouseLabs").a, [11]);