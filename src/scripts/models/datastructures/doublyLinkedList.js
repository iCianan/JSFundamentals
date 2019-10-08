// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	//push to end of list
	// Time O(1) | Space O(1)
	push(val) {
		debugger;
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		return this.length++;
	}
}
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
