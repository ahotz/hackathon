/** 
 * Set up the Google Map
 * https://developers.google.com/maps/documentation/javascript
 */ 
function initialize_map() {
	var mapOptions = {
	  center: new google.maps.LatLng(41.857556, -87.661535),
	  zoom: 14
	};

	var divvy_map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	// Add a bicycle layer to show bike routes
	var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(divvy_map);
    return divvy_map;
}

/** 
 * Draw all the divvy stations on a map using
 */
function paint_stations_on_map(stations, map) {
	for (var station_idx in stations) {
		var station = stations[station_idx];
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(station.latitude, station.longitude),
		    title: station.station_name + "(" + station.station_id + ")"
		});
		// To add the marker to the map, call setMap();
		marker.setMap(map);
	}
}
