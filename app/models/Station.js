var StationModule = {
    var station = function Station(stationJson) {
        station = Json.parse(stationJson);
        for (var key in station) { 
            this[key] = station[key];
        }
    }
    /**
      * Return a list of Divvy Station Objects
      */
    var readStations = readStationsFromJsonFile(jsonFile) {

    }
};
 

