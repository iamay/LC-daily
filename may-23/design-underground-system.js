// 21 May 2023
// 1396. Design Underground System

class Person {
    constructor(station, startTime) {
        this.startStation = station;
        this.startTime = startTime;
    }
}

class UndergroundSystem {
    constructor() {
        this.people = new Map();
        this.stations = new Map();
    }
    
    checkIn(id, stationName, t) {
        const customer = new Person(stationName, t);
        this.people.set(id, customer);
    }
    
    checkOut(id, endStation, t) {
        const { startStation, startTime } = this.people.get(id);
        
        if(!this.stations.has(startStation)) this.stations.set(startStation, new Map());
        const start = this.stations.get(startStation);
        
        if(!start.has(endStation)) start.set(endStation, [0, 0]);
        const end = start.get(endStation)
        
        end[0] += t - startTime;;
        end[1]++
    }
    
    getAverageTime(startStation, endStation) {
        const [total, count] = this.stations.get(startStation).get(endStation);
        return total / count;
    }
}
