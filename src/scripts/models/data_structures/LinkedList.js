export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //find the target node
  //create a new node with supplied value
  //if list doesnt have node return false
  //if target node is head insert node at the beginning
  //if target node is the tail insert at the end
  // set new node next pointer to target next node
  // set new node prev pointer to target node
  // set target node next prev pointer to new node
  // set target node next point to new node
  addAfter(targetValue, newValue) {
    let targetNode = this.find(targetValue);
    let newNode = new Node(newValue);
    if (!targetNode) return false;
    if (targetNode === this.head) return this.addFirst(newNode.value);
    if (targetNode === this.tail) return this.addLast(newNode.value);
    newNode.next = targetNode.next;
    newNode.prev = targetNode;
    targetNode.next.prev = newNode;
    targetNode.next = newNode;
    this.length++;
  }

  addBefore(targetValue, newValue) {}
  addLast(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  addFirst(newValue) {
    let newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
  }

  find(targetValue) {
    if (!this.head) {
      return false;
    }
    let current = this.head;
    while (current && current.value !== targetValue) {
      current = current.next;
    }
    return current;
  }

  removeLast() {
    if (!this.tail) {
      return undefined;
    }
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  removeFirst() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  remove(targetNode) {}
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
