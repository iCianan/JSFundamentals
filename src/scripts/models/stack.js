class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
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
		let current = this.top;
		while (current.next) {
			current = current.next;
		}
		current.next = newNode;
		this.top = newNode;
		return newNode;
	}

	pop() {
		if (!this.top) {
			this.top = null;
		}
	}
	peek() {}
	isEmpty() {}
}
