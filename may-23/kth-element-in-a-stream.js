// 23 May 2023
// 703. Kth Largest Element in a Stream

/**
 * @param {number} k
 * @param {number[]} nums
 */
class MinHeap {
  // data is an array
  constructor(data) {
    this.data = data || [];
    this.heapify();
  }
  heapify() {
    if (this.size() < 2) return;
    for (let i = 0; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  // get the min value of the heap
  peak() {
    if (this.isEmpty()) return null;
    return this.data[0];
  }
  // pop the min value, then reset it
  poll() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.data.pop();
    const val = this.data[0];
    this.data[0] = this.data.pop();
    this.bubbleDown(0);
    return val;
  }
  // add a value
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }
  // swap the element located in i with the element located in index j
  swap(i, j) {
    if (i === j) return;
    if (i >= this.size() || j >= this.size() || i < 0 || j < 0) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.data[index] >= this.data[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  bubbleDown(index) {
    while (index < this.size() - 1) {
      const leftIndex = 2 * index + 1;
      const rightIndex = 2 * index + 2;
      let minIndex = index;
      if (this.data[leftIndex] < this.data[minIndex]) minIndex = leftIndex;
      if (this.data[rightIndex] < this.data[minIndex]) minIndex = rightIndex;
      if (index === minIndex) break;
      this.swap(index, minIndex);
      index = minIndex;
    }
  }
}

var KthLargest = function(k, nums) {
    this.heap = new MinHeap(nums);
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.heap.offer(val);
    while(this.heap.size() > this.k) {
        this.heap.poll();
    } 
    return this.heap.peak();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
