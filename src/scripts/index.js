import $ from 'jquery';
import { Person } from './models/person';

import { Stack } from './models/datastructures/stack';
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
import { GetNthFib } from './models/recursion';
import { BetterGetNthFib } from './models/recursion';
import { BestGetNthFib } from './models/recursion';
import { countNegatives } from './models/recursion';

import { EvenNumbers } from './models/recursion';
import { BetterEvenNumbers } from './models/recursion';
import { BST } from './models/datastructures/bst';
import { MaxHeap } from './models/datastructures/heap';
import { MinHeap } from './models/datastructures/heap';
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
// let num = [ 12, 3, 1, 2, -6, 5, -8, 6 ];
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
// let tk = 'Tokoyo';
// let det = 'Detroit';
// let lagos = 'Lagos';
// let graph = new Graph();
// let graphList = graph.adjacencyList;

// // graph.addVertex(tk);
// // graph.addVertex(det);
// // graph.addVertex(lagos);
// // graph.addEdge(tk, det);
// // graph.addEdge(tk, lagos);
// for (const state of states) {
// 	graph.addVertex(state);
// }

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
// // console.log(graphList['Michigan']);
// console.log(graphList['Florida']);

// graph.removeEdge('Michigan', 'Florida');
// graph.removeEdge('La', 'fish');

// // console.log(graphList['Michigan']);
// // console.log(graphList['Florida']);
// console.log(graphList['Kansas']);
// console.log(graphList['California']);

// graph.removeVertex('Kansas');
// // console.log(graphList['Kansas']);
// // console.log(graphList['California']);
// graph.depthFirstRecursive('Michigan');
// graph.depthFirstIterative('Michigan');
// graph.breathFirstSearch('Michigan');

let list = new SingleLinkedList();
let dblList = new DoublyLinkedList();
let maxHeap = new MaxHeap();
let maxHeap1 = new MaxHeap();
let minHeap = new MinHeap();
let bst = new BST();
let numberArray = [ 48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41 ];
let newArray = [ 55, 39, 41, 18, 27, 12, 33 ];
//let listtwo = new SingleLinkedList();
for (const num of numberArray) {
	list.push(num);
	dblList.push(num);
	maxHeap.insert(num);
	bst.insert(num);
}
console.log(bst.find(-5));
dblList.get(4);
dblList.get(11);
dblList.set(4, 99);
dblList.insert(40, -6599);
countNegatives(dblList.head);
for (const num of newArray) {
	maxHeap1.insert(num);
}
// console.log(maxHeap1);
// // minHeap.buildHeap(numberArray);
// // minHeap.insert(77);
// //console.log(maxHeap.extractMax());
// //console.log(maxHeap);

// maxHeap1.extractMax();
countCharacters('Keenan');
betterCountCharacters('Keenan');
isAnagram('AB', 'BA');
isAnagramBetter('anagram', 'nagaram');
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
