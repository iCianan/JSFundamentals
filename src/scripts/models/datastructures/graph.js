import Queue from './queue';
export class Graph {
	constructor() {
		this.numberOfNodes = 0;
		this.adjacentList = {};
	}
	addVertex(node) {
		if (!this.adjacentList[node]) {
			this.adjacentList[node] = [];
			this.numberOfNodes++;
		}
	}
	addEdge(node1, node2) {
		if (this.adjacentList[node1] && this.adjacentList[node2]) {
			this.adjacentList[node1].push(node2);
			this.adjacentList[node2].push(node1);
		}
	}
	BFS(vertex) {
		let explored = {};
		let results = [];	
		let queue = Queue();
		explored[vertex] = true;
		queue.enqueue(vertex);
		let currentVertex;
		while(queue.size !== 0){
			currentVertex = queue.dequeue();
			results.push(currentVertex);
			for (const neighbor in this.adjacentList[vertex]) {
				if (!explored[neighbor]) {
					explored[neighbor] = true;
					queue.enqueue(neighbor);						
				}
			}
			
		}
		return results; 
	}
	DFS() {}
}
