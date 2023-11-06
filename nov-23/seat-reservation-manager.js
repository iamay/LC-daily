// 06 Nov 2023
// 1845. Seat Reservation Manager
/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.seats = Array(n).fill(false);
    this.nextFree = 0;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  const nextFree = this.nextFree + 1;

  this.seats[this.nextFree++] = true;
  while (this.seats[this.nextFree]) this.nextFree++;

  return nextFree;
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.seats[seatNumber-1] = false;
    this.nextFree = Math.min(this.nextFree, seatNumber - 1);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
