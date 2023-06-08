const words = ["Ghitsa", "Leo", "Robin", "Baghoul", "Goblin"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['G', 'L', 'R', 'B', 'G']);
assertArraysEqual(words, ["Ghitsa", "Leo", "Robin", "Baghoul", "Goblin"]);