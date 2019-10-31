// Write a function that takes in two non-empty arrays of integers.
// The function should find the pair of numbers (one from the first array, one from the second array) whose absolute difference is closest to zero.
// The function should return an array containing these two numbers, with the number from the first array in the first position.
// Assume that there will only be one pair of numbers with the smallest difference.

export function smallestDifference(array1, array2) {
	let smallestSeen = Infinity;
	let results = [];
	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if (Math.abs(array1[i] - array2[j]) < smallestSeen) {
				smallestSeen = Math.abs(array1[i] - array2[j]);
				results = [ array1[i], array2[j] ];
			}
		}
	}
	return results;
}
