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
		debugger;
		let newIndex = this._hash(index);
		if (this.data[newIndex]) {
			for (const i of this.data[newIndex]) {
				if (i[0] === index) {
					return i;
				}
			}
		}
		return undefined;
	}
	set(index, value) {
		debugger;
		let newIndex = this._hash(index);
		if (!this.data[newIndex]) {
			this.data[newIndex] = [ [ index, value ] ];
		} else {
			this.data[newIndex][0].push([ index, value ]);
		}
	}
}
