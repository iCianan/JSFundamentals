import { Rob } from './models/questions/houseRob';
import { hasSingleCycle } from './models/questions/singleCycleCheck';
import { fibber, fib, fibonacciMaster, fibPro, tabFib, optimizedTabFib } from './models/questions/nthfibonacci';
import { makeChange, makeChangeMaster } from './models/questions/coinChange';
import { squareSubmatrix } from './models/questions/squareSubmatrix';

// let numbers = [ 1, 2, 3, 1 ];
// let anotherSet = [ 2, 3, 1, -4, -4, 2 ];
// Rob(numbers);
// hasSingleCycle(numbers);
// hasSingleCycle(anotherSet);

// // console.log(fibber(45));
// //console.log(fib(45));
// const fasterFib = fibonacciMaster();
// console.log(fasterFib(45));
// //console.log(tabFib(10));
// //console.log(optimizedTabFib(45));
// const changeMaker = makeChange();
// const changeMaster = makeChangeMaster();

// console.log(changeMaster(70));

// console.log(changeMaker(70));

const subArray = [ [ 1, 1, 1, 0 ], [ 1, 1, 1, 1 ], [ 1, 1, 0, 0 ] ];
console.log(squareSubmatrix(subArray));
