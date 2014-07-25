require 'json'

class StationToJson
  def initialize(filename)
    @filename = filename
  end

  def get_stations_info
    stations = []
    File.open(@filename) do |f|
      f.each_line do |line|
        stations << line.chomp.split(",")
      end
    end
    stations
  end

  def create_stations
    stations_info = get_stations_info
    stations = stations_info.map { |info| create_station(info) }
    stations.map { |station| station.to_json }
  end

  def create_station(info)
    Station.new(
      info[0], 
      info[1],
      info[2],
      info[3],
      info[4],
      info[5],
      info[6]
    )
  end

  def write_to_file(output_file, stations_json)
    File.open(output_file, "w") do |f|
      f.puts(stations_json)
    end
  end
end

class Station
  def initialize(id, name, lat, lng, capacity, landmark, online_date)
    @id = id
    @name = name
    @lat = lat
    @lng = lng
    @capacity = capacity
    @landmark = landmark
    @online_date = online_date
  end

  def to_json
    {
      "id" => @id,
      "name" => @name,
      "latitude" => @lat,
      "longitude" => @lng, 
      "capacity" => @capacity, 
      "landmark" => @landmark,
      "online_date" => @online_date
    }
  end
end

dir = "/Users/saserpoosh/projects/divvy_data/Divvy_Stations_Trips_2013"
station_to_json = StationToJson.new("#{dir}/Divvy_Stations_2013.csv")
stations = station_to_json.create_stations
station_to_json.write_to_file("#{dir}/divvy_stations_trips_2013.json", JSON.pretty_generate(stations))
