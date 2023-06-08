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