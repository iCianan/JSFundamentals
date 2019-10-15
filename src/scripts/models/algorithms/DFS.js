export function DFSPreOrder(root, array) {
	let current = root;
	function PreOrderHelper(node, array) {
		array.push(node.value);
		if (node.left) PreOrderHelper(node.left, array);
		if (node.right) PreOrderHelper(node.right, array);
	}
	PreOrderHelper(current, array);
	return array;
}

export function DFSInOrder(root, array) {
	let current = root;
	function InOrderHelper(node, array) {
		if (node.left) InOrderHelper(node.left, array);
		array.push(node.value);
		if (node.right) InOrderHelper(node.right, array);
	}
	InOrderHelper(current, array);
	return array;
}
export function DFSPostOrder(root, array) {
	let current = root;
	function PostOrderHelper(node, array) {
		if (node.left) PostOrderHelper(node.left, array);
		if (node.right) PostOrderHelper(node.right, array);
		array.push(node.value);
	}
	PostOrderHelper(current, array);
	return array;
}

export function DFSPostOrder2(node, array) {
	if (!node) return;
	DFSPostOrder2(node.left, array);
	DFSPostOrder2(node.right, array);
	array.push(node.value);
	return array;
}

export function DFSInOrder2(node, array) {
	if (!node) return;
	DFSPostOrder2(node.left, array);
	array.push(node.value);
	DFSPostOrder2(node.right, array);
	return array;
}
