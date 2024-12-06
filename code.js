import java.util.PriorityQueue;

function dijkstra(graph, sourceNode) {
    var DijMatrix = [];
    boolean visited = [];
    var check, dist;
    var inf = 999;
    PriorityQueue<integer> priority = new PriorityQueue<>();

    for (var i = 0; i < graph.length; i++) {
        if (i == 0){
            DijMatrix[i] = 0;
            visited.push(true);
        }
        else {
            DijMatrix[i] = inf;
            visited.push(false);
        }
    }
    priority.add(0, 0);

    while (!priority.isEmpty()) {
        check = priority.poll();
        for (var i = 0; i < graph.length; i++) {
            if (graph[check][i] > 0) {
                dist = DijMatrix[check] + graph[check][i];
                if (dist < DijMatrix[i]) {
                    DijMatrix[i] = dist;
                    if (!visited[i]) {
                        priority.add(i, DijMatrix[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix;
}
