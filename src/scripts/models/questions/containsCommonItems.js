export function containsCommonItems(arr1, arr2) {
	let map = {};
	for (const i of arr1) map[i] = true;
	for (const j of arr2) if (map[j]) return true;
	return false;
}

export function containsCommonItems2(arr1, arr2) {
	return arr1.some((item) => arr2.includes(item));
}
