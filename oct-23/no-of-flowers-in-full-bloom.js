// 11 Oct 2023
// 2251. Number of Flowers in Full Bloom
	var fullBloomFlowers = function(flowers, persons) {
		const start = [];
		const end = [];
		//  Separating the first and start intervals
		 flowers.forEach((v) => { 
			 start.push(v[0]); 
			 end.push(v[1]); 
		 });

		// Sorting the intervals
		const srt = (a, b) => a - b;
		start.sort(srt);
		end.sort(srt);

		// converting the persons array to map
		const personsMap = persons.reduce((a, v, i) => {
			if(v in a) {
				a[v].push(i);
			} else {
				a[v] = [i];
			}
			return a;

		}, {});


		let sPos = 0;// pointer to the start interval
		let ePos = 0;// pointer to the end interval
		let curr = 0; // The value at each interval
		const result = Array(persons.length);
		result.fill(0); // You know.

		const sPerson = Object.keys(personsMap); // Sorted and unique persons array FTW.
		for(let i = 0; i < sPerson.length; i++) {
			const time = sPerson[i]; // Time of the ith person
			// The 2 whiles below represent the sweep line
			while(sPos < start.length && start[sPos] <= time) {
				curr += 1;
				sPos++;
			} 
			while(ePos < end.length && end[ePos] < time) {
				curr -= 1;
				ePos++;
			}   
			for(const person of personsMap[time]) { // All people who came in at time
				result[person] = curr;
			}
		}

		return result;
	};
