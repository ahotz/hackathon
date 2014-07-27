/** 
 * Set up the Google Map
 * See the API documentation here
 * https://developers.google.com/maps/documentation/javascript
 */ 
function initialize_map(zoom) {
	var mapOptions = {
	  center: new google.maps.LatLng(41.857556, -87.661535),
	  zoom: zoom
	};

	var divvy_map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	// Add a bicycle layer to show bike routes
	var bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(divvy_map);
    return divvy_map;
}

/**
 * Create a marker that suitable for drawing on the map.
 * This method could be customized to include different icons and
 * marker styles.
 *
 * What ideas can you think of?
 *
 * @param marker_position
 * @param marker_title
 * @param capacity
 * @param animation
 * @returns {google.maps.Marker} A marker object
 */
function createMarker(marker_position, marker_title, text, animation) {
    var fillColor = "2FCAFC"; //Chicago Blue
    //var iconTextColor = "FFFFFF"; // White
    var scaleFactor = 1;
    var rotationDeg = 0;
    var fontSize = 12;
    var fontStyle = "b"; //bold
    var marker = new google.maps.Marker({
        position: marker_position, 
        title: marker_title,
        // The google chart api is capable of generating map pin images
        // containing a number, letter or icon
        // chld=<scale_factor>|<rotation_deg>|<fill_color>|<font_size>|<font_style>|<text_line_1>|...|<text_line_n>
        icon: "http://chart.apis.google.com/chart?chst=d_map_spin&chld=" + scaleFactor + "|" + rotationDeg + "|" + fillColor +
        "|" + fontSize + "|" + fontStyle + "|" + text,
        animation: animation
    }); 
    // When a user clicks on a marker, a "click" event is generated
	// Here is an example of animating a marker when it is clicked on
	// See if you can guess what this code will do.	
    google.maps.event.addListener(marker, 'click', function() {
			if (marker.getAnimation() != null) {
	    		marker.setAnimation(null);
	  		} else {
	    		marker.setAnimation(google.maps.Animation.BOUNCE);
	  		}
	});
    return marker;  
}
/**
 * Paint a station on the map by creating a marker that
 * represents it.
 *
 * @param station
 * @param map
 * @param animation
 */
function paintStationOnMap(station, map, animation, removeDelay) {
    var position = new google.maps.LatLng(station.latitude, station.longitude);
    var title = station.stationName + "(" + station.stationId + ")";
    var marker = createMarker(position, title, station.stationId, animation);
    marker.setMap(map);
    if (removeDelay > 0) {
        setInterval(function() {
            marker.setMap(null);
        }, removeDelay);
    }
}
/**
 *
 * Draw all the divvy stations on a map.
 */
function paintStationsOnMap(stations, map) {
	for (var stationIdx in stations) {
        var station = stations[stationIdx];
        paintStationOnMap(station, map, null, 0);
	}
}

function paintTripOnMap(trip, map, removeDelay) {
    var tripCoordinates = [
        new google.maps.LatLng(trip.fromStation.latitude, trip.fromStation.longitude),
        new google.maps.LatLng(trip.toStation.latitude, trip.toStation.longitude)
    ];
    var tripPath = new google.maps.Polyline({
        path: tripCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    tripPath.setMap(map);

    /**
     * Uncomment the code below
     * for a cool effect.
     * What do you think it will do?
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < tripCoordinates.length; i++) {
        bounds.extend(tripCoordinates[i]);
    }
    map.fitBounds(bounds);
    **/

    if (removeDelay > 0) {
        setInterval(function() {
            tripPath.setMap(null);
        }, removeDelay);
    }
    return tripPath;
}

