// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	setHead(node) {
		if (this.head === null) {
			this.head = node;
			this.tail = node;
			return;
		}
		this.insertBefore(this.head, node);
	}

	setTail(node) {
		if (this.tail === null) {
			this.tail = node;
		}
		this.insertAfter(this.tail, node);
	}

	insertBefore(node, nodeToInsert) {
		let current = this.head;
		while (current) {
			current = current.next;
			if (current.value) {
			}
		}
	}

	insertAfter(node, nodeToInsert) {
		if (node === this.head) {
			nodeToInsert.next = this.head.next;
			this.head.next = nodeToInsert;
		}
		if (node === this.tail) {
			nodeToInsert.next = null;
			this.tail.next = nodeToInsert;
			this.tail = nodeToInsert;
			this.tail.prev = node;
		}
		let current = this.head;
		while (current) {
			if (current !== node) {
				current = current.next;
			}
			nodeToInsert.next = current.next;
			nodeToInsert.prev = current;
			current.next = nodeToInsert;
		}
	}

	insertAtPosition(position, nodeToInsert) {
		// Write your code here.
	}

	removeNodesWithValue(value) {
		// Write your code here.
	}

	remove(node) {
		// Write your code here.
	}

	containsNodeWithValue(value) {
		let current = this.head;
		while (current) {
			if (current.value !== value) {
				current = current.next;
			}
			return true;
		}
	}
}
