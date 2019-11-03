// Given an array of positive integers representing coin denominations and a single non-negative integer representing a target amount of money,
// implement a function that returns the number of ways to make change for that target amount using the given coin denominations.
// Note that an unlimited amount of coins is at your disposal.
// Sample input = [1,5] , 6
// Sample output = 2 (1x1 + 5x1, 1x6)

export function coinChange(denominations, target) {
	let ways = new Array(target + 1).fill(0);
	ways[0] = 1;
	for (let denom of denominations) {
		for (let amount = 1; amount < target + 1; amount++) {
			if (denom <= amount) {
				ways[amount] += ways[amount - denom];
			}
		}
	}
	return ways[target];
}

export function makeChange() {
	let coins = [ 10, 6, 1 ];
	return function changeMaker(n) {
		if (n === 0) return 0;
		let minCoins = Infinity;
		for (const coin of coins) {
			if (n - coin >= 0) {
				let currentMinCoins = changeMaker(n - coin);
				if (currentMinCoins < minCoins) {
					minCoins = currentMinCoins;
				}
			}
		}
		return minCoins + 1;
	};
}

export function makeChangeMaster() {
	let coins = [ 10, 6, 1 ],
		cache = {};
	return function changeMaker(n) {
		if (n in cache) return cache[n];
		if (n === 0) return 0;
		let minCoins = Infinity;
		for (const coin of coins) {
			if (n - coin >= 0) {
				cache[n] = changeMaker(n - coin);
				if (cache[n] < minCoins) {
					minCoins = cache[n];
				}
			}
		}
		cache[n] = minCoins + 1;
		return cache[n];
	};
}

export function makeChangeSensei() {
	let coins = [ 10, 6, 1 ];
	let cache = {};
	return function changeMaker(n) {
		if (n in cache) return cache[n];
		if (n === 0) return 0;
		let minCoins = Infinity;
		for (const coin of coins) {
			if (n - coin >= 0) {
				cache[n] = changeMaker(n - coin);
				if (cache[n] < minCoins) {
					minCoins = cache[n];
				}
			}
		}
		cache[n] = minCoins + 1;
		return cache[n];
	};
}
