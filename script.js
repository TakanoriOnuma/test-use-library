const mylib = require('mylib');
const url = mylib.testJoin('a', 'b');
console.log(url);

console.log(mylib.fillArray(10, 5));

const { times } = require('lodash');
console.log(times(5));
