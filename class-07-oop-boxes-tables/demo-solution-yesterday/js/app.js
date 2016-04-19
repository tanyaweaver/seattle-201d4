var pioneerSqr = {
  minGullsPerHour: 31,
  maxGullsPerHour: 85,
  avgFriesPerGull: 4.2,
  hourlyTotals: [],

  calcRandomGulls: function(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  calcHourlyFries: function() {
    for (var i = 0; i < 12; i++) {
      // 'this' is a keyword that can be used within an object...
      // ...to refer to the object itself
      var singleHour = Math.floor(this.calcRandomGulls(this.minGullsPerHour, this.maxGullsPerHour) * this.avgFriesPerGull);
      this.hourlyTotals.push(singleHour);
      console.log(this.hourlyTotals);
    }
  }
};
