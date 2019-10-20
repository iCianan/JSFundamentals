class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

export class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (current) {
				if (current.value > value) {
					if (!current.left) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else {
					if (!current.right) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	lookup(value) {
		let current = this.root;
		if (!current) return undefined;
		else {
			while (current) {
				if (current.value === value) return current;
				if (current.value > value) {
					if (!current.left) return undefined;
					else current = current.left;
				} else {
					if (!current.right) return undefined;
					else current = current.right;
				}
			}
		}
	}
	remove() {}
}
