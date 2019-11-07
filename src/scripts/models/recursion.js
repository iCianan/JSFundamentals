export let countdown = (num) => {
	if (num === 0) return;
	console.log(num);
	countdown(num - 1);
};

export let makeTree = (categories, parent) => {
	let node = {};
	categories
	.filter((c) => c.parent === parent)
	.forEach((c) => (node[c.id] = 
		makeTree(categories, c.id)));

	return node;
};
