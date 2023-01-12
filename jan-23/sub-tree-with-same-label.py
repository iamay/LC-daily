// 12 Jan 2023
// 1519. Number of Nodes in the Sub-Tree With the Same Label

class Solution:
    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:
        response = [0] * n
        # Save edges in more usable data structure, to get the list of possible next nodes in the constant time
        node2edges = [[] for _ in range(n)]
        for edge in edges:
            node2edges[edge[0]].append(edge[1])
            node2edges[edge[1]].append(edge[0])
            
        def dfs(nodeId: int, parentNodeId: int, labelCounter: List[int]) -> None:
            # nodeLabelId is an ASCII code of symbol minus 97, because a == 97, b == 98, c == 99, etc, z == 122
            nodeLabelId = ord(labels[nodeId]) - 97
            # save to temporary variable amount of nodes with label same as is for current node.
            # Everything that will be added for this nodeLabelId after, will counts as subtree of this node.
            before = labelCounter[nodeLabelId]
            # Count this node as well
            labelCounter[nodeLabelId] += 1
            # Visit all possible nextNodes
            for nextNodeId in node2edges[nodeId]:
                # except the one we have came from
                if nextNodeId == parentNodeId:
                    continue
                dfs(nextNodeId, nodeId, labelCounter)
            # Set the result for the current node:
            # everything that was added after we saved the "before" variable was added from subtree of this node.
            response[nodeId] = labelCounter[nodeLabelId] - before
        
        # Start with root node (ID 0) and parentNodeId == -1 which is mean that any nextNode is acceptable for the root
        dfs(0, -1, [0] * 26)
        return response
