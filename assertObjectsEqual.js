const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1,value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }

  return true;
};




const assertObjectsEqual = function(actual,expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅   Assertion Passed   ${inspect(actual)}   ===   ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed ${inspect(actual)}  !==  ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


const test = {
  color: 'red'
};
const test1 = {
  color: 'red'
};
const test2 = {
  color : 'purple'
};
assertObjectsEqual(test,test2);//fail
assertObjectsEqual(test,test1);//pass