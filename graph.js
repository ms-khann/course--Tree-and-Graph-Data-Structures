class Graph {
    constructor() {
        this.adjList = {};
    }
    addNode(node) {
        this.adjList[node.value] = {
            node: node,
            edges: [],
        };
    }
    addEdge(node1, node2) {
        this.adjList[node1.value].edges.push(node2);
        this.adjList[node2.value].edges.push(node1);
    }
    removeNode(node) {
        delete this.adjList[node.value];
        const nodes = Object.keys(this.adjList);
        nodes.forEach((current) => {
            const current_edge = this.adjList[current].edges;
            const index = current_edge.indexOf(node);
            if (index > -1) {
                current_edge.splice(index, 1);
            }
        });
    }
    // Practice Functions DFS,BFS
    DFS(startNode, fun = console.log) {
        let stack = [];
        let visited = {};
        stack.push(startNode);
        visited[startNode] = true;
        while (stack.length) {
            let current = stack.pop();
            let neighbours = this.adjList[current];
            fun(current);
            neighbours.forEach((node) => {
                if(!visited[node]){
                    stack.push(node);
                    visited[node] = true;
                }
            });
        }
    }
    BFS(startNode,fun = console.log){
        let queue = [];
        let visited = {};
        queue.push(startNode);
        visited[startNode] = true;
        while(queue.length){
            let current = queue.shift();
            let neighbours = this.adjList[current];
            fun(current);
            neighbours.forEach(neighbour => {
                if(!visited[neighbour]){
                    queue.push(neighbour);
                    visited[neighbour] = true;
                }
            });
        }
    }
}

let myGraph = new Graph();
let node1 = { value: 1 };
let node2 = { value: 2 };
let node3 = { value: 3 };
myGraph.addNode(node1);
myGraph.addNode(node2);
myGraph.addNode(node3);
myGraph.addEdge(node1, node2);
myGraph.addEdge(node3, node1);
myGraph.removeNode(node3);

console.log(myGraph);
