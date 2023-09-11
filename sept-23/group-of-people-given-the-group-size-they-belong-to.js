// 11 Sept 2023
// 1282. Group the People Given the Group Size They Belong To
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
    if (!groupSizes.length) return [];

    const result = [];
    const map = new Map();

    for (let i = 0; i < groupSizes.length; i++) {
        const groupSize = groupSizes[i];

        if (!map.get(groupSize)) map.set(groupSize, []);
        map.get(groupSize).push(i);

        if (map.get(groupSize).length === groupSize) {
            result.push(map.get(groupSize));
            map.delete(groupSize);
        }
    }

    return result;

};
