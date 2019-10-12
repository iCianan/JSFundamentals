export function findClosestValueInBst(tree, target) {
	let current = tree;
	let closest = target - Infinity;
	while (current) {
		if (Math.abs(target - closest) > Math.abs(target - current.value)) closest = current.value;
		if (current.value > target) {
			if (!current.left) return closest;
			else current = current.left;
		} else {
			if (!current.right) return closest;
			else current = current.right;
		}
	}
}
