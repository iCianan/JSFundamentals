export function getNthFib(number) {
	if (number === 2) {
		return 1;
	} else if (number === 1) {
		return 0;
	} else {
		return getNthFib(number - 1) + getNthFib(number - 2);
	}
}
