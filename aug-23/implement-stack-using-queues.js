// 28 Aug 2023
// 225. Implement Stack using Queues

class MyStack {
  
constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        return this.q.shift();
    }

    top() {
        return this.q[0];
    }

    empty() {
        return this.q.length === 0;
    }
}
