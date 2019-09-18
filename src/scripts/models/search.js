export class Search {
	linearSearch(array, value) {
		for (let index = 0; index < array.length; index++) {
			if (array[index] === value) return index;
		}
		return -1;
	}
	binarySearch(array, value) {
		debugger;
		let right = array.length - 1;
		let left = 0;
		let midpoint = Math.floor((right + left) / 2);

		while (left < right) {
			if (array[midpoint] === value) {
				return midpoint;
			} else if (array[midpoint] < value) {
				left = midpoint + 1;
			} else if (array[midpoint] > value) {
				right = midpoint - 1;
			}
			midpoint = Math.floor((right + left) / 2);
		}
		return -1;
	}
}
