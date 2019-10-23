export function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
}
export function merge(arr1, arr2) {
	let results = [];
	let j = 0;
	let i = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] >= arr1[i]) results.push(arr1[i++]);
		else results.push(arr2[j++]);
	}
	while (i < arr1.length) results.push(arr1[i++]);
	while (j < arr2.length) results.push(arr2[j++]);
	return results;
}
