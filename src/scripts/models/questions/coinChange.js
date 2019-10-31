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
