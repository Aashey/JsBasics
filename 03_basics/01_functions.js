function sayAB() {
  console.log("A");
  console.log("B");
}

// sayAB();

//! a,b are parameters
function add(a, b) {
  return a + b;
}

//! 1 and 2 are arguments
const sum = add(1, 2);
console.log(sum);

//* rest operator ...
function calculateCartPrice(...prices) {
  return prices;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
  username: "james",
  price: 199,
};

//* pass object in a function
function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);

//* pass array in a function

const nums = [200, 400, 500];
function Sum(num) {
  return num;
}

console.log(Sum(nums));
