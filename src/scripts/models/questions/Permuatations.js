// Write a function that takes in an array of unique integers and returns an array of all permutations of those integers.
// If the input array is empty, your function should return an empty array.
export function getPermutations(array) {
	const permutations = [];
	debugger;
	permutationsHelper(array, [], permutations);
	return permutations;
}
function permutationsHelper(array, currentPermuation, permutations) {
	if (!array.length && currentPermuation.length) {
		permutations.push(currentPermuation);
	} else {
		for (let i = 0; i < array.length; i++) {
			const newArray = array.slice(0, i).concat(array.slice(i + 1));
			const newPermuation = currentPermuation.concat([ array[i] ]);
			permutationsHelper(newArray, newPermuation, permutations);
		}
	}
}

export function getPermutationsBetter(array) {
	const permutations = [];
	permutationsHelperBetter(0, array, permutations);
	return permutations;
}
function permutationsHelperBetter(i, array, permuatations) {
	if ((i = array.length - 1)) {
		permuatations.push(array.slice());
	} else {
		for (let j = i; j < array.length; j++) {
			swap(i, j, array);
			permutationsHelperBetter(i + 1, array, permutations);
			swap(i, j, array);
		}
	}
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
