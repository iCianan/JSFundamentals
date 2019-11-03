// O(n^2) time | O(1) space
export function twoNumberSum(array, target) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				if (array[i] > array[j]) {
					return [ array[j], array[i] ];
				} else {
					return [ array[j], array[i] ];
				}
			}
		}
	}
	return [];
}

export function twoNumberSumBetter(array, target) {
	let cache = {};
	for (const item of array) {
		let match = target - item;
		if (match in nums) {
			return [ match, num ].sort((a, b) => a - b);
		} else {
			cache[item] = true;
		}
	}
	return [];
}
