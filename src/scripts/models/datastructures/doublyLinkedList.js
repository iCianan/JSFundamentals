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
	insertAgain(index, val) {
		let newNode = new Node(val);
		if (!this.head && index !== 1) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
		}
		let current = this.head;
		let count = 1;
		while (current && count <= index) {
			if (count == index) {
				newNode.next = current;
				newNode.prev = current.prev;
				current.prev = newNode;
				this.length++;
			}
			count++;
			current = current.next;
		}
		return this;
	}
	remove(index) {
		let nodeRemoved = this.get(index);
		if (!nodeRemoved) return undefined;
		nodeRemoved.prev.next = nodeRemoved.next;
		nodeRemoved.next.prev = nodeRemoved.prev;
		nodeRemoved.next = null;
		nodeRemoved.prev = null;
		this.length--;
	}
	traverse(node){
		if(node){
			console.log(node.val);
			this.traverse(node.next);

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
