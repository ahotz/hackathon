/**
 * A Trip object represents a Trip between divvy stations
 * @param tripId ID attached to each trip taken
 * @param startTime day and time trip started, in CST
 * @param stoptime day and time trip ended, in CST
 * @param bikeId ID attached to each bike
 * @param tripDuration time of trip in seconds 
 * @param fromStationName name of station where trip originated
 * @param toStationName name of station where trip terminated 
 * @param fromStationId ID of station where trip originated
 * @param toStationId ID of station where trip terminated
 * @param userType "Customer" is a rider who purchased a 24-Hour Pass; "Subscriber" is a rider who purchased an Annual Membership
 * @param gender gender of rider
 * @param birthYear birth year of rider
 */

function Trip(tripId, startTime, stopTime, bikeId, tripDuration, 
              fromStationName, toStationName, fromStationId, toStationId, 
              userType, gender, birthYear) {
    this.tripId = tripId;
    this.startTime = new Date(startTime);
    this.stopTime = new Date(stopTime);
    this.bikeId = bikeId;
    this.tripDuration = tripDuration;
    this.fromStationName = fromStationName;
    this.toStationName = toStationName;
    this.toStationId = toStationId;
    this.userType = userType;
    this.gender = gender;
    this.birthYear = birthYear;
}

/**
 * By creating our own toString function, we can control how the Trip is printed.
 */
Trip.prototype.toString = function() {
    return "Trip ID: " + this.tripId + " From: " + this.fromStationName + "(" + this.fromStationId + ")" + 
    	   " To: " + this.toStationName + "(" + this.toStationId + ")";
}
