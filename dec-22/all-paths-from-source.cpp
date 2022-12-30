// 30 Dec 2022
// 797. All Paths From Source to Target

class Solution {
public:
    vector<vector<int>> ans;
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& G) {
        vector<int> path;
        dfs(G, 0, path);
        return ans;
    }
    void dfs(vector<vector<int>>& G, int i, vector<int>& path) {
        path.push_back(i);                            // add current node to path
        if(i == size(G)-1) ans.push_back(path);       // valid path found
        else 
            for(auto child : G[i])  
                dfs(G, child, path);                  // recurse for every possible next node in path
        path.pop_back();                              // backtrack
    }
};
