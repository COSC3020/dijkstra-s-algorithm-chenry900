import java.util.PriorityQueue;

function dijkstra(graph, sourceNode) {
    boolean[] visited = new boolean[graph.length];
    var[] dist = new var[n];
    var inf = 999;
    PriorityQueue<Node> priority = new PriorityQueue<>(node, node.distance);

    for (var i = 0; i < graph.length; i++) {
        if (i == 0){
            dist[i] = 0;
            visited[i] = true;
        }
        else {
            dist[i] = inf;
            visited[i] = false;
        }
    }
    priority.add(0, 0);

    while (!priority.isEmpty()) {
        check = priority.pull();
        for (var i = 0; i < graph.length; i++) {
            if (graph[check][i] > 0) {
                var newdist = dist[check[0]] + graph[check[0]][i];
                if (newdist < dist[i]) {
                    dist[i] = newdist;
                    if (!visited[i]) {
                        priority.add(i, dist[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix;
}
