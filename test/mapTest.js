const index = require('../index')
const words = ["Ghitsa", "Leo", "Robin", "Baghoul", "Goblin"];
const results1 = index.map(words, word => word[0]);
console.log(results1);

index.assertArraysEqual(results1, ['G', 'L', 'R', 'B', 'G']);
index.assertArraysEqual(words, ["Ghitsa", "Leo", "Robin", "Baghoul", "Goblin"]);