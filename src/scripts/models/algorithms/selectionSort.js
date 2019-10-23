// low = -ini
// 5,9,-7,41,32,12

export function selectionSort(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		let temp = numbers[i];
		let min = i;
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[j] < numbers[min]) {
				min = j;
			}
		}
		numbers[i] = numbers[min];
		numbers[min] = temp;
	}
	return numbers;
}
