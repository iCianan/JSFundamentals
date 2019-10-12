//Time Avg O(log(n)) Worst O(n) | Space Avg O(log(n)) Worst O(n)
export class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (current) {
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (!current.left) {
					current.left = newNode;
					return this;
				} else current = current.left;
			} else {
				if (!current.right) {
					current.right = newNode;
					return this;
				} else current = current.right;
			}
		}
	}
	contains(value) {
		if (!this.root) return false;
		let current = this.root;
		while (current) {
			if (value < current.value) current = current.left;
			else if (value > current.value) current = current.right;
			else return true;
		}
		return false;
	}
	remove(value) {}
}

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
