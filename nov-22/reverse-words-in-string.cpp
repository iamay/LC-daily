// 13 Nov 2022
// 151. Reverse Words in a String

class Solution {
public:
     string reverseWords(string s) {
        vector<string> words;
        stringstream ss(s);
        string tmp;
        while (ss >> tmp)
            words.push_back(tmp);

        string ans;
        for (int i = words.size() - 1; i >= 0; --i) {
            if (i != words.size() - 1) ans += " ";
            ans += words[i];
        }
        return ans;
    }
};   
