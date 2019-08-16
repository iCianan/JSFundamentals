export class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		debugger;
		let newNode = value;
		let current = this;
		while (true) {
			if (current.value > newNode || current > newNode) {
				if (current.left === null || !current.hasOwnProperty('left')) {
					current.left = newNode;
					return this;
				} else {
					current = current.left;
				}
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				} else {
					current = current.right;
				}
			}
		}
	}
}
