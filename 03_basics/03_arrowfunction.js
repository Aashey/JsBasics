const user = {
  name: "james",
  age: 55,
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.name.toUpperCase()}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.name = "alina";
// user.welcomeMessage();
// console.log(this.);
// console.log(user.welcomeMessage());
// console.log(this);

// function dis() {
//   let username = "james";
// console.log(this.username); //* undefined
// }

// dis();

//* arrow function ()=>{}
// const user2 = (a, b) => {
//   console.log(a + b);
// };

// user2(1, 2);

//* arrow function without return
// const addTwo = (a, b) => a + b;
// console.log(addTwo(5, 6)); //* returns 11
const addTwo = (a, b) => ({
  username: "james",
});
console.log(addTwo(3, 4));
