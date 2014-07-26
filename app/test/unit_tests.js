function assertEquals(a,b) {
    if (a!==b) throw a + " is not equal to" + b;
}

function assertTrue(a) {
    if (!a) throw a + " is not true when expected";
}


var testReadAllStations = function(divy_stations_json) {
	stationResponse = readAllStations(divy_stations_json);
	assertEquals(300, Object.keys(stationResponse).length);
}

var testStationsSortedByTime = function(stations) {
	sortedStations = getStationsSortedByTime(stations);
	for (var idx = 0; idx < sortedStations.length; ++idx) {
		if (idx === 0) continue;
		// Each station should have a later start date than the previous one
		assertTrue(sortedStations[idx].onlineDate >= sortedStations[idx-1].onlineDate);
	}
}

// Run the tests
testReadAllStations(divy_stations_json);
testStationsSortedByTime(divvy_stations);