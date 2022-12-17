// 17 Dec 2022
// 150. Evaluate Reverse Polish Notation

class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int>st;
        for(auto it:tokens){
            if(it=="+" || it=="-" || it =="*" || it=="/"){
                long long p1=st.top();
                st.pop();
                long long p2=st.top();
                st.pop();
                (it=="+") ? st.push(p1+p2) : 
                      (it =="-") ? st.push(p2-p1) : 
                            (it=="*") ? st.push(p2*p1) : st.push(p2/p1);
            }else{
                st.push(stoi(it));
            }
        }
        return st.top();
    }
};
