const test = require('./dist');
test.myTest = function () {
  return 2;
};

console.log(test.myTest());