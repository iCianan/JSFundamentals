//find first recurrning character

//brute force
//time O(n^2) | space O(1)
export function repeatChar(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] === array[i]) {
				return array[i];
			}
		}
	}
	return undefined;
}

//time O(n) space O(n)
export function repeatCharacters(array) {
	let count = new Map();
	for (const item of array) {
		if (!count[item]) {
			count[item] = 1;
		} else {
			count[item]++;
		}
	}
	for (let i = 0; i < array.length; i++) {
		if (count[array[i]] > 1) return array[i];
	}
	return undefined;
}
