// 27 June 2023
// 373. Find K Pairs with Smallest Sums

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

var kSmallestPairs = function(nums1, nums2, k) {
    const result = [];
    const minHeap = new Heap((a, b) => a.sum > b.sum);
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeap.add({
            indexes: [i, 0],
            sum: nums1[i] + nums2[0]
        });
    }
    let count = 0;
    while (minHeap.size() && count < k) {
        const node = minHeap.pop();
        const [i, j] = node.indexes;
        const nextJ = j + 1;
        count++;
        result.push([nums1[i], nums2[j]]);
        if (nextJ < nums2.length) {
            minHeap.add({
                indexes: [i, nextJ],
                sum: nums1[i] + nums2[nextJ]
            });
        }
    }
    return result;
};

class Heap {
    constructor(comparator) {
        this.values = [];
        this.fn = comparator || Heap.minComparator;
    }

    size() {
        return this.values.length;
    }
    
    isEmpty() {
        return this.size() === 0;
    }

    pop() {
        return this.remove(this.values[0]);
    }

    peek() {
        return this.values[0];
    }

    add(value) {
        this.values.push(value);
        this.#bubbleUp(this.size() - 1);
    }

    remove(value) {
        const index = this.values.indexOf(value);
        // If value is not in heap, return
        if (index === -1) {
            return undefined;
        }
        if (index === this.size() - 1) {
            return this.values.pop();
        }
        this.#swap(index, this.size() - 1);
        const val = this.values.pop();
        this.#bubbleDown(this.#bubbleUp(index));
        return val;
    }

    #swap(index_1, index_2) {
        const temp = this.values[index_1];
        this.values[index_1] = this.values[index_2];
        this.values[index_2] = temp;
    }

    #compare(index_1, index_2) {
        return this.fn(this.values[index_1], this.values[index_2]);
    }

    #bubbleUp(index) {
        // If index is 0, we are at the root
        if (index === 0) {
            return index;
        }
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.#compare(parentIndex, index)) {
            this.#swap(parentIndex, index);
            this.#bubbleUp(parentIndex);
        }
        return index;
    }

    #bubbleDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let largestIndex = index;
        if (leftChildIndex < this.size() && this.#compare(largestIndex, leftChildIndex)) {
            largestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.size() && this.#compare(largestIndex, rightChildIndex)) {
            largestIndex = rightChildIndex;
        }
        if (largestIndex !== index) {
            this.#swap(index, largestIndex);
            this.#bubbleDown(largestIndex);
        }
        return index;
    }
}

Heap.minComparator = (a, b) => a > b;
Heap.maxComparator = (a, b) => a < b;
