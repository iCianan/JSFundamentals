import { Rob } from './models/questions/houseRob';
import { hasSingleCycle } from './models/questions/singleCycleCheck';
import { fibber, fib, fibonacciMaster, fibPro, tabFib, optimizedTabFib } from './models/questions/nthfibonacci';
import { makeChange, makeChangeMaster } from './models/questions/coinChange';
import { squareSubmatrix } from './models/questions/squareSubmatrix';
import { getPermutations } from './models/questions/Permuatations';
import { countdown, makeTree } from './models/recursion';
import { DoublyLinkedList } from './models/datastructures/doublyLinkedList';

// let numbers = [ 1, 2, 3, 1 ];
// let anotherSet = [ 2, 3, 1, -4, -4, 2 ];
// Rob(numbers);
// hasSingleCycle(numbers);
// hasSingleCycle(anotherSet);

// // // console.log(fibber(45));
// // //console.log(fib(45));
//  const fasterFib = fibonacciMaster();
//  console.log(fasterFib(45));
// // //console.log(tabFib(10));
// // //console.log(optimizedTabFib(45));
// // const changeMaker = makeChange();
//  const changeMaster = makeChangeMaster();

// // console.log(changeMaster(70));

// // console.log(changeMaker(70));

// const subArray = [ [ 1, 1, 1, 0 ], [ 1, 1, 1, 1 ], [ 1, 1, 0, 0 ] ];
// console.log(squareSubmatrix(subArray));
//countdown(10);
// let categories = [
// 	{ id: 'animals', parent: null },
// 	{ id: 'mammals', parent: 'animals' },
// 	{ id: 'cats', parent: 'mammals' },
// 	{ id: 'dogs', parent: 'mammals' },
// 	{ id: 'chihuahua', parent: 'dogs' },
// 	{ id: 'labrador', parent: 'dogs' },
// 	{ id: 'persian', parent: 'cats' },
// 	{ id: 'siamese', parent: 'cats' }
// ];
// let list = new DoublyLinkedList();
// list.push(4);
// list.push(1);
// list.push(3);
// list.push(8);
// list.push(6);
// list.traverse(list.head);
// console.log(
//     JSON.stringify(
//         makeTree(categories, null))
// 		, null, 3);
const x = fibonacciMaster()		

console.log(x(50));
console.log(fib(50));
//console.log(getPermutations([ 1, 2, 3 ]));
