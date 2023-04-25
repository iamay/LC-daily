// 25 April 2023
// 2336. Smallest Number in Infinite Set

var SmallestInfiniteSet = function() {
  
    this.set=new Set()
    this.min=new MinPriorityQueue()

    for (let i=1;i<=1000;i++){
        this.set.add(i)
        this.min.enqueue(i)
    }
    
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {

    let ans=this.min.dequeue().element
    this.set.delete(ans)

    return ans
    
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {

    if(!this.set.has(num)){
        this.min.enqueue(num)
        this.set.add(num)

    }
    
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
