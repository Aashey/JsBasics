//* Javascript Execution Context
//! Global Execution Context => this
//! Function Execution Context
//! Eval Execution Context

//! JS runs in 2 phases
//* 1) Memory Creation Phase(Creation Phase)
//? This allocates memory for variables

//* 2) Execution Phase
//?

//eg:
let val1 = 10;
let val2 = 5;
function addNUm(n1, n2) {
  let total = n1 + n2;
  return total;
}

let result1 = addNUm(val1, val2);
let result2 = addNUm(10, 20);

/*
! Steps,
! First step, Global Execution => this
! Second step, Memory creation phase
* val1 -> undefined
* val2 -> undefined
* addNUm -> definition
* result1 -> undefined
* result2 -> undefined
! Third step, Execution phase
* val1 -> 10
* val2 -> 5
* skip function as already defined n above cycle
* addNum -> New executional context for itself
*           New variable env + execution thread
*           Same cycle Memory creation(val1 -> undefined, val2 -> undefined, total -> undefined)
*           and execution n1 -> 10, n2 -> 5, total -> 15, total returned to first step,GEC
*           Whole executinal context is then deleted
*  result1 -> 15
* result2 -> New executional context for itself
*           New variable env + execution thread
*           Same cycle Memory creation(val1 -> undefined, val2 -> undefined, total -> undefined)
*           and execution n1 -> 10, n2 -> 20, total -> 30, total returned to first step,GEC
*           Whole executinal context is then deleted

*/
