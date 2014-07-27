function assertEquals(a,b) {
    if (a!==b) throw a + " is not equal to" + b;
}

function assertTrue(a) {
    if (!a) throw a + " is not true when expected";
}


var testReadAllStations = function(divy_stations_json) {
	var stationResponse = readAllStations(divy_stations_json);
	assertEquals(300, Object.keys(stationResponse).length);
    console.log("testReadAllStations passed");
}

var testStationsSortedByTime = function(stations) {
	var sortedStations = getStationsSortedByTime(stations);
	for (var idx = 0; idx < sortedStations.length; ++idx) {
		if (idx === 0) continue;
		// Each station should have a later start date than the previous one
		assertTrue(sortedStations[idx].onlineDate >= sortedStations[idx-1].onlineDate);
	}
    console.log("testStationsSortedByTime passed");
}

var testReadOneTripFromServerResponse = function(stations) {
	var example_json = [{"bikeid": 480, "stoptime": "2013-06-27 12:16", "to_station_id": 28, 
						 "tripduration": 316, "trip_id": 4118, "gender": "", "from_station_name": "Michigan Ave & Oak St", 
						 "usertype": "Customer", "birthday": "", "from_station_id": 85, 
						 "starttime": "2013-06-27 12:11", "to_station_name": "Larrabee St & Menomonee St"}]
	var tripsById = readTripsFromJsonResponse(example_json, stations);
	assertEquals(1, Object.keys(tripsById).length); 
	var trip = tripsById[4118];
	assertEquals(480, trip.bikeId); 
	assertEquals(new Date("2013-06-27 12:16").getTime(), trip.stopTime.getTime());
	assertEquals(28, trip.toStationId);
	assertEquals(316, trip.tripDuration);
	assertEquals(4118, trip.tripId);
	assertEquals("", trip.gender);
	assertEquals("Michigan Ave & Oak St", trip.fromStationName);
	assertEquals("Customer", trip.userType);
	assertEquals("", trip.birthYear);
	assertEquals(85, trip.fromStationId);
	assertEquals(new Date("2013-06-27 12:11").getTime(), trip.startTime.getTime());
	assertEquals("Larrabee St & Menomonee St", trip.toStationName);
    assertEquals(stations["28"], trip.toStation);
    assertEquals(stations["85"], trip.fromStation);
    console.log("testReadOneTripFromServerResponse passed");
}

/**
 * Note this will be too slow to run
 * every time.
 */
var testGettingTripFromStationFromServer = function(stations) {
    var testStationId = 85;
    getAllTripsFromStationId(testStationId, stations, function(trips) {
        assertEquals(13274, Object.keys(trips).length);
    })
    console.log("testGettingTripFromStationFromServer passed");
}

/**
 * Note this will be too slow to run
 * every time.
 */
var testGettingTripsToStationFromServer = function(stations) {
    var testStationId = 85;
    getAllTripsToStationId(testStationId, stations, function(trips) {
        assertEquals(14342, Object.keys(trips).length);
    })
    console.log("testGettingTripsToStationFromServer passed");
}

/**
 * Note this will be too slow to run
 * every time.
 */
var testGettingTripsForBikeFromServer = function(stations) {
    var testBikeId = 480;
    getAllTripsForBikeId(testBikeId, stations, function(trips) {
        assertEquals(338, Object.keys(trips).length);
    })
    console.log("testGettingTripsForBikeFromServer passed");
}


// Run the tests
testReadAllStations(divy_stations_json);
testStationsSortedByTime(divvy_stations);
/*
testReadOneTripFromServerResponse(divvy_stations);
testGettingTripFromStationFromServer(divvy_stations);
testGettingTripsToStationFromServer(divvy_stations);
testGettingTripsForBikeFromServer(divvy_stations);
*/