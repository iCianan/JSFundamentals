// Given a 2D boolean array, find the largest square subarray of
// true values. The return value should be the side length of the
// largest square subarray subarray.

export function squareSubmatrix(boolArray) {
	let max = 0;
	for (let i = 0; i < boolArray.length; i++) {
		for (let j = 0; j < boolArray[0].length; j++) {
			if (boolArray[i][j]) {
				max = Math.max(max, squareSubmatrixHelper(boolArray, i, j));
			}
		}
	}
	return max;
}

function squareSubmatrixHelper(boolArray, i, j) {
	if (i === boolArray.length || j === boolArray[0].length) {
		return 0;
	}
	if (!boolArray[i][j]) {
		return 0;
	}
	return (
		1 +
		Math.min(
			Math.min(squareSubmatrixHelper(boolArray, i + 1, j), squareSubmatrixHelper(boolArray, i, j + 1)),
			squareSubmatrixHelper(boolArray, i + 1, j + 1)
		)
	);
}
