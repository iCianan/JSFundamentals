export class MaxHeap {
	constructor() {
		this.data = [];
	}
	insert(val) {
		this.data.push(val);
		let index = this.data.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		let temp = 0;
		while (this.data[parentIndex] < this.data[index]) {
			temp = this.data[parentIndex];
			this.data[parentIndex] = this.data[index];
			this.data[index] = temp;
			index = parentIndex;
			parentIndex = Math.floor((index - 1) / 2);
		}
	}
	extractMax() {
		let max = this.data[0];
		this.data[0] = this.data.pop();
		this.siftDown(this.data[0]);
		return max;
	}
	siftDown(parent) {
		let parentIndex = 0;
		let left = 2 * parentIndex + 1;
		let right = 2 * parentIndex + 2;
		while (this.data[left] > this.data[parentIndex] || this.data[right] > this.data[parentIndex]) {
			if (this.data[left] > this.data[right]) {
				this.data[parentIndex] = this.data[left];
				this.data[left] = parent;
				parentIndex = left;
				left = 2 * parentIndex + 1;
				right = 2 * parentIndex + 2;
			} else {
				this.data[parentIndex] = this.data[right];
				this.data[right] = parent;
				parentIndex = right;
				left = 2 * parentIndex + 1;
				right = 2 * parentIndex + 2;
			}
		}
	}
}
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
	constructor(array) {
		this.heap = this.buildHeap(array);
	}

	buildHeap(array) {
		for (const item of array) {
			this.insert(item);
		}
	}

	siftDown() {
		// Write your code here.
	}

	siftUp() {
		let index = this.heap.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while (this.heap[parentIndex] > this.heap[index]) {
			let temp = this.heap[parentIndex];
			this.heap[parentIndex] = this.heap[index];
			this.heap[index] = temp;
			index = parentIndex;
		}
	}

	peek() {
		// Write your code here.
	}

	remove() {
		// Write your code here.
	}

	insert(value) {
		this.heap.push(value);
		this.siftUp();
		return this;
	}
}
