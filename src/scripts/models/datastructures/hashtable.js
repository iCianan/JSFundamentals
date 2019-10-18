export class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	get(index) {
		let newIndex = this._hash(index);
		if (this.data[newIndex]) {
			for (const i of this.data[newIndex]) {
				if (i[0] === index) {
					return i[1];
				}
			}
		}
		return undefined;
	}
	set(index, value) {
		let newIndex = this._hash(index);
		if (!this.data[newIndex]) {
			this.data[newIndex] = [];
		}
		this.data[newIndex].push([ index, value ]);
	}
	keys() {
		let keysArray = [];
		if (this.data) {
			for (const i in this.data) {
				for (const j of this.data[i]) {
					keysArray.push(j[0]);
				}
			}
		}
		return console.log(keysArray);
	}
}
