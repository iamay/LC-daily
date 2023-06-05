// 05 June 2023
// 1232. Check If It Is a Straight Line

var isStraight = function([[ax,ay],[bx,by],[cx,cy]]) {
    return ((by-ay)*(cx-bx)===(cy-by)*(bx-ax));
};

var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true;

    for (let i = 2; i < coordinates.length; i++) {
        if (!isStraight([coordinates[0], coordinates[1], coordinates[i]])) {
            return false;
        }
    }
        
    return true;
};
