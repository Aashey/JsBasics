// Dates

let myDate = new Date();
// let date = [];
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// const hmiDate = myDate.toLocaleDateString().split('/');
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 4, 25);
let myCreatedDate = new Date("2024:05:25");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(myCreatedDate/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));
