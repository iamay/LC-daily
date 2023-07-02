// 02 July 2023
// 1601. Maximum Number of Achievable Transfer Requests

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
	let max = 0;
	const buildings = Array(n).fill(0),
		visited = {},
		checkBuildings = () => {
			for (const b of buildings) if (b) return false;
			return true;
		},
		dfs = (acceptedRequests, numberOfAcceptedRequests) => {
		    visited[acceptedRequests] = true;
			if (numberOfAcceptedRequests <= max) return;
			if (checkBuildings()) {
				max = numberOfAcceptedRequests;
				return;
			}
			let nextState;
			for (let i = 0; i < requests.length; i++) {
				nextState = acceptedRequests & ~(1 << i);
				if (!visited[nextState]) {
					buildings[requests[i][0]]++;
					buildings[requests[i][1]]--;
					dfs(nextState, numberOfAcceptedRequests - 1);
					buildings[requests[i][0]]--;
					buildings[requests[i][1]]++;
				}
			}
		};
	for (const [_from, _to] of requests) {
		buildings[_from]--;
		buildings[_to]++;
	}
	dfs((1 << requests.length) - 1, requests.length);
	return max;
};
