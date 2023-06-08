const without = function(source, itemsToRemove) {
  let removedArray = [];
  for (let i = 0; i < source.length; i ++) {
    if (source[i] !== itemsToRemove[i]) {
      removedArray.push(source[i]);
    }
  }
  return console.log(removedArray);
};
module.exports = without;

//push items from source array into my new blank array.
//use a if statement to check if the values match on the itemsToRemove array and if they do dont
//push them.