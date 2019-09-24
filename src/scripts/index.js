import $ from "jquery";
import { Person } from "./models/person";

import { HashTable } from './models/hashtable';
import { LinkedList } from './models/linkedList';
import { Stack } from './models/stack';
import { BinarySearchTree } from './models/binarysearchtree';
import { BST } from './models/bst';
import { String } from './models/string';
import { TwoSum } from './models/TwoSum';
import { threeNumberSum } from './models/threeNumberSum';

import { Search } from "./models/Search";
let states = [
  "Alaska",
  "Alabama",
  "Arkansas",
  "American Samoa",
  "Arizona",
  "California",
  "Colorado",
  "Connecticut",
  "District of Columbia",
  "Delaware",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Iowa",
  "Idaho",
  "Illinois",
  "Indiana",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Massachusetts",
  "Maryland",
  "Maine",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Mississippi",
  "Montana",
  "North Carolina",
  " North Dakota",
  "Nebraska",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "Nevada",
  "New York",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Virginia",
  "Virgin Islands",
  "Vermont",
  "Washington",
  "Wisconsin",
  "West Virginia",
  "Wyoming"
];
let search = new Search();
let num = [ 12, 3, 1, 2, -6, 5, -8, 6 ];
let target = 0;
let three = new threeNumberSum(num, target);

<<<<<<< HEAD
alert(three);

// //alert(states.indexOf('Michigan'));
// alert(search.linearSearch(states, 'Texas'));
// alert(search.binarySearch(states, 'Texas'));
=======
//alert(states.indexOf('Michigan'));
alert(search.linearSearch(states, "Texas"));
alert(search.binarySearch(states, "Texas"));
alert(search.binarySearchRecursive(states, "Texas", 0, states.length - 1));
>>>>>>> c40ab2d0000aa54006eccd2cffa41ce8e6f5179a

//alert(states.includes('Texas'));
