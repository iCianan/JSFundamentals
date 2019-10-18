export function reverse(str) {
	let stack = [];
	let results = '';
	for (const i of str) stack.push(i);
	for (const i of str) results += stack.pop();
	return results;
}

export function reverseBetter(str) {
	if (!str || str.length < 2) return 'Nothing to reverse';
	let temp = '';
	let i = 0;
	let j = str.length - 1;
	while (i <= j) temp += str[j--];
	return temp;
}

export function reverseBetter2(str) {
	return str.split('').reverse().join('');
}

export const reverseBest = (str) => [ ...str ].reverse().join('');
