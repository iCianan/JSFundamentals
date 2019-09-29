export class Graph {
	constructor() {
		this.adjacencyList = {};
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}
	addEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			this.adjacencyList[v1].push(v2);
			this.adjacencyList[v2].push(v1);
		}
	}
	removeEdge(v1, v2) {
		if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
			for (let i = 0; i < this.adjacencyList[v1].length; i++) {
				if (this.adjacencyList[v1][i] == v2) {
					this.adjacencyList[v1].splice(i, 1);
				}
			}
			for (let i = 0; i < this.adjacencyList[v2].length; i++) {
				if (this.adjacencyList[v2][i] == v1) {
					this.adjacencyList[v2].splice(i, 1);
				}
			}
		}
	}
}
