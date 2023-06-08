const index = require('../index')
const test = {
  color: 'red'
};
const test1 = {
  color: 'red'
};
const test2 = {
  color : 'purple'
};
index.assertObjectsEqual(test,test2);//fail
index.assertObjectsEqual(test,test1);//pass