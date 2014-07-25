function Station(stationJson) {
    for (var key in stationJson) { 
        this[key] = stationJson[key];
    }
}

Station.prototype.toString = function() {
    return "Station ID: " + this.id + " Name:" + this.name;
    ;
}

var stations = [];

for (var idx in divvy_stations) {
    var station = new Station(divvy_stations[idx]);
    console.log(station.toString());
    stations.push(station);
}

