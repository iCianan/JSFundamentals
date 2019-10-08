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
	pop() {
		if (!this.head) return undefined;
		let oldTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}
		this.length--;
		return oldTail;
	}
	// remove node from beginning
	shift() {
		if (!this.head) return undefined;
		let oldHead = this.head;
		if (this.length == 1) {
			this.head = null;
			this.tail == null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
}
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
