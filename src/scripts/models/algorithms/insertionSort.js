export function insertionSort(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] < numbers[0]) {
			numbers.unshift(numbers.splice(i, 1)[0]);
		} else {
			for (let j = 1; j < i; j++) {
				if (numbers[i] > numbers[j - 1] && numbers[i] < numbers[j]) {
					numbers.splice(j, 0, numbers.splice(i, 1)[0]);
				}
			}
		}
	}
	return numbers;
}
