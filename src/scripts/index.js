import $ from 'jquery';
import { Person } from './models/person';

import { Stack, ArrayStack } from './models/datastructures/stack';
import { ThreeLargestNumbers } from './models/questions/ThreeLargestNumbers';
import { SingleLinkedList } from './models/datastructures/singlyLinkedList';
import { DoublyLinkedList } from './models/datastructures/doublyLinkedList';

import { largestNumber } from './models/questions/largestNumber';
import { countCharacters } from './models/questions/strings';
import { betterCountCharacters } from './models/questions/strings';
import { isAnagram } from './models/questions/strings';
import { isAnagramBetter } from './models/questions/strings';
import { Queue } from './models/datastructures/queue';
import { Graph } from './models/datastructures/graph';
import { mergeSort } from './models/algorithms/mergeSort';
import {
	countNegatives,
	EvenNumbers,
	BetterEvenNumbers,
	GetNthFib,
	BetterGetNthFib,
	BestGetNthFib,
	findFactorial,
	findFact,
	fibonacci
} from './models/recursion';
import { BFS } from './models/algorithms/BFS';
import { DFSPreOrder, DFSPostOrder, DFSInOrder, DFSPostOrder2 } from './models/algorithms/DFS';
import { containsCommonItems, containsCommonItems2 } from './models/questions/containsCommonItems';
import { BST } from './models/datastructures/bst';
import { MaxHeap } from './models/datastructures/heap';
import { MinHeap } from './models/datastructures/heap';
import { reverse, reverseBetter, reverseBetter2, reverseBest } from './models/questions/reverseString';
import { HashTable } from './models/datastructures/hashtable';
import { repeatCharacters, repeatChar } from './models/questions/repeatCharacters';
import { BinarySearchTree } from './models/datastructures/binarySearchTree';
import { selectionSort } from './models/algorithms/selectionSort';
import { insertionSort } from './models/algorithms/insertionSort';
let states = [
	'Alaska',
	'Alabama',
	'Arkansas',
	'American Samoa',
	'Arizona',
	'California',
	'Colorado',
	'Connecticut',
	'District of Columbia',
	'Delaware',
	'Florida',
	'Georgia',
	'Guam',
	'Hawaii',
	'Iowa',
	'Idaho',
	'Illinois',
	'Indiana',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Massachusetts',
	'Maryland',
	'Maine',
	'Michigan',
	'Minnesota',
	'Missouri',
	'Mississippi',
	'Montana',
	'North Carolina',
	'North Dakota',
	'Nebraska',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'Nevada',
	'New York',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Puerto Rico',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Virginia',
	'Virgin Islands',
	'Vermont',
	'Washington',
	'Wisconsin',
	'West Virginia',
	'Wyoming'
];
// //let search = new Search();
// let list = new singlelinkedlist();
// let queue = new Queue();
let num = [ 12, 3, 1, 2, -6, 5, -8, 6 ];
// for (const key of states) {
// 	list.insert(key);
// 	queue.enqueue(key);
// }
// for (const key of states) {
// 	queue.dequeue();
// }
// console.log(queue);
// queue.dequeue();
// list.pop();
// list.pop();
// //let three = new threeNumberSum(num, target);

// //alert(three);

// //alert(states.indexOf('Michigan'));
// alert(search.linearSearch(states, 'Texas'));
// // alert(search.binarySearch(states, 'Texas'));
// //alert(states.indexOf('Michigan'));
// alert(search.linearSearch(states, "Texas"));
// alert(search.binarySearch(states, "Texas"));
// alert(search.binarySearchRecursive(states, "Texas", 0, states.length - 1));

//alert(states.includes('Texas'));
// // let tk = 'Tokoyo';
// // let det = 'Detroit';
// // let lagos = 'Lagos';
// let graph = new Graph();

// // graph.addVertex(tk);
// // graph.addVertex(det);
// // graph.addVertex(lagos);
// graph.addEdge(tk, det);
// // graph.addEdge(tk, lagos);
// debugger;
// for (const state of states) {
// 	graph.addVertex(state);
// }

console.log(findFactorial(10));
console.log(findFact(10));
console.log(fibonacci(10));

console.log(selectionSort(num));
console.log(insertionSort(num));
console.log(mergeSort(num));
// graph.addEdge('Alaska', 'California');
// graph.addEdge('California', 'Kansas');
// graph.addEdge('Kansas', 'Michigan');
// graph.addEdge('Kansas', 'Texas');
// graph.addEdge('Texas', 'Florida');
// graph.addEdge('Michigan', 'California');
// graph.addEdge('Michigan', 'Florida');
// graph.addEdge('Michigan', 'Pennsylvania');
// graph.addEdge('Pennsylvania', 'North Carolina');
// graph.addEdge('North Carolina', 'Florida');
// // // console.log(graphList['Michigan']);
// // console.log(graphList['Florida']);

