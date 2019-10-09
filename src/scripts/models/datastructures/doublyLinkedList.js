import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

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
	unshift(val) {
		let newHead = new Node(val);
		if (!this.head) {
			this.head = newHead;
			this.tail = newHead;
		} else {
			this.head.prev = newHead;
			newHead.next = this.head;
			this.head = newHead;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let current, counter;
		if (index <= (this.length - 1) / 2) {
			current = this.head;
			counter = 0;
			while (counter !== index) {
				counter++;
				current = current.next;
			}
		} else {
			current = this.tail;
			counter = this.length - 1;
			while (counter !== index) {
				counter--;
				current = current.prev;
			}
		}
		return current;
	}
	set(index, val) {
		let oldNode = this.get(index);
		if (oldNode !== null) {
			oldNode.val = val;
		}
		return oldNode;
	}
	insert(index, val) {
		debugger;
		let newNode = new Node(val);
		if (!this.head || index == this.tail - 1) {
			this.push(newNode);
			this.length++;
		} else {
			let oldNode = this.get(index);
			if (oldNode !== null) {
				oldNode.prev.next = newNode;
				newNode.prev = oldNode.prev;
				newNode.next = oldNode;
				oldNode.prev = newNode;
				this.length++;
			}
		}
	}
}

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}
