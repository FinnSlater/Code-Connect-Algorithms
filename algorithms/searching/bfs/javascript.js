// Input: { graph: { nodes: [...], edges: [...] }, start: nodeId }
function bfs(graph=data["graph"], start=data["start"]) {
  const visited = new Set();
  const queue = [start];
  const order = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.has(node)) {
      visited.add(node);
      order.push(node);
      for (const edge of graph.edges) {
        if (edge.from === node && !visited.has(edge.to)) {
          queue.push(edge.to);
        }
      }
    }
  }

  return order;
}
