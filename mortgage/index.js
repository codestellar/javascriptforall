const pmt = require('./pmt');

const interestRate = (Math.pow((1+4/100),1/12)-1)
console.log(interestRate);

console.log(pmt(interestRate,(30*12),300000));