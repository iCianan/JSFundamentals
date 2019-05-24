import $ from "jquery";
import { Planet } from "./models/planet";
import { Person } from "./models/person";
import { HashTable } from "./models/hashtable";
import { LinkedList } from "./models/linkedList";
import { Stack } from "./models/stack";
import { BinarySearchTree } from "./models/binarysearchtree";
import { String } from "./models/string";

let planet = new Planet();
let person = new Person();
let ht = new HashTable();
let ll = new LinkedList();
let stack = new Stack();
let bst = new BinarySearchTree();
let string = new String();

ht.set("google", "Pixel");
ht.set("apple", "iPhone");
ht.set("google", "Nexus 5x");
ht.get("google");

ll.insert(5);
ll.insert(10);
ll.insert(23);

stack.push(10);
stack.push(20);
stack.push(30);

bst.insert(10);
bst.insert(7);
bst.insert(8);
bst.insert(50);
bst.insert(2);
bst.insert(75);

fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(data => {
    person.name = data.name;
    person.birthYear = data.birth_year;
    planet.url = data.homeworld;
    fetch(planet.url)
      .then(response => response.json())
      .then(data => {
        planet.name = data.name;
        planet.climate = data.climate;
        person.homePlanet = planet.name;
      })
      .catch(error => console.log("error: ", error));
  })
  .catch(error => console.log("error: ", error));

setTimeout(() => {
  console.log(planet);
  console.log(person);
  console.log(ll);
  console.log(stack);
  console.log(bst);
  console.log(string.reverse(["h", "e", "l", "l", "o"]));
}, 5000);
