// 26 June 2023
// 2462. Total Cost to Hire K Workers

var totalCost = function(costs, k, candidates) {
    const first = new MinHeap();
    const last = new MinHeap();
    let totalCost = 0;
    for (let i = 0; i < candidates; i++) {
        const addCost = costs.shift();
        first.insert(addCost);
    }
    for (let i = 0; i < candidates; i++) {
        if (costs.length) {
            const addCost = costs.pop();
            last.insert(addCost);
        }
    }
    while (k > 0) {
        if (last.size() === 0 || (first.size() > 0 && first.getMin() <= last.getMin())) {
            totalCost += first.remove();
            if (costs.length) {
                first.insert(costs.shift());
            }
        } else {
            totalCost += last.remove();
            if (costs.length) {
                last.insert(costs.pop());
            }
        }
        k--;
    }
    return totalCost;
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getMin() {
        if (this.heap.length) return this.heap[0];
        return null;
    }

    insert(node) {
        this.heap.push(node);
        if (this.heap.length > 1) {
            let currentIdx = this.heap.length - 1;
            while (currentIdx > 0) {
                let current = this.heap[currentIdx];
                let parentIdx = Math.floor((currentIdx - 1) / 2);
                let parent = this.heap[parentIdx]
                if (parent > current) {
                    this.heap[parentIdx] = current;
                    this.heap[currentIdx] = parent;
                    currentIdx = parentIdx;
                } else break;
            }
        }
    }

    remove() {
        if (this.heap.length > 0) {
        if (this.heap.length === 1) return this.heap.pop();
        let smallest = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentIdx = 0;

        while (true) {
            let current = this.heap[currentIdx];
            let leftChildIdx = currentIdx * 2 + 1;
            let rightChildIdx = currentIdx * 2 + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIdx < this.heap.length) {
                leftChild = this.heap[leftChildIdx];
                if (current > leftChild) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < this.heap.length) {
                rightChild = this.heap[rightChildIdx];
                if ((!swap && current > rightChild) || (swap && rightChild < leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[currentIdx] = this.heap[swap];
            this.heap[swap] = current;
            currentIdx = swap;
        }
            return smallest;
        } else {
            return null;
        }
    }

    size() {
        return this.heap.length;
    }  
}
