// 17 Oct 2022
// 1832. Check if the Sentence Is Pangram


class Solution {
public:
      bool checkIfPangram(string s) {
        return set<char>(s.begin(), s.end()).size() == 26;
    }
};
