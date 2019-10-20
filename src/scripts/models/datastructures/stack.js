class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
export class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(data) {
		let newNode = new Node(data);
		if (!this.top) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.length++;
	}
	pop() {
		if (!this.top) return undefined;
		if (this.top === this.bottom) this.bottom = null;
		let oldTop = this.top;
		this.top = oldTop.next;
		oldTop.next = null;
		this.length--;
		return oldTop.val;
	}
	peek() {
		if (!this.top) return undefined;
		return this.top.val;
	}
	isEmpty() {
		return this.length ? false : true;
	}
}
export class ArrayStack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.data = [];
	}

	push(val) {
		this.data.push(val);
	}
	pop() {
		if (this.data) return this.data.pop();
	}
	peek() {
		let length = this.data.length;
		if (this.data) return this.data[length - 1];
	}
	isEmpty() {
		return this.data.length ? false : true;
	}
}

export class BetterQueue {
	constructor() {
		this.eStack = new Stack();
		this.dStack = new Stack();
	}
	peek() {
		return this.eStack[this.eStack.length - 1];
	}
	enqueue(value) {
		while (this.eStack.length > 0) {
			this.dStack.push(this.eStack.pop());
		}
		this.eStack.push(value);
		while (this.dStack.length > 0) {
			this.eStack.push(this.dStack.pop());
		}
	}
	dequeue() {
		let x = this.eStack[this.eStack.length - 1];
		this.eStack.pop();
		return x;
	}
	empty() {
		if (this.eStack.length > 0 || this.dStack.length > 0) return false;
		else return true;
	}
}
