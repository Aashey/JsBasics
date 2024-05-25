"use strict"; // treat all js code as newer version


console.log(3 +
    3
); // code readability must be high, so this is bad habit


const name = "Aashey"
const age = 26
let isLoggedIn = false
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 124125129n
console.log(id === anotherId); // false as symbol is unique

// primitive data types
//---------------------------------------
// number => 2 ^ 53
// bigint => or large datas
// string => "" or '' but prefer ""
// boolean => true or false
// null => standalone value
// undefined => not assigned
// symbol => unique

//object
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined



