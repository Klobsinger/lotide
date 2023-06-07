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


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // I grab the keys from object 1 / 2 and store them in two arrays
  const keys2 = Object.keys(object2); 
  if (keys1.length !== keys2.length) { //I then first check if the lengths of these two arrays are not the same
    return false;   //if they arent the same length then I return false since the objects must be different
  }
  for (const key of keys1) { // if the length is the same it continues by looping through key 1
    const value1 = object1[key]; //then it assings the values of the keys in both object 1 and 2
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) { //then it checks to see if these assigned values are arrays
      if (!eqArrays(value1,value2)) { //Then it calls eqArrays function 
        return false;  //and if that returns false this function returns false aswell
      }
    } else {
      if (value1 !== value2) { //if the values are not arrays then it does a normal check which doesnt work with arrays
        return false; //to see if they are equal
      }
    }
  }

  return true; // if somehow the loop can complete without stopping at all the spike traps then it returns true
};
module.exports = eqObjects









const multiColorShirtObject = { colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject = { size: "medium",
  colors: ["red", "blue"]
};

assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);



const longSleeveMultiColorShirtObject = { size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};

assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);
