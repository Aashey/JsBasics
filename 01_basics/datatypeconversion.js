// let score = '33abc';
let a = null;
let score = [null,undefined,"31abc",31,"Aashish",true];
let result = []
for(let i = 0; i< score.length;i++){
    let valueInNumber = Number(score[i]);
    // console.log(score[i],typeof valueInNumber); // js converts everything into number
    result.push(valueInNumber); //but what do we get if we display those numbers ?
}

// console.table(result); // we get this

// Notes
/*
"31" => 31
"31abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false; "asmd" => true
*/

let someNum = 1;
let stringNum = String(someNum);
// console.log(stringNum);
// console.log(typeof stringNum);

//-------------------operations-----------------------------
let value = 3
let negValue = -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = " james"
let str3 = str1 + str2
// console.log(str3);
// console.log(("1" + 2) + 2);
// console.log((1 + 2) + "2");
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+""); // 0
let gameCounter = 100
gameCounter++ ;
// console.log(gameCounter);

let x = 2;
const y = x++; // in this y stores the value before increment of x
console.log(x,y);

let p = 2;
const q = ++p;// in this q increments and then stores the value of p
console.log(p,q);