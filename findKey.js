const findKey = function(object,callback) {
  let keys = Object.keys(object); // line (11) creates a array of the keys from the given object and assigns them to keys var
  for (const key of keys) {        //line (12) iterates over each key in the array
    let value = object[key];       //line (13) assigns the current loops key value to a var called value
    if (callback(value)) {        //line (14) if the callback value and my key value match and return true then it returns the current loops key
      return key;
    }
  }
  
  return undefined;                //(line 18) if no match is found after the loop then it automatically returns undefined
};
module.exports = findKey;

/* scan through the object and return the first key that the callback has truthy for if no key is found
return undefined.

//first i have to scan through the object with some form of loop

// then i have to use a if statement to return the key that has a truthy value
//i dont think il need another statement if the first statement is never true i can have it return undefined
//have two return statements one within my loop and one not within the loop if it finds the key then it will return it and finish the function
//if no key is found then i can use return undefined outside of the forloop which should activate after the forloop has tried to find a truthy
*/