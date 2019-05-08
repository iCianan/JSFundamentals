import { Node } from "./node";

export class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let newNode = new Node(data);
    if (!this.top) {
      this.top = newNode;
      return newNode;
    }
    newNode.children.push(this.top);
    this.top = newNode;
    return newNode;
  }

  pop() {}
  peek() {}
  isEmpty() {}
}
