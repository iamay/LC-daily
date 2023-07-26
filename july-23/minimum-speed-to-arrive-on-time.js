// 26 July 2023
// 1870. Minimum Speed to Arrive on Time

var minSpeedOnTime = function(dist, hour) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const n = dist.length;
    
    let left = 1;
    let right = 1e9 + 7;
    
    let minSpeed = MAX;
    
    while (left < right) {
        const mid = (left + right) >> 1;

        const hrsNeeded = computeTravelTime(mid);

        if (hrsNeeded > hour) {
            left = mid + 1;
        }
        else {
            minSpeed = Math.min(minSpeed, mid);
            right = mid;
        }
    }
   
    return minSpeed === MAX ? -1 : minSpeed;
    
    
    function computeTravelTime(speed) {
        let totHrs = 0;
        
        for (let i = 0; i < n; ++i) {
            const km = dist[i];
            const time = km / speed;
           
            if (i === n - 1) totHrs += time; // for the last ride we don't have to round up to wait for another train
            else totHrs += Math.ceil(time); 
            
        }
       
        return totHrs;
    }
};
