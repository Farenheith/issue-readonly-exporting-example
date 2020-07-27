const test = require("./dist");
test.myTest2 = function () {
  return 2;
};

console.log(test.myTest2());
