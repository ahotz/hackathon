/**
 * A station object represents a Divvy Station
 * Each station has the following properties:
 * @param station_id A unique identifier for the station
 * @param station_name A name for the station that identifies it based on the cross street
 * @param capacity The number of docks available at the station
 * @param latitude The latitude of the station (Roughly speaking, the horizontal location of the station on a map)  
 * @param longitude The longitude of the station (The vertical location of the station on a map)
 * @param online_date When did the station come online
 */
function Station(station_id, station_name, latitude, longitude, capacity, online_date) {
    this.station_id = station_id;
    this.station_name = station_name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.capacity = capacity;
    // The following line converts the date from a textual representation "6/28/2013" into a Date object
    this.online_date = new Date(online_date);
}

/**
 * By creating our own toString function, we can control how the station is printed.
 */
Station.prototype.toString = function() {
    return "Station ID: " + this.station_id + " Name:" + this.station_name + 
    	   " Lat:" + this.latitude + "Lng: " + this.longitude;
};

/** 
 * This function reads in all stations from the list loaded in memory and creates Station objects
 */ 
function readAllStations() {
	var allStations = [];
	for (var idx in divvy_stations) {
		var stationJson = divvy_stations[idx];
	    var station = new Station(stationJson.id, stationJson.name, stationJson.latitude, stationJson.longitude, stationJson.capacity, stationJson.online_date);
	    console.log(station.toString());
	    allStations.push(station);
	}
	return allStations;
}

divvy_stations = readAllStations();
