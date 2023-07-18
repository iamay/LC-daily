// 18 July 2023
// 146. LRU Cache

class ListNode{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.prev = null; 
        this.next = null; 
    }
}

/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity){
        this.capacity = capacity; 
        this.count = 0; 
        this.hash = {}; 
        this.head = new ListNode();
        this.tail = new ListNode();
        this.head.next = this.tail; 
        this.tail.prev = this.head; 
    }
    
    get(key) {
        //does not exist, return -1 
        if(this.hash[key] == null){
            return -1 
        }
        //exists, get the node 
        let node = this.hash[key]; 

        //delete the original node 
        this.deleteNode(node); 

        //add this node to head 
        this.addToHead(node); 
        //return value 
        return node.value; 
    }

    put(key, value) {
        let node = this.hash[key]; 
        //if it's new
        if(node == null){
            this.count++; 
            //if more than capacity, remove the last element 
            if(this.count > this.capacity){
                this.deleteNode(this.tail.prev); 
            }
        }else{
            //delete the original node 
            this.deleteNode(node); 
        }
        let newNode = new ListNode(key, value); 
        this.hash[key] = newNode; 
        this.addToHead(newNode); 
    }
    
    deleteNode(node){
        let prev = node.prev; 
        let next = node.next; 
        prev.next = next; 
        next.prev = prev; 
        delete this.hash[node.key]; 
    }
    
    addToHead(node){
        this.hash[node.key] = node
        node.next = this.head.next; 
        node.prev = this.head; 
        node.next.prev = node; 
        this.head.next = node; 
    }
};
