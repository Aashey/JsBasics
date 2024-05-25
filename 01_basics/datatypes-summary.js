// 1) Primitive Data Types
// 7 types: String, Number, Boolean, null, undefined, symbol, bigint

// 2) Reference type(Non primitive)
// Types: Array, Objects, Functions
// */


// example
const name = "Aashey"
const age = 26
let isLoggedIn = false
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 124125129n
// console.log(id === anotherId);

const fruits = ["Mango","Banana"]

let student = {
    name:"James",
    age:22
}

const mixer = function(){
console.log("Mixer");
}

console.log(typeof mixer); // function but called object function
console.log(typeof fruits); // object
console.log(typeof bigNumber); // function
console.log(typeof student); // object