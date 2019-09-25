export class singlelinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = newNode;
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
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
