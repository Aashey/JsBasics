const score = 400
// console.log(score);

const score2 = new Number(150);
// console.log(score2.toFixed(2));// for precision value

const otherNumber = 1245.890
// console.log(otherNumber.toPrecision(4));//1246

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000


//  MATHS-----------------------------------------------------
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3));//4
// console.log(Math.ceil(4.2));//5
// console.log(Math.floor(4.9));//4
// console.log(Math.sqrt(49));//7 square root
// console.log(Math.min(4,3,6,8));//3 mi value
// console.log(Math.max(4,3,6,8));//8 max value
// console.log((Math.random()*10) + 1); //1-10
// console.log(Math.floor((Math.random()*10) + 1)); //single digit
const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max - min +1)) + min);
