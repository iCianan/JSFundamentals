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
			if (n <= 2) {
				return 1;
			} else {
				cache[n] = fib(n - 1) + fib(n - 2);
				return cache[n];
			}
		}
	};
}

export function fibPro(n, memo = []) {
	if (memo[n !== undefined]) return memo[n];
	if (n <= 2) return 1;
	let results = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = results;
	return results;
}
