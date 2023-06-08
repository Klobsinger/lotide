const findKeyByValue = function(object,value) {
  let genres = Object.keys(object);  //creating a array that stores all the keys in the object given to the function
  for (const genre of genres) { //loop through the array checking if the key matches the value given to the function
    if (object[genre] === value) { //checks to see if the value of the key matches the value inputed into the function
      return genre; //if it does match it returns the key
    }
  }
  return undefined; // if it doesnt match then the key and value does not exist within the object and undefined is returned
};
module.exports = findKeyByValue;