Divvy Bike Get Data Endpoint
=====

Run the server:
-----
Put the data under the `rawdata` folder, and name it as `Divvy_Trips_2013.csv`

	sudo pip install flask

	python ./server.py


GET /count or /data
-----
Get the count or data of entries matching the query.

###Can accept the following parameters:
##### Filter
* trip_id: Get the trip with tripid = <value>.
* bikeid: Get the trips for the bike with bike id = <value>.
* from_station_id: Get the trips start from the station with id = <value>.
* to_station_id: Get the trips start from the station with id = <value>.
* starthour: Get the trips that started in the specified hour. Range: [0-23].
* endhour: GEt the trips that ended in the specified hour. Range: [0-23].
#####Range
* start_before: Get the trips that starts before or on the given date. Format like 20131231, must be a 8-digit number.
* end_before: Get the trips that ends before or on the given date. Format like 20131231, must be a 8-digit number.
* start_after: Get the trips that starts on or after the given date. Format like 20131231, must be a 8-digit number.
* end_after: Get the trips that ends on or after the given date. Format like 20131231, must be a 8-digit number
* duration_smaller: Get the trips that is equal or shorter than specified duration. Must be a number, use second as the time unit. eg. 300 means 5 minutes
* duration_larger: GEt the trips that lasts equal or longer than specified duration. Must be a number, use second as the time unit. eg. 300 means 5 minutes

###Return value:
* /count will return an integer representing the number of entries matching this query
* /data will return a list of JSON objects that matches the query. 

###Example as following
query:

	localhost:5000/count?bikeid=336

response:

	361

explanation:

There are 361 trips in the dataset using bike 336

query:

	localhost:5000/count?start_before=20130831&start_after=20130801

response:

	170508

explanation:

	There are 170508 trips happened in August, 2013

query:
	localhost:5000/data?trip_id=4118

response:

	[
    	{
        	"startdate": 20130627,
            "endhour": 12,
            "enddate": 20130627,
            "bikeid": 480,
            "gender": "",
            "to_station_name": "Larrabee St & Menomonee St",
            "from_station_name": "Michigan Ave & Oak St",
            "birthday": "",
            "usertype": "Customer",
            "stoptime": "2013-06-27 12:16",
            "from_station_id": 85,
            "starttime": "2013-06-27 12:11",
            "to_station_id": 28,
            "tripduration": 316,
            "trip_id": 4118,
            "starthour": 12
        }
    ]