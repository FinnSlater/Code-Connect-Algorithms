// input: { graph: { nodes: [...], edges: [...] }, target: int }
function bfs(input) {
  const { graph, target } = input;
  const visited = new Set();
  const queue = [];
  const parent = {};

  const start = graph.nodes[0];
  if (start === undefined) return null;

  queue.push(start);
  visited.add(start);
  parent[start] = null;

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === target) {
      // reconstruct path from start to target
      const path = [];
      let curr = node;
      while (curr !== null) {
        path.unshift(curr);
        curr = parent[curr];
      }
      return path;
    }

    for (const edge of graph.edges) {
      if (edge.from === node && !visited.has(edge.to)) {
        visited.add(edge.to);
        parent[edge.to] = node;
        queue.push(edge.to);
      }
    }
  }

  return null; // target not reachable
}
