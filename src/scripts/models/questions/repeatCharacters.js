//find first recurrning character
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
		if (count[array[i]] > 1) return i;
	}
}
