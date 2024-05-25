// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c); // v was defined inside scope but is being used out so we donot use var

let a = 300;

if (true) {
  let a = 30;
  //   console.log("Inner: ", a); //* returns 30
}
// console.log("Outer: ", a); //* returns 300

//* Nested Scope

function one() {
  const username = "james";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  two();
  //   console.log(website);
}

one();

if (true) {
  const username = "alina";
  if (username == "alina") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

//?-------------------------------interesting---------------------------
addOne(5); //! can access it even if its called before declaration

function addOne(num) {
  return num + 1;
}

//* expression
const addTwo = function (num) {
  return num + 2;
};

addTwo(6); //! cannot access it if its called before declaration
