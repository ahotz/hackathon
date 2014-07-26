__author__ = 'rxue'
import csv, time, json
from flask import Flask, request

app = Flask("__name__")
app.debug = True

tripData = []


@app.route("/")
def hello():
    return "Hello World"


@app.route("/count", methods=['GET'])
def get_count():
    query = dict()
    for key in ["trip_id", "bikeid", "from_station_id", "to_station_id"]:
        if request.args.has_key(key):
            query[key] = int(request.args.get(key))
    for key in ["usertype", "gender", "birthday"]:
        if request.args.has_key(key):
            query[key] = request.args.get(key)
    print query
    return json.dumps(len(list(filter_data(query))))

@app.route("/data", methods=['GET'])
def get_data():
    query = dict()
    for key in ["trip_id", "bikeid", "from_station_id", "to_station_id"]:
        if request.args.has_key(key):
            query[key] = int(request.args.get(key))
    for key in ["usertype", "gender", "birthday"]:
        if request.args.has_key(key):
            query[key] = request.args.get(key)
    print query
    return json.dumps(list(filter_data(query)))


def json_matches(json, jsonSubSet):
    if len(jsonSubSet) == 0:
        return False
    for key in jsonSubSet:
        if not json.has_key(key) or json[key] != jsonSubSet[key]:
            return False
    return True

def filter_data(query):
    for item in tripData:
        if json_matches(item, query):
            yield item

def load_trip_data():
    print "Hello"
    with open('rawdata/Divvy_Trips_2013.csv', 'rU') as csvIn:
        csvreader = csv.reader(csvIn)
        print csvIn.next().split(',')
        count = 0
        for row in csvreader:
            tripData.append({
                'trip_id': int(row[0]),
                'starttime': row[1],
                'stoptime': row[2],
                'bikeid': int(row[3]),
                'tripduration': int(row[4]),
                'from_station_id': int(row[5]),
                'from_station_name': row[6],
                'to_station_id': int(row[7]),
                'to_station_name': row[8],
                'usertype': row[9],
                'gender': row[10],
                'birthday': row[11]
            })
            count += 1
            if count % 7597 == 0:
                print str(count / 7597) + "%"
    print "Data Loaded: " + str(len(tripData)) + " rows"


if __name__ == "__main__":
    load_trip_data()
    app.run()