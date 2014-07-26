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

function createMarker(marker_position, marker_title) {
    var marker = new google.maps.Marker({       
        position: marker_position, 
        title: marker_title      
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
 * Draw all the divvy stations on a map using
 */
function paint_stations_on_map(stations, map) {
	for (var station_idx in stations) {
		var station = stations[station_idx];
		var position = new google.maps.LatLng(station.latitude, station.longitude);
		var title = station.stationName + "(" + station.stationId + ")";
		var marker = createMarker(position, title);
		marker.setMap(map);	
	}
} 

