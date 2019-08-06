import $ from "jquery";
import { Planet } from "./models/planet";
import { Person } from "./models/person";
import { HashTable } from "./models/hashtable";
import { LinkedList } from "./models/linkedList";
import { Stack } from "./models/stack";
import { BinarySearchTree } from "./models/binarysearchtree";
import { String } from "./models/string";
import { TwoSum } from "./models/TwoSum";

let planet = new Planet();
let person = new Person();
let ht = new HashTable();
let ll = new LinkedList();
let stack = new Stack();
let bst = new BinarySearchTree();
let string = new String();

let arr1 = [3, 5, -4, 8, 11, 1, -1, 6];
let newNum = 10;

function twoNumberSum(array, targetSum) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        if (array[i] < array[j]) {
          return [array[i], array[j]];
        } else if (array[i] > array[j]) {
          return [array[j], array[i]];
        }
      }
    }
  }
  return results;
}

function twoNumHash(array, targetSum) {
  let results = {};
  for (let i of array) {
      let potentialMatch = targetSum - array[i];
      if (results.hasOwnProperty(potentialMatch)){
        return [potentialMatch, array[i]];
      } else{
          results[array[i]] = true;
      }
  }
  return [];
}

//twoNumberSum(arr1, newNum);

// ht.set("google", "Pixel");
// ht.set("apple", "iPhone");
// ht.set("google", "Nexus 5x");
// ht.get("google");

// ll.insert(5);
// ll.insert(10);
// ll.insert(23);

// stack.push(10);
// stack.push(20);
// stack.push(30);

// bst.insert(10);
// bst.insert(7);
// bst.insert(8);
// bst.insert(50);
// bst.insert(2);
// bst.insert(75);

// fetch("https://swapi.co/api/people/1")
//   .then(response => response.json())
//   .then(data => {
//     person.name = data.name;
//     person.birthYear = data.birth_year;
//     planet.url = data.homeworld;
//     fetch(planet.url)
//       .then(response => response.json())
//       .then(data => {
//         planet.name = data.name;
//         planet.climate = data.climate;
//         person.homePlanet = planet.name;
//       })
//       .catch(error => console.log("error: ", error));
//   })
//   .catch(error => console.log("error: ", error));

setTimeout(() => {
  console.log(twoNumberSum(arr1, newNum));
    console.log(twoNumHash(arr1, newNum));


  // console.log(planet);
  // console.log(person);
  // console.log(ll);
  // console.log(stack);
  // console.log(bst);
  // console.log(string.reverse(["h", "e", "l", "l", "o"]));
}, 5000);
