const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expected = [ 1, 2, 5, 7, 2 ];
assertArraysEqual(results1,expected);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];
assertArraysEqual(results2, expected2);