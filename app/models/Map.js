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

function createMarker(marker_position, marker_title, capacity, animation) {
    var iconBackgroundColor = "2FCAFC"; //Chicago Blue
    var iconTextColor = "FFFFFF"; // White
    var marker = new google.maps.Marker({       
        position: marker_position, 
        title: marker_title,
        // The google chart api is capable of generating map pin images
        // containing a number, letter or icon
        icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=" + capacity + "|" + iconBackgroundColor + "|" + iconTextColor,
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
 * Draw all the divvy stations on a map.
 */
function paint_stations_on_map(stations, map, delay_per_station) {
	var markers = [];
	for (var station_idx in stations) {
		var station = stations[station_idx];
		var position = new google.maps.LatLng(station.latitude, station.longitude);
		var title = station.stationName + "(" + station.stationId + ")";
   		var animation = null;
   		if (delay_per_station > 0) {
   			animation = google.maps.Animation.DROP;
   			markers.push(createMarker(position, title, station.capacity, animation));
   		} else {
   			var marker = createMarker(position, title, station.capacity, animation); 
   			marker.setMap(map);
   		}
	}
	for (var i=0; i < markers.length; ++i) {
		setTimeout(function(i) {
			return function() {
				markers[i].setMap(map);
			}
		}(i), i * delay_per_station);
	}
} 

