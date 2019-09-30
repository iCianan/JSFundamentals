import $ from 'jquery';
import { Person } from './models/person';

import { HashTable } from './models/hashtable';
import { LinkedList } from './models/linkedList';
import { Stack } from './models/stack';
import { BinarySearchTree } from './models/binarysearchtree';
import { BST } from './models/bst';
import { String } from './models/string';
import { TwoSum } from './models/TwoSum';
import { threeNumberSum } from './models/threeNumberSum';
import { singlelinkedlist } from './models/singlelinkedlist';
import { Queue } from './models/queue';
import { Graph } from './models/graph';

//import { Search } from "./models/Search";
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
let graph = new Graph();
let graphList = graph.adjacencyList;

// graph.addVertex(tk);
// graph.addVertex(det);
// graph.addVertex(lagos);
// graph.addEdge(tk, det);
// graph.addEdge(tk, lagos);
for (const state of states) {
	graph.addVertex(state);
}

graph.addEdge('Alaska', 'California');
graph.addEdge('California', 'Kansas');
graph.addEdge('Kansas', 'Michigan');
graph.addEdge('Kansas', 'Texas');
graph.addEdge('Texas', 'Florida');
graph.addEdge('Michigan', 'California');
graph.addEdge('Michigan', 'Florida');
graph.addEdge('Michigan', 'Pennsylvania');
graph.addEdge('Pennsylvania', 'North Carolina');
graph.addEdge('North Carolina', 'Florida');
// console.log(graphList['Michigan']);
// console.log(graphList['Florida']);

// graph.removeEdge('Michigan', 'Florida');
// graph.removeEdge('La', 'fish');

// // console.log(graphList['Michigan']);
// // console.log(graphList['Florida']);
// console.log(graphList['Kansas']);
// console.log(graphList['California']);

// graph.removeVertex('Kansas');
// console.log(graphList['Kansas']);
// console.log(graphList['California']);
graph.depthFirstRecursive('Michigan');
