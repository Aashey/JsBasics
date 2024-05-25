const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "flash", "batman"];

// marvel_heroes.push(...dc_heroes);
// console.log(marvel_heroes);

//* concat returns an array after concatening two arrays
const new_heroes = marvel_heroes.concat(dc_heroes);
// console.log(new_heroes);

//* can use spread operator for easy use
marvel_heroes.push(...dc_heroes);
console.log(marvel_heroes);

const arr2 = [1, 2, 3, [4, 5, 6, 7, [6, 7], [4, 5]]];

const arr3 = arr2.flat(Infinity);
console.log(arr3);

console.log(Array.isArray("Aashish")); //* false
console.log(Array.from("Aashish")); //*returns array of alphabets
console.log(Array.from({ name: "James" })); //! interesting

let score = 100;
let score2 = 200;
let score3 = 300;

//* return array of any datatypes with [Array.of]
console.log(Array.of(score, score2, score3, "James", false, 35));
