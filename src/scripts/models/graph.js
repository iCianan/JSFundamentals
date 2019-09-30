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
			this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
			this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
		}
	}
	removeVertex(vertex) {
		if (this.adjacencyList[vertex]) {
			for (const edge of this.adjacencyList[vertex]) {
				this.adjacencyList[edge] = this.adjacencyList[edge].filter((v) => v !== vertex);
			}
			delete this.adjacencyList[vertex];
		}
	}
	depthFirstRecursive(start) {
		let results = [];
		let visted = {};
		let adjacencyList = this.adjacencyList;
		(function SearchNeighbors(v) {
			if (!v) return null;
			visted[v] = true;
			results.push(v);
			for (const neighbor of adjacencyList[v]) {
				if (!visted[neighbor]) {
					SearchNeighbors(neighbor);
				}
			}
		})(start);
	}
}
