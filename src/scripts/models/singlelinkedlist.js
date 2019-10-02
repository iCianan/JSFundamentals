export class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    let current = this.head;
    let prev = current;
    if (!current) return undefined;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    prev.next = null;
    this.length--;
    return current;
  }
  shift() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    let i = 0;
    while (i !== index) {
      current = current.next;
      i++;
    }
    return current;
  }
  set(index, val) {
    let oldVal = this.get(index);
    if (oldVal) {
      oldVal.data = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    let newNode = new Node(val);
    let current = this.head;
    let i = 0;
    while (i !== index - 1) {
      current = current.next;
      i++;
    }
    current.next = newNode;
    newNode.next = current;
    this.length++;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
