const name = "james"
//or string can also be assigned in another way
const surname = new String('Bond')
// console.log(surname); // returns object with its type and value

// Some string methods examples
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

/* Some methods for string
​​
anchor: function anchor()
​​
at: function at()
​​
big: function big()
​​
blink: function blink()
​​
bold: function bold()
​​
charAt: function charAt()
​​
charCodeAt: function charCodeAt()
​​
codePointAt: function codePointAt()
​​
concat: function concat()
​​
constructor: function String()
​​
endsWith: function endsWith()
​​
fixed: function fixed()
​​
fontcolor: function fontcolor()
​​
fontsize: function fontsize()
​​
includes: function includes()
​​
indexOf: function indexOf()
​​
isWellFormed: function isWellFormed()
​​
italics: function italics()
​​
lastIndexOf: function lastIndexOf()
​​
length: 0
​​
link: function link()
​​
localeCompare: function localeCompare()
​​
match: function match()
​​
matchAll: function matchAll()
​​
normalize: function normalize()
​​
padEnd: function padEnd()
​​
padStart: function padStart()
​​
repeat: function repeat()
​​
replace: function replace()
​​
replaceAll: function replaceAll()
​​
search: function search()
​​
slice: function slice()
​​
small: function small()
​​
split: function split()
​​
startsWith: function startsWith()
​​
strike: function strike()
​​
sub: function sub()
​​
substr: function substr()
​​
substring: function substring()
​​
sup: function sup()
​​
toLocaleLowerCase: function toLocaleLowerCase()
​​
toLocaleUpperCase: function toLocaleUpperCase()
​​
toLowerCase: function toLowerCase()
​​
toString: function toString()
​​
toUpperCase: function toUpperCase()
​​
toWellFormed: function toWellFormed()
​​
trim: function trim()
​​
trimEnd: function trimEnd()
​​
trimLeft: function trimStart()
​​
trimRight: function trimEnd()
​​
trimStart: function trimStart()
​​
valueOf: function valueOf()
​​​​
*/

