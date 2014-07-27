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
    this.fromStationId = fromStationId;
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

/** 
 * Return a mapping between trip_id and trip for an input list of json trip objects
 * returned by the server.
 * Example:
 * [{"bikeid": 480, "stoptime": "2013-06-27 12:16", "to_station_id": 28, "tripduration": 316, "trip_id": 4118, "gender": "", "from_station_name": "Michigan Ave & Oak St", 
     "usertype": "Customer", "birthday": "", "from_station_id": 85, "starttime": "2013-06-27 12:11", "to_station_name": "Larrabee St & Menomonee St"}]
 */ 
function readTripsFromJsonResponse(jsonTripList) {
    var tripsById = {};
    for (var idx in jsonTripList) {
        var tripJson = jsonTripList[idx];
        trip = new Trip(tripJson.trip_id, tripJson.starttime, tripJson.stoptime, tripJson.bikeid, tripJson.tripduration,
                        tripJson.from_station_name, tripJson.to_station_name, 
                        tripJson.from_station_id, tripJson.to_station_id,
                        tripJson.usertype, tripJson.gender, tripJson.birthday);
        tripsById[trip.tripId] = trip;
    }
    return tripsById;
}

function getAllTripsForQuery(query, callback) {
    return $.getJSON("http://localhost:5000/data", query, function(response) {
        var trips = readTripsFromJsonResponse(response);
        callback(trips);
    })
}
/**
 * Retrieve all the trips for a particular station
 * The callback function will be called with dictionary of
 * tripId->trip objects
 */
function getAllTripsFromStationId(stationId, callback) {
    return getAllTripsForQuery({from_station_id: stationId}, callback);
}
