export class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}
	addVertex(node) {
		if (!this.adjacentList[node]) {
			this.adjacentList[node] = [];
		}
	}
	addEdge(node1, node2) {
		if (this.adjacentList[node1] && this.adjacentList[node2]) {
			this.adjacentList[node1].push(node2);
			this.adjacentList[node2].push(node1);
		}
	}
	showConnections() {}
}
