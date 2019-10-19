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
		return oldTop;
	}
	peek() {
		if (!this.top) return undefined;
		return this.top;
	}
	isEmpty() {
		return this.length ? false : true;
	}
}
