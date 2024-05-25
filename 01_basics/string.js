const name = "james"
//or string can also be assigned in another way
const surname = new String('Bond')
// console.log(surname); // returns object with its type and value
// //useful cause it provides a lots of methods for string manipulation
// console.log(surname[0]); //B
// console.log(surname[1]); //o
// console.log(surname[2]); //n
// console.log(surname[3]); //d
// console.log(surname.length); //4
// console.log(surname.toUpperCase()); // BOND
// console.log(surname.charAt(2)); // n
// console.log(surname.indexOf('d')); // 3

const paragraph = new String('He came to the housequite late.')
// console.log(paragraph.slice(0,5));// slices from 0 index to 5 but not 5

const repoCount = 1
// console.log(name + repoCount + " Value"); // too old style
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// string interpolation, is modern


const newStringOne = " james-goes-home "

const url = 'https://google.com/james%20bond'
console.log(url.replace('%20','-'));
console.log(url.includes('james'));
const values = newStringOne.split('-');
console.log(values[2]);


