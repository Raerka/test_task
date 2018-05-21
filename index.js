const compareVersion = require('./modules/comparator');

//For testing
console.log(compareVersion('1', '2'));
console.log(compareVersion('1', '1.0'));
console.log(compareVersion('1.0', '1.0.0'));
console.log(compareVersion('2.1', '2.0'));

console.log(compareVersion('2.1', 'df2.0'));
console.log(compareVersion('2.sd', '2.0'));
