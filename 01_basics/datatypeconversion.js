// let score = '33abc';
let a = null;
let score = [null,undefined,"31abc",31,"Aashish",true];
let result = []
for(let i = 0; i< score.length;i++){
    let valueInNumber = Number(score[i]);
    console.log(score[i],typeof valueInNumber); // js converts everything into number
    result.push(valueInNumber); //but what do we get if we display those numbers ?
}

console.table(result); // we get this

// Notes
/*
"31" => 31
"31abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

/*
1 => true; 0 => false
"" => false; "asmd" => true
*/

let someNum = 1;
let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof stringNum);