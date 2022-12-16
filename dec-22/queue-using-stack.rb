// 16 Dec 2022
// 232. Implement Queue using Stacks

class MyQueue
    def initialize
        @in, @out = [], []
    end

    def push(x)
        @in << x
    end

    def pop
        peek
        @out.pop
    end

    def peek
        @out << @in.pop until @in.empty? if @out.empty?
        @out.last
    end

    def empty
        @in.empty? && @out.empty?
    end
end
