// const tinderUser = new Object(); //* singleton
const tinderUser = {}; //* non singleton

tinderUser.id = 123;
tinderUser.name = "James";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "email@email.com",
  fullname: {
    userfullname: {
      fname: "James",
      lname: "Bond",
    },
  },
};

// console.log(regularUser.fullname.userfullname.fname);

const obj1 = {
  1: "apple",
  2: "mango",
};

const obj2 = {
  3: "sweet",
  4: "sour",
};

// const obj3 = { ...obj1, ...obj2 };
// or
// const obj3 = Object.assign({}, obj1, obj2);
//* {} in the beginning is due to the reason that object.assign takes target and source
//* so {} becomes the target of assignmet and the multiple rest you want to add becomes source

const obj3 = { ...obj1, ...obj2 }; //* spread operator
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "b@gmail.com",
  },
];

// console.log(users[0].id);clg
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //* returns all keys of tinderuser
console.log(Object.values(tinderUser)); //* returns all values of tinderuser
console.log(Object.entries(tinderUser)); //* returns multiple arrays of key value pairs
console.log(tinderUser.hasOwnProperty("isLogged")); //*checks if an object has the property
