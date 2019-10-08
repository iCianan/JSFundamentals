export function countCharacters(string) {
	let results = {};
	for (const char of string) {
		if (!results.hasOwnProperty(char)) results[char] = 1;
		else results[char]++;
	}
	return results;
}

export function betterCountCharacters(string) {
	let results = new Array(65535);
	for (let char = 0; char < string.length; char++) {
		let code = string.charCodeAt(char);
		if (!results[code]) results[code] = 1;
		else results[code]++;
	}
	return results;
}

export function isAnagram(string1, string2) {
	let left = countCharacters(string1);
	let right = countCharacters(string2);
	if (JSON.stringify(left) === JSON.stringify(right)) {
		return true;
	}
	return false;
}

export function isAnagramBetter(string1, string2) {
	if (string1.length !== string2.length) {
		return false;
	}
	let leftArr = string1.split('');
	let left = leftArr.sort();
	let rightArr = string2.split('');
	let right = rightArr.sort();

	for (let i = 0; i < left.length; i++) {
		if (left[i] !== right[i]) {
			return false;
		}
	}
	return true;
}
export function reverseString(s) {
	let i = 0;
	let j = s.length - 1;
	let temp;
	while (j > i) {
		temp = s[i];
		s[i] = s[j];
		s[j] = temp;
		i++;
		j--;
	}
}