// // graph.removeEdge('Michigan', 'Florida');
// // graph.removeEdge('La', 'fish');

// // // console.log(graphList['Michigan']);
// // // console.log(graphList['Florida']);
// // console.log(graphList['Kansas']);
// // console.log(graphList['California']);

// // graph.removeVertex('Kansas');
// // // console.log(graphList['Kansas']);
// // // console.log(graphList['California']);
// // graph.depthFirstRecursive('Michigan');
// // graph.depthFirstIterative('Michigan');
// // graph.breathFirstSearch('Michigan');

// let list = new SingleLinkedList();
// let dblList = new DoublyLinkedList();
// let maxHeap = new MaxHeap();
// let maxHeap1 = new MaxHeap();
// let minHeap = new MinHeap();
// let bst = new BST();
// let binarySearchTree = new BinarySearchTree();
// let numberArray = [ 48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41 ];
// let newArray = [ 10, 15, 20, 5, 1, 3, 391 ];
// let balancedTree = [ 12, 7, 10, 3, 20, 14, 35 ];

// for (const number of balancedTree) {
// 	binarySearchTree.insert(number);
// }

// //console.log(binarySearchTree);
// binarySearchTree.remove(12);
// console.log(binarySearchTree);

//let listtwo = new SingleLinkedList();

// console.log(containsCommonItems(newArray, numberArray));
// console.log(containsCommonItems2(newArray, numberArray));
// console.log(reverse('Hi my name is Keenan'));

// console.log(reverseBetter('Hi my name is Keenan'));
// console.log(reverseBetter2('Hi my name is Keenan'));
// console.log(reverseBest('Hi my name is Keenan'));

// let user = {
// 	age: 85,
// 	name: 'Roshi',
// // 	ki: true,
// // 	charge: () => {
// // 		console.log("It's morphing time!!");
// // 	}
// // };
// // user.age;
// // user.charge();

// const betterUser = new Map();
// const set = new Set();

// let hash = new HashTable(5);
// hash.set('Camary', 'Toyota');
// hash.set('F150', 'Ford');
// hash.set('Civic', 'Honda');
// hash.set('Wrangler', 'Jeep');
// hash.set('Macbook', 'Apple');
// //hash.keys();
// // console.log(repeatCharacters(numberArray));
// // console.log(repeatChar(numberArray));
// // console.log(repeatCharacters([ 2, 5, 5, 2, 3, 5, 1, 2, 4 ]));
// // console.log(repeatChar([ 2, 5, 5, 2, 3, 5, 1, 2, 4 ]));
// let stack = new Stack();
// let arrayStack = new ArrayStack();
// for (const num of newArray) {
// 	stack.push(num);
// 	arrayStack.push(num);
// }
// console.log(stack.bottom);
// console.log(arrayStack.bottom);

// for (const num of newArray) {
// 	list.push(num);
// 	dblList.push(num);
// 	maxHeap.insert(num);
// 	bst.insert(num);
// }
// console.log(bst);

// console.log(BFS(bst.root));
// console.log(DFSPreOrder(bst.root, []));
// console.log(DFSInOrder(bst.root, []));
// console.log(DFSPostOrder(bst.root, []));
// console.log(DFSPostOrder2(bst.root, []));

// dblList.get(4);
// dblList.get(11);
// dblList.set(4, 99);
// dblList.insert(40, -6599);
// countNegatives(dblList.head);
// for (const num of newArray) {
// 	maxHeap1.insert(num);
// }
// // console.log(maxHeap1);
// // // minHeap.buildHeap(numberArray);
// // // minHeap.insert(77);
// // //console.log(maxHeap.extractMax());
// // //console.log(maxHeap);

// // maxHeap1.extractMax();
// countCharacters('Keenan');
// betterCountCharacters('Keenan');
// isAnagram('AB', 'BA');
// isAnagramBetter('anagram', 'nagaram');
// list.reverse();
// console.log(list);
// // for (const state of states) {
// //   listtwo.unshift(state);
// // }
// //list.remove(3);
// console.log(GetNthFib(11));
// console.log(BetterGetNthFib(11));
// console.log(BestGetNthFib(11));

// list.insert(12, "Detroit");
// // list.insert(0, "First");
// // // console.log(listtwo);
// let array = [ 1, 8, 7, 2, 10, 14, 68 ];
// debugger;
// console.log(EvenNumbers(array));
// console.log(BetterEvenNumbers(array));
// // // console.log(list.pop());

// // console.log(list.shift());
// console.log(list);
// // // let arr = [23, 43, 37, 99];
// let num = [3, 30, 34, 5, 9];
// //8755
// console.log(ThreeLargestNumbers(num));

// console.log(largestNumber(num));
// // sort.mergeSort(num);
// // recursion.arraySumIterative(num);

// console.log(fib);
// list.unshift("Alaska");
// list.get(2);
// debugger;
// list.set(2, "Detroit");

//
// console.log(list);
