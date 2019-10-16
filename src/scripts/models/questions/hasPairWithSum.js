export function hasPairWithSum(arr, sum) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) return true;
		}
	}
}

export function hasPairWithSum2(arr, sum) {
	let mySet = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (mySet.has(arr[i])) return true;
		else mySet.add(sum - arr[i]);
	}
	return false;
}
