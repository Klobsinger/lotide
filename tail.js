const tail = function(array) {
  let newarray = [];
  for (let i = 1; i < array.length; i++) {
    newarray.push(array[i]);
  }
  return newarray;
};
module.exports = tail;