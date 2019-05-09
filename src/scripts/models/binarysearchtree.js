import { Node } from "./node";

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let newNode = new Node(data);
    debugger;
    if (!this.root) {
      this.root = newNode;
      return newNode;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
          if (!current.children[0]) {
            current.children[0] = { left: newNode };
            return this;
          } else {
            current = current.children[0].left;
          }
        } else {
          if (!current.children[1]) {
            current.children[1] = { right: newNode };
            return this;
          } else {
            current = current.children[1].right;
          }
        }
      }
    }
  }
}
