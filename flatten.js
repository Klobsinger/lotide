const flatten = function(array) {
  const flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const nestedFlattenedArray = flatten(array[i]);
      flattenedArray = flattenedArray.concat(nestedFlattenedArray);
    } else {
      flattenedArray.push(array[i]);
    }
  }

  return flattenedArray;
};

module.exports = flatten;