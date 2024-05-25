//* singleton = one of a kind created using constructor
//! Object.create creates singleton

//* object literals

const mySym = Symbol();

const jsUSer = {
  name: "James",
  [mySym]: "mykey1",
  "full name": "James Bond",
  age: 18,
  location: "Texas",
  email: "abs@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};

// console.log(jsUSer.name); //! fine approach but not applicable for all keys
// console.log(jsUSer["full name"]); //* better approach applicable for most keys
// console.log(jsUSer.mySym); //! undefined
// // console.log(jsUSer[mySym]); //* mykey1

jsUSer.email = "gpt@gmail.com";
// Object.freeze(jsUSer); //* used to freeze any changes to the object
jsUSer.name = "Alina";
// console.log(jsUSer);

jsUSer.greeting = function () {
  return "Hello";
};

jsUSer.greeting2 = function () {
  return `Hello Js User, ${this.name}`;
};

console.log(jsUSer.greeting());
console.log(jsUSer.greeting2());
