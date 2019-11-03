export function getNthFib(number) {
	if (number === 2) {
		return 1;
	} else if (number === 1) {
		return 0;
	} else {
		return getNthFib(number - 1) + getNthFib(number - 2);
	}
}

export function fibonacciMaster() {
	let cache = {};
	return function fib(n) {
		if (n in cache) {
			return cache[n];
		} else {
			if (n < 2) {
				return n;
			} else {
				cache[n] = fib(n - 1) + fib(n - 2);
				return cache[n];
			}
		}
	};
}
// O(n) time | O (n)  space
export function fibPro(n, memo = []) {
	if (memo[n !== undefined]) return memo[n];
	if (n <= 2) return 1;
	let results = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = results;
	return results;
}

// O(n) time | O (1)  space
export function tabFib(n) {
	if (n <= 2) return 1;
	let fibNums = [ 0, 1, 1 ];
	for (let i = 2; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}
	return fibNums[n];
}

export function optimizedTabFib(n) {
	if (n <= 2) return n;
	let n1 = 1,
		n2 = 0;
	for (let i = 2; i < n; i++) {
		let n0 = n1 + n2;
		n2 = n1;
		n1 = n0;
	}
	return n1 + n2;
}

// O(2^n) time | O(n) space
export function fib(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fib(n - 1) + fib(n - 2);
}

export function fibber(n) {
	if (n < 2) return n;
	let cache = new Array(n + 1).fill(-1);
	cache[0] = 0;
	cache[1] = 1;
	return fibHelper(n, cache);
}
function fibHelper(n, cache) {
	if (cache[n] >= 0) {
		return cache[n];
	}
	cache[n] = fibHelper(n - 1, cache) + fib(n - 2, cache);
	return cache[n];
}
