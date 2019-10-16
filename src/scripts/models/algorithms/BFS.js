export function BFS(root) {
	let toVisit = [];
	let visted = [];
	let current = root;
	toVisit.push(current);
	while (toVisit.length > 0) {
		current = toVisit.shift();
		visted.push(current);
		if (current.left) toVisit.push(current.left);
		if (current.right) toVisit.push(current.right);
	}
	return visted;
}
const breadthFirstSearch = (visted) => {
	let toVisit = [ this ];
	while (toVisit.length) {
		let current = toVisit.shift();
		visted.push(current.name);
		if (current.children.length) {
			toVisit = [ ...toVisit, ...current.children ];
		}
	}
	return visted;
};
