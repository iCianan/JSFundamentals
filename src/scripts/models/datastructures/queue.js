export class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		let newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
			return this.size++;
		}
		this.last.next = newNode;
		this.last = newNode;

		return this.size++;
	}
	dequeue() {
		if (!this.first) {
			return undefined;
		}
		let current = this.first;
		if (this.last === this.first) {
			this.last = null;
		}
		this.first = current.next;
		this.size--;
		return current;
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
