export function binarySearch(array, value) {
	let high = array.length - 1;
	let low = 0;
	let mid = Math.floor((high + low) / 2);

	while (low <= high) {
		if (array[mid] === value) {
			return mid;
		} else if (array[mid] < value) {
			low = mid + 1;
		} else if (array[mid] > value) {
			high = mid - 1;
		}
		mid = Math.floor((high + low) / 2);
	}
	return -1;
}
export function binarySearchRecursive(array, value, low, high) {
	if (low > high) {
		return -1;
	}
	let mid = Math.floor((low + high) / 2);
	if (array[mid] < value) {
		return this.binarySearchRecursive(array, value, mid + 1, high);
	} else if (array[mid] > value) {
		return this.binarySearchRecursive(array, value, low, mid - 1);
	} else {
		return mid;
	}
}
