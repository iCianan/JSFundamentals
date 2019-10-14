export function validateBST(root) {
	let toVisit = [];
	let visted = [];
	let max = Infinity;
	let min = -Infinity;
	let current = root;
	toVisit.push(current);
	while (toVisit.length > 0) {
		current = toVisit.shift();
		max = current.value;
		visted.push(current);
		if (min < current.value < max) {
			toVisit.push(current.left);
		}
		if (min > current.value > max) {
			toVisit.push(current.right);
		} else return false;
	}
	return true;
}

export function validateBSTRecursive(root) {
	return validateBSTHelper(root, -Infinity, Infinity);
}
function validateBSTHelper(tree, min, max) {
	if (!tree) return true;
	if (tree.value < min || tree.value >= max) {
		return false;
	}
	let left = validateBSTHelper(tree.left, min, tree.value);
	return left && validateBSTHelper(tree.right, tree.value, max);
}
