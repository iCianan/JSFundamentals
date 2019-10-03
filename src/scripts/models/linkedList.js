import { Node } from "./node";

export class LinkedList {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return newNode;
    }
    let current = this.root;
    while (current.children[0]) {
      current = current.children[0];
    }
    current.children[0] = newNode;
    return newNode;
  }
}
