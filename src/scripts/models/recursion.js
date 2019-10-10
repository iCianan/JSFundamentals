export function ArraySum(integers) {
	let length = integers.length;
	if (length <= 0) return 0;
	let lastNumber = integers[length - 1];
	let allButLast = this.arraySumIterative(integers.slice(0, length - 1));
	return lastNumber + allButLast;
}

// O(2^n) time | O(n) space
export function GetNthFib(number) {
	if (number === 2) return 1;
	if (number === 1) return 0;
	else return GetNthFib(number - 1) + GetNthFib(number - 2);
}
// O(n) time | O(n) space
export function BetterGetNthFib(number, memoize = { 1: 0, 2: 1 }) {
	if (memoize.hasOwnProperty(number)) {
		return memoize[number];
	} else memoize[number] = BetterGetNthFib(number - 1, memoize) + BetterGetNthFib(number - 2, memoize);
	return memoize[number];
}
export function BestGetNthFib(number) {
	let lastTwo = [ 0, 1 ];
	let counter = 3;
	while (counter <= number) {
		let nextFib = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = nextFib;
		counter++;
	}
	if (number > 1) return lastTwo[1];
	else return lastTwo[0];
}

export function Fact(n) {
	if (n === 1) return 1;
	return n * Fact(n - 1);
}

export function EvenNumbers(array) {
	if (array.length === 0) {
		return 0;
	}
	let count = 0;
	let lastNumber = array[array.length - 1];
	let allButLast = EvenNumbers(array.slice(0, array.length - 1));
	if (lastNumber % 2 === 0) {
		count += 1;
	}
	return count + allButLast;
}
export function BetterEvenNumbers(array) {
	if (array.length === 0) return 0;
	let lastNumber = array[array.length - 1];
	let count = BetterEvenNumbers(array.slice(0, array.length - 1));
	if (lastNumber % 2 === 0) count++;
	return count;
}

export function countNegatives(head) {
	if (!head) return 0;
	let listCount = countNegatives(head.next);
	if (head.val < 0) listCount++;
	return listCount;
}

export function findLargestNumber(root) {}
