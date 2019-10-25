import { countCharacters } from '../questions/strings';

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
		while (current) {
			if (current.value === value) return current;
			if (current.value > value) current = current.left;
			else current = current.right;
		}
		return undefined;
	}
	remove(value) {
		debugger;
		let current;
		let parentNode = null;
		if (!current) return false;
		while (current) {
			if (value < current.value) {
				if (!current.left) return false;
				else {
					parentNode = current;
					current = current.left;
				}
			} else if (value > current.value) {
				if (!current.right) return false;
				else {
					parentNode = current;
					current = current.right;
				}
			} else {
				if (current.left && current.right) {
					current.value = findSmallestNumber(current.right);
					this.remove(current.value, current.right);
				} else if (!parentNode) {
					if (current.left) {
						current.value = current.left.value;
						current.right = current.left.right;
						current.left = current.left.left;
					} else if (current.right) {
						current.value = current.remove.value;
						current.right = current.right.right;
						current.left - current.right.left;
					} else {
						current.value = null;
					}
				} else if (parentNode.left === current) {
					current.left ? (parentNode.left = current.left) : (parentNode.left = current.right);
				} else if (parentNode.right == current) {
					current.left ? (parentNode.right = current.left) : (parentNode.right = current.right);
				}
				break;
			}
		}
		function findSmallestNumber(node) {
			while (node) {
				if (!node.left) return node.value;
				else node = node.left;
			}
		}
	}
	bfs() {
		let current = this.root;
		let results = [];
		let queue = [];
		queue.push(current);
		while (queue.length) {
			current = queue.shift();
			results.push(current);
			if (current.left) queue.push(current.left);
			if (current.right) queue.push(current.right);
		}
		return results;
	}
}
