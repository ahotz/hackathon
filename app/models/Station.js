/**
 * A station object represents a Divvy Station
 * Each station has the following properties:
 * @param stationId A unique identifier for the station
 * @param stationName A name for the station that identifies it based on the cross street
 * @param capacity The number of docks available at the station
 * @param latitude The latitude of the station (Roughly speaking, the horizontal location of the station on a map)  
 * @param longitude The longitude of the station (The vertical location of the station on a map)
 * @param onlineDate When did the station come online
 */
function Station(stationId, stationName, latitude, longitude, capacity, onlineDate) {
    this.stationId = stationId;
    this.stationName = stationName;
    this.latitude = latitude;
    this.longitude = longitude;
    this.capacity = capacity;
    // The following line converts the date from a textual representation "6/28/2013" into a Date object
    this.onlineDate = new Date(onlineDate);
}

/**
 * By creating our own toString function, we can control how the station is printed.
 */
Station.prototype.toString = function() {
    return "Station ID: " + this.stationId + " Name:" + this.stationName + 
    	   " Lat:" + this.latitude + "Lng: " + this.longitude;
}

/** 
 * This function reads in all stations from the list loaded in memory and creates Station objects
 */ 
function readAllStations(divy_stations_json) {
	var allStations = {};
	for (var idx in divy_stations_json) {
		var stationJson = divy_stations_json[idx];
	    var station = new Station(stationJson.id, stationJson.name, stationJson.latitude, stationJson.longitude, stationJson.capacity, stationJson.online_date);
	    console.log(station.toString());
	    allStations[station.stationId] = station;
	}
	return allStations;
}

function getStationsSortedByTime(stations) {
	var stationArray = [];
	// Put the stations into an array
	for (var stationId in stations) {
		stationArray.push(stations[stationId]);
	}
	stationArray.sort(function(a,b) { return a.onlineDate - b.onlineDate});
	return stationArray;
}

divvy_stations = readAllStations(divy_stations_json);
