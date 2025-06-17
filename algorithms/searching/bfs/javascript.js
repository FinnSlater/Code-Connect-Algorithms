/**
 * Performs Breadth-First Search (BFS) on a graph to find the shortest path
 * from the first node to the target value.
 *
 * @param {Object} input - The input object with a graph and target.
 * @param {Object} input.graph - The graph object containing nodes and edges.
 * @param {Array} input.graph.nodes - Array of nodes, each with a .value.
 * @param {Array} input.graph.edges - Array of edges, each with .from and .to values.
 * @param {number} input.target - The target value to search for.
 * @returns {Array|null} - An array representing the path to the target, or null if unreachable.
 */
function bfs(input) {
  const { graph, target } = input;
  const visited = new Set();
  const parent = {};
  const queue = [];

  // Start from the first node in the list
  const startNode = graph.nodes[0];
  if (!startNode) return null;

  const startValue = startNode.value;
  queue.push(startValue);
  visited.add(startValue);
  parent[startValue] = null;

  while (queue.length > 0) {
    const current = queue.shift();

    // Check if we've reached the target
    if (current === target) {
      const path = [];
      let node = current;
      while (node !== null) {
        path.unshift(node);
        node = parent[node];
      }
      return path;
    }

    // Look for all neighbors of the current node
    for (const edge of graph.edges) {
      if (edge.from === current && !visited.has(edge.to)) {
        visited.add(edge.to);
        parent[edge.to] = current;
        queue.push(edge.to);
      }
    }
  }

  // Target not reachable
  return null;
}
