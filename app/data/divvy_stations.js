/** Load all the divvy stations into a global variable
    named divvy_stations
*/
var divy_stations_json = [
  {
    "id": "5",
    "name": "State St & Harrison St",
    "latitude": "41.87395806",
    "longitude": "-87.62773949",
    "capacity": "19",
    "landmark": "30",
    "online_date": "6/28/2013"
  },
  {
    "id": "13",
    "name": "Wilton Ave & Diversey Pkwy",
    "latitude": "41.93250008",
    "longitude": "-87.65268082",
    "capacity": "19",
    "landmark": "66",
    "online_date": "6/28/2013"
  },
  {
    "id": "14",
    "name": "Morgan St & 18th St",
    "latitude": "41.858086",
    "longitude": "-87.651073",
    "capacity": "15",
    "landmark": "163",
    "online_date": "6/28/2013"
  },
  {
    "id": "15",
    "name": "Racine Ave & 18th St",
    "latitude": "41.85818061",
    "longitude": "-87.65648665",
    "capacity": "15",
    "landmark": "164",
    "online_date": "6/28/2013"
  },
  {
    "id": "16",
    "name": "Wood St & North Ave",
    "latitude": "41.910329",
    "longitude": "-87.672516",
    "capacity": "15",
    "landmark": "223",
    "online_date": "8/12/2013"
  },
  {
    "id": "17",
    "name": "Wood St & Division St",
    "latitude": "41.90332",
    "longitude": "-87.67273",
    "capacity": "15",
    "landmark": "246",
    "online_date": "6/28/2013"
  },
  {
    "id": "19",
    "name": "Loomis St & Taylor St",
    "latitude": "41.869417",
    "longitude": "-87.660996",
    "capacity": "15",
    "landmark": "139",
    "online_date": "6/28/2013"
  },
  {
    "id": "20",
    "name": "Sheffield Ave & Kingsbury St",
    "latitude": "41.90959193",
    "longitude": "-87.65349723",
    "capacity": "15",
    "landmark": "154",
    "online_date": "6/28/2013"
  },
  {
    "id": "21",
    "name": "Aberdeen St & Jackson Blvd",
    "latitude": "41.87772613",
    "longitude": "-87.65478743",
    "capacity": "15",
    "landmark": "157",
    "online_date": "6/28/2013"
  },
  {
    "id": "22",
    "name": "May St & Taylor St",
    "latitude": "41.8694821",
    "longitude": "-87.6554864",
    "capacity": "15",
    "landmark": "160",
    "online_date": "6/28/2013"
  },
  {
    "id": "23",
    "name": "Orleans St & Elm St",
    "latitude": "41.902924",
    "longitude": "-87.637715",
    "capacity": "15",
    "landmark": "172",
    "online_date": "6/28/2013"
  },
  {
    "id": "24",
    "name": "Fairbanks Ct & Grand Ave",
    "latitude": "41.89186",
    "longitude": "-87.62062",
    "capacity": "15",
    "landmark": "262",
    "online_date": "6/28/2013"
  },
  {
    "id": "25",
    "name": "Michigan Ave & Pearson St",
    "latitude": "41.89766",
    "longitude": "-87.62351",
    "capacity": "23",
    "landmark": "34",
    "online_date": "6/28/2013"
  },
  {
    "id": "26",
    "name": "McClurg Ct & Illinois St",
    "latitude": "41.89102",
    "longitude": "-87.6173",
    "capacity": "23",
    "landmark": "51",
    "online_date": "6/28/2013"
  },
  {
    "id": "27",
    "name": "Larrabee St & North Ave",
    "latitude": "41.91021",
    "longitude": "-87.6435",
    "capacity": "19",
    "landmark": "174",
    "online_date": "6/28/2013"
  },
  {
    "id": "28",
    "name": "Larrabee St & Menomonee St",
    "latitude": "41.91468",
    "longitude": "-87.64332",
    "capacity": "15",
    "landmark": "282",
    "online_date": "6/28/2013"
  },
  {
    "id": "29",
    "name": "Noble St & Milwaukee Ave",
    "latitude": "41.90068",
    "longitude": "-87.6626",
    "capacity": "15",
    "landmark": "290",
    "online_date": "6/28/2013"
  },
  {
    "id": "30",
    "name": "Ashland Ave & Augusta Blvd",
    "latitude": "41.899643",
    "longitude": "-87.6677",
    "capacity": "15",
    "landmark": "248",
    "online_date": "6/28/2013"
  },
  {
    "id": "31",
    "name": "Franklin St & Chicago Ave",
    "latitude": "41.89680204",
    "longitude": "-87.63563839",
    "capacity": "23",
    "landmark": "17",
    "online_date": "6/28/2013"
  },
  {
    "id": "32",
    "name": "Racine Ave & Congress Pkwy",
    "latitude": "41.87464",
    "longitude": "-87.65703",
    "capacity": "19",
    "landmark": "76",
    "online_date": "6/28/2013"
  },
  {
    "id": "33",
    "name": "State St & Van Buren St",
    "latitude": "41.877181",
    "longitude": "-87.627844",
    "capacity": "27",
    "landmark": "3",
    "online_date": "6/28/2013"
  },
  {
    "id": "34",
    "name": "Cannon Dr & Fullerton Ave",
    "latitude": "41.92675599",
    "longitude": "-87.63442878",
    "capacity": "15",
    "landmark": "124",
    "online_date": "6/28/2013"
  },
  {
    "id": "35",
    "name": "Streeter Dr & Illinois St",
    "latitude": "41.891071",
    "longitude": "-87.6122",
    "capacity": "35",
    "landmark": "22",
    "online_date": "8/5/2013"
  },
  {
    "id": "36",
    "name": "Franklin St & Jackson Blvd",
    "latitude": "41.87770796",
    "longitude": "-87.63532114",
    "capacity": "27",
    "landmark": "19",
    "online_date": "6/28/2013"
  },
  {
    "id": "37",
    "name": "Dearborn St & Adams St",
    "latitude": "41.87935636",
    "longitude": "-87.62979104",
    "capacity": "19",
    "landmark": "20",
    "online_date": "6/28/2013"
  },
  {
    "id": "42",
    "name": "Wabash Ave & Cermak Rd",
    "latitude": "41.85323876",
    "longitude": "-87.62533709",
    "capacity": "15",
    "landmark": "170",
    "online_date": "6/28/2013"
  },
  {
    "id": "43",
    "name": "Michigan Ave & Washington St",
    "latitude": "41.88389277",
    "longitude": "-87.62464914",
    "capacity": "43",
    "landmark": "1",
    "online_date": "6/28/2013"
  },
  {
    "id": "44",
    "name": "State St & Randolph St",
    "latitude": "41.8847302",
    "longitude": "-87.62773357",
    "capacity": "27",
    "landmark": "2",
    "online_date": "6/28/2013"
  },
  {
    "id": "45",
    "name": "Michigan Ave & Congress Pkwy",
    "latitude": "41.8760656",
    "longitude": "-87.62443336",
    "capacity": "15",
    "landmark": "40",
    "online_date": "6/28/2013"
  },
  {
    "id": "46",
    "name": "Wells St & Walton St",
    "latitude": "41.89993001",
    "longitude": "-87.63443007",
    "capacity": "19",
    "landmark": "46",
    "online_date": "6/28/2013"
  },
  {
    "id": "47",
    "name": "State St & Kinzie St",
    "latitude": "41.88918",
    "longitude": "-87.6277",
    "capacity": "15",
    "landmark": "50",
    "online_date": "6/28/2013"
  },
  {
    "id": "48",
    "name": "Larrabee St & Kingsbury St",
    "latitude": "41.897764",
    "longitude": "-87.642884",
    "capacity": "27",
    "landmark": "12",
    "online_date": "6/28/2013"
  },
  {
    "id": "49",
    "name": "Dearborn St & Monroe St",
    "latitude": "41.88131982",
    "longitude": "-87.62952092",
    "capacity": "23",
    "landmark": "49",
    "online_date": "6/28/2013"
  },
  {
    "id": "50",
    "name": "Clark St & Congress Pkwy",
    "latitude": "41.87593267",
    "longitude": "-87.63058454",
    "capacity": "27",
    "landmark": "9",
    "online_date": "6/28/2013"
  },
  {
    "id": "51",
    "name": "Clark St & Randolph St",
    "latitude": "41.88457623",
    "longitude": "-87.63188991",
    "capacity": "31",
    "landmark": "5",
    "online_date": "6/28/2013"
  },
  {
    "id": "52",
    "name": "Michigan Ave & Lake St",
    "latitude": "41.88605812",
    "longitude": "-87.62428934",
    "capacity": "23",
    "landmark": "43",
    "online_date": "6/28/2013"
  },
  {
    "id": "53",
    "name": "Wells St & Erie St",
    "latitude": "41.893832",
    "longitude": "-87.634195",
    "capacity": "19",
    "landmark": "64",
    "online_date": "6/28/2013"
  },
  {
    "id": "54",
    "name": "Ogden Ave & Chicago Ave",
    "latitude": "41.89636246",
    "longitude": "-87.65406127",
    "capacity": "19",
    "landmark": "44",
    "online_date": "6/28/2013"
  },
  {
    "id": "55",
    "name": "Halsted St & James M Rochford St",
    "latitude": "41.865861",
    "longitude": "-87.646611",
    "capacity": "15",
    "landmark": "166",
    "online_date": "6/28/2013"
  },
  {
    "id": "56",
    "name": "Desplaines St & Kinzie St",
    "latitude": "41.88871604",
    "longitude": "-87.64444785",
    "capacity": "19",
    "landmark": "39",
    "online_date": "6/28/2013"
  },
  {
    "id": "57",
    "name": "Clinton St & Roosevelt Rd",
    "latitude": "41.86711778",
    "longitude": "-87.64108796",
    "capacity": "15",
    "landmark": "327",
    "online_date": "6/28/2013"
  },
  {
    "id": "58",
    "name": "Ashland Ave & Armitage Ave",
    "latitude": "41.91785887",
    "longitude": "-87.668919",
    "capacity": "15",
    "landmark": "25",
    "online_date": "6/28/2013"
  },
  {
    "id": "59",
    "name": "Wabash Ave & Roosevelt Rd",
    "latitude": "41.867173",
    "longitude": "-87.62595501",
    "capacity": "19",
    "landmark": "31",
    "online_date": "6/28/2013"
  },
  {
    "id": "60",
    "name": "Dayton St & North Ave",
    "latitude": "41.91057803",
    "longitude": "-87.64942193",
    "capacity": "19",
    "landmark": "58",
    "online_date": "6/28/2013"
  },
  {
    "id": "61",
    "name": "Wood St & Milwaukee Ave",
    "latitude": "41.907655",
    "longitude": "-87.672552",
    "capacity": "15",
    "landmark": "221",
    "online_date": "6/28/2013"
  },
  {
    "id": "62",
    "name": "McCormick Place",
    "latitude": "41.85137517",
    "longitude": "-87.61883465",
    "capacity": "15",
    "landmark": "106",
    "online_date": "6/28/2013"
  },
  {
    "id": "66",
    "name": "Clinton St & Lake St",
    "latitude": "41.88583274",
    "longitude": "-87.64138231",
    "capacity": "19",
    "landmark": "21",
    "online_date": "6/28/2013"
  },
  {
    "id": "67",
    "name": "Sheffield Ave & Fullerton Ave",
    "latitude": "41.92560188",
    "longitude": "-87.65370804",
    "capacity": "15",
    "landmark": "60",
    "online_date": "6/28/2013"
  },
  {
    "id": "68",
    "name": "Clinton St & Tilden St",
    "latitude": "41.875885",
    "longitude": "-87.640795",
    "capacity": "23",
    "landmark": "37",
    "online_date": "6/28/2013"
  },
  {
    "id": "69",
    "name": "Damen Ave & Pierce Ave",
    "latitude": "41.90939601",
    "longitude": "-87.67769193",
    "capacity": "19",
    "landmark": "65",
    "online_date": "6/28/2013"
  },
  {
    "id": "71",
    "name": "Morgan St & Lake St",
    "latitude": "41.88548331",
    "longitude": "-87.65230486",
    "capacity": "15",
    "landmark": "72",
    "online_date": "6/28/2013"
  },
  {
    "id": "72",
    "name": "State St & 16th St",
    "latitude": "41.86012138",
    "longitude": "-87.62772919",
    "capacity": "15",
    "landmark": "148",
    "online_date": "6/28/2013"
  },
  {
    "id": "73",
    "name": "Jefferson St & Monroe St",
    "latitude": "41.880422",
    "longitude": "-87.642746",
    "capacity": "19",
    "landmark": "38",
    "online_date": "6/28/2013"
  },
  {
    "id": "74",
    "name": "Kingsbury St & Erie St",
    "latitude": "41.89384315",
    "longitude": "-87.64185116",
    "capacity": "23",
    "landmark": "265",
    "online_date": "6/28/2013"
  },
  {
    "id": "75",
    "name": "Canal St & Jackson Blvd",
    "latitude": "41.87811421",
    "longitude": "-87.63997112",
    "capacity": "35",
    "landmark": "138",
    "online_date": "6/28/2013"
  },
  {
    "id": "76",
    "name": "Lake Shore Dr & Monroe St",
    "latitude": "41.88105",
    "longitude": "-87.61697",
    "capacity": "11",
    "landmark": "300",
    "online_date": "6/28/2013"
  },
  {
    "id": "77",
    "name": "Clinton St & Madison St",
    "latitude": "41.8815824",
    "longitude": "-87.64127743",
    "capacity": "23",
    "landmark": "301",
    "online_date": "6/28/2013"
  },
  {
    "id": "80",
    "name": "Aberdeen St & Madison St",
    "latitude": "41.881487",
    "longitude": "-87.654752",
    "capacity": "19",
    "landmark": "156",
    "online_date": "6/28/2013"
  },
  {
    "id": "81",
    "name": "Daley Center Plaza",
    "latitude": "41.884337",
    "longitude": "-87.630183",
    "capacity": "47",
    "landmark": "23",
    "online_date": "6/28/2013"
  },
  {
    "id": "84",
    "name": "Green St & Milwaukee Ave",
    "latitude": "41.891733",
    "longitude": "-87.648727",
    "capacity": "19",
    "landmark": "33",
    "online_date": "6/28/2013"
  },
  {
    "id": "85",
    "name": "Michigan Ave & Oak St",
    "latitude": "41.90096039",
    "longitude": "-87.62377664",
    "capacity": "15",
    "landmark": "42",
    "online_date": "6/28/2013"
  },
  {
    "id": "86",
    "name": "Eckhart Park",
    "latitude": "41.89637337",
    "longitude": "-87.66098386",
    "capacity": "15",
    "landmark": "289",
    "online_date": "6/28/2013"
  },
  {
    "id": "87",
    "name": "Racine Ave & Fullerton Ave",
    "latitude": "41.92556258",
    "longitude": "-87.65840426",
    "capacity": "19",
    "landmark": "189",
    "online_date": "6/28/2013"
  },
  {
    "id": "88",
    "name": "May St & Randolph St",
    "latitude": "41.88397",
    "longitude": "-87.655688",
    "capacity": "15",
    "landmark": "155",
    "online_date": "6/28/2013"
  },
  {
    "id": "90",
    "name": "Millennium Park",
    "latitude": "41.8810317",
    "longitude": "-87.62408432",
    "capacity": "35",
    "landmark": "8",
    "online_date": "6/28/2013"
  },
  {
    "id": "91",
    "name": "Clinton St & Washington Blvd",
    "latitude": "41.88338",
    "longitude": "-87.64117",
    "capacity": "31",
    "landmark": "10",
    "online_date": "6/28/2013"
  },
  {
    "id": "92",
    "name": "Carpenter St & Huron St",
    "latitude": "41.894556",
    "longitude": "-87.653449",
    "capacity": "19",
    "landmark": "196",
    "online_date": "6/28/2013"
  },
  {
    "id": "93",
    "name": "Sheffield Ave & Willow St",
    "latitude": "41.913688",
    "longitude": "-87.652855",
    "capacity": "15",
    "landmark": "190",
    "online_date": "6/28/2013"
  },
  {
    "id": "94",
    "name": "Lincoln Ave & Armitage Ave",
    "latitude": "41.918273",
    "longitude": "-87.638116",
    "capacity": "19",
    "landmark": "146",
    "online_date": "6/28/2013"
  },
  {
    "id": "97",
    "name": "Museum Campus",
    "latitude": "41.865212",
    "longitude": "-87.617759",
    "capacity": "19",
    "landmark": "29",
    "online_date": "6/28/2013"
  },
  {
    "id": "98",
    "name": "LaSalle St & Washington St",
    "latitude": "41.882664",
    "longitude": "-87.63253",
    "capacity": "15",
    "landmark": "6",
    "online_date": "7/15/2013"
  },
  {
    "id": "99",
    "name": "Lake Shore Dr & Ohio St",
    "latitude": "41.89257",
    "longitude": "-87.614492",
    "capacity": "19",
    "landmark": "337",
    "online_date": "7/15/2013"
  },
  {
    "id": "100",
    "name": "Orleans St & Merchandise Mart Plaza",
    "latitude": "41.888243",
    "longitude": "-87.63639",
    "capacity": "23",
    "landmark": "13",
    "online_date": "7/16/2013"
  },
  {
    "id": "106",
    "name": "State St & Pearson St",
    "latitude": "41.897448",
    "longitude": "-87.628722",
    "capacity": "27",
    "landmark": "14",
    "online_date": "8/1/2013"
  },
  {
    "id": "108",
    "name": "Halsted St & Polk St",
    "latitude": "41.87184",
    "longitude": "-87.64664",
    "capacity": "19",
    "landmark": "27",
    "online_date": "8/6/2013"
  },
  {
    "id": "109",
    "name": "900 W Harrison",
    "latitude": "41.8745",
    "longitude": "-87.6498",
    "capacity": "19",
    "landmark": "28",
    "online_date": "8/6/2013"
  },
  {
    "id": "110",
    "name": "State St & Erie St",
    "latitude": "41.893975",
    "longitude": "-87.628623",
    "capacity": "23",
    "landmark": "45",
    "online_date": "8/1/2013"
  },
  {
    "id": "111",
    "name": "Sedgwick St & Huron St",
    "latitude": "41.894666",
    "longitude": "-87.638437",
    "capacity": "19",
    "landmark": "52",
    "online_date": "8/1/2013"
  },
  {
    "id": "112",
    "name": "Green St & Randolph St",
    "latitude": "41.884078",
    "longitude": "-87.648684",
    "capacity": "15",
    "landmark": "53",
    "online_date": "7/29/2013"
  },
  {
    "id": "113",
    "name": "Bissell St & Armitage Ave",
    "latitude": "41.91844",
    "longitude": "-87.65222",
    "capacity": "15",
    "landmark": "59",
    "online_date": "9/5/2013"
  },
  {
    "id": "114",
    "name": "Sheffield Ave & Addison St",
    "latitude": "41.94688",
    "longitude": "-87.65445",
    "capacity": "27",
    "landmark": "62",
    "online_date": "8/2/2013"
  },
  {
    "id": "115",
    "name": "Sheffield Ave & Wellington Ave",
    "latitude": "41.936253",
    "longitude": "-87.653566",
    "capacity": "23",
    "landmark": "67",
    "online_date": "7/22/2013"
  },
  {
    "id": "116",
    "name": "Western Ave & Winnebago Ave",
    "latitude": "41.915533",
    "longitude": "-87.687051",
    "capacity": "15",
    "landmark": "68",
    "online_date": "7/26/2013"
  },
  {
    "id": "117",
    "name": "Wilton Ave & Belmont Ave",
    "latitude": "41.94018",
    "longitude": "-87.65304",
    "capacity": "23",
    "landmark": "69",
    "online_date": "8/2/2013"
  },
  {
    "id": "118",
    "name": "Sedgwick St & North Ave",
    "latitude": "41.910579",
    "longitude": "-87.638618",
    "capacity": "19",
    "landmark": "70",
    "online_date": "8/1/2013"
  },
  {
    "id": "119",
    "name": "Ashland Ave & Lake St",
    "latitude": "41.88541",
    "longitude": "-87.66732",
    "capacity": "19",
    "landmark": "73",
    "online_date": "7/28/2013"
  },
  {
    "id": "120",
    "name": "Wentworth Ave & Archer Ave",
    "latitude": "41.854564",
    "longitude": "-87.631937",
    "capacity": "15",
    "landmark": "75",
    "online_date": "8/6/2013"
  },
  {
    "id": "121",
    "name": "Blackstone Ave & Hyde Park Blvd",
    "latitude": "41.802562",
    "longitude": "-87.590368",
    "capacity": "15",
    "landmark": "398",
    "online_date": "8/28/2013"
  },
  {
    "id": "122",
    "name": "Congress Pkwy & Ogden Ave",
    "latitude": "41.87501",
    "longitude": "-87.67328",
    "capacity": "15",
    "landmark": "81",
    "online_date": "7/28/2013"
  },
  {
    "id": "123",
    "name": "California Ave & Milwaukee Ave",
    "latitude": "41.922695",
    "longitude": "-87.697153",
    "capacity": "15",
    "landmark": "84",
    "online_date": "7/26/2013"
  },
  {
    "id": "124",
    "name": "Damen Ave & Cullerton St",
    "latitude": "41.855048",
    "longitude": "-87.675726",
    "capacity": "15",
    "landmark": "89",
    "online_date": "8/3/2013"
  },
  {
    "id": "126",
    "name": "Clark St & North Ave",
    "latitude": "41.911791",
    "longitude": "-87.631841",
    "capacity": "15",
    "landmark": "128",
    "online_date": "7/29/2013"
  },
  {
    "id": "127",
    "name": "Lincoln Ave & Fullerton Ave",
    "latitude": "41.925905",
    "longitude": "-87.64926",
    "capacity": "15",
    "landmark": "131",
    "online_date": "10/29/2013"
  },
  {
    "id": "128",
    "name": "Damen Ave & Chicago Ave",
    "latitude": "41.895769",
    "longitude": "-87.67722",
    "capacity": "15",
    "landmark": "132",
    "online_date": "8/3/2013"
  },
  {
    "id": "129",
    "name": "Blue Island Ave & 18th St",
    "latitude": "41.857556",
    "longitude": "-87.661535",
    "capacity": "15",
    "landmark": "135",
    "online_date": "7/25/2013"
  },
  {
    "id": "130",
    "name": "Damen Ave & Division St",
    "latitude": "41.90331",
    "longitude": "-87.67695",
    "capacity": "15",
    "landmark": "136",
    "online_date": "7/26/2013"
  },
  {
    "id": "131",
    "name": "Lincoln Ave & Belmont Ave",
    "latitude": "41.939365",
    "longitude": "-87.668385",
    "capacity": "15",
    "landmark": "140",
    "online_date": "9/23/2013"
  },
  {
    "id": "132",
    "name": "Wentworth Ave & 24th St",
    "latitude": "41.849237",
    "longitude": "-87.631715",
    "capacity": "15",
    "landmark": "149",
    "online_date": "9/5/2013"
  },
  {
    "id": "134",
    "name": "Peoria St & Jackson Blvd",
    "latitude": "41.877749",
    "longitude": "-87.649633",
    "capacity": "19",
    "landmark": "158",
    "online_date": "7/25/2013"
  },
  {
    "id": "135",
    "name": "Halsted St & 21st St",
    "latitude": "41.85378",
    "longitude": "-87.64665",
    "capacity": "11",
    "landmark": "162",
    "online_date": "7/24/2013"
  },
  {
    "id": "136",
    "name": "Racine Ave & 13th St",
    "latitude": "41.865054",
    "longitude": "-87.656959",
    "capacity": "15",
    "landmark": "165",
    "online_date": "7/31/2013"
  },
  {
    "id": "137",
    "name": "Morgan Ave & 14th Pl",
    "latitude": "41.862378",
    "longitude": "-87.651062",
    "capacity": "15",
    "landmark": "169",
    "online_date": "7/31/2013"
  },
  {
    "id": "138",
    "name": "Clybourn Ave & Division St",
    "latitude": "41.904509",
    "longitude": "-87.6405",
    "capacity": "15",
    "landmark": "171",
    "online_date": "8/5/2013"
  },
  {
    "id": "140",
    "name": "Dearborn Pkwy & Delaware Pl",
    "latitude": "41.899007",
    "longitude": "-87.629928",
    "capacity": "19",
    "landmark": "173",
    "online_date": "8/1/2013"
  },
  {
    "id": "141",
    "name": "Clark St & Lincoln Ave",
    "latitude": "41.915689",
    "longitude": "-87.6346",
    "capacity": "19",
    "landmark": "179",
    "online_date": "8/16/2013"
  },
  {
    "id": "143",
    "name": "Sedgwick St & Webster Ave",
    "latitude": "41.92197",
    "longitude": "-87.63854",
    "capacity": "15",
    "landmark": "191",
    "online_date": "8/3/2013"
  },
  {
    "id": "144",
    "name": "Larrabee St & Webster Ave",
    "latitude": "41.92175",
    "longitude": "-87.64401",
    "capacity": "15",
    "landmark": "193",
    "online_date": "8/2/2013"
  },
  {
    "id": "146",
    "name": "Loomis St & Jackson Blvd",
    "latitude": "41.877945",
    "longitude": "-87.662007",
    "capacity": "11",
    "landmark": "206",
    "online_date": "7/28/2013"
  },
  {
    "id": "147",
    "name": "Indiana Ave & 26th St",
    "latitude": "41.8457",
    "longitude": "-87.62248",
    "capacity": "15",
    "landmark": "212",
    "online_date": "7/23/2013"
  },
  {
    "id": "148",
    "name": "State St & 33rd St",
    "latitude": "41.834734",
    "longitude": "-87.625813",
    "capacity": "11",
    "landmark": "216",
    "online_date": "8/27/2013"
  },
  {
    "id": "149",
    "name": "Calumet Ave & 33rd St",
    "latitude": "41.8349",
    "longitude": "-87.61793",
    "capacity": "11",
    "landmark": "217",
    "online_date": "8/3/2013"
  },
  {
    "id": "150",
    "name": "Fort Dearborn Dr & 31st St",
    "latitude": "41.838556",
    "longitude": "-87.608218",
    "capacity": "11",
    "landmark": "220",
    "online_date": "7/23/2013"
  },
  {
    "id": "152",
    "name": "Lincoln Ave & Diversey Pkwy",
    "latitude": "41.932225",
    "longitude": "-87.658617",
    "capacity": "15",
    "landmark": "226",
    "online_date": "7/29/2013"
  },
  {
    "id": "153",
    "name": "Southport Ave & Wellington Ave",
    "latitude": "41.93584",
    "longitude": "-87.6637",
    "capacity": "19",
    "landmark": "228",
    "online_date": "7/25/2013"
  },
  {
    "id": "154",
    "name": "Southport Ave & Belmont Ave",
    "latitude": "41.93949",
    "longitude": "-87.66378",
    "capacity": "15",
    "landmark": "229",
    "online_date": "7/29/2013"
  },
  {
    "id": "156",
    "name": "Clark St & Wellington Ave",
    "latitude": "41.93649682",
    "longitude": "-87.64753866",
    "capacity": "15",
    "landmark": "232",
    "online_date": "8/2/2013"
  },
  {
    "id": "157",
    "name": "Lake Shore Dr & Wellington Ave",
    "latitude": "41.936669",
    "longitude": "-87.636794",
    "capacity": "15",
    "landmark": "234",
    "online_date": "8/1/2013"
  },
  {
    "id": "158",
    "name": "Milwaukee Ave & Wabansia Ave",
    "latitude": "41.912616",
    "longitude": "-87.681391",
    "capacity": "15",
    "landmark": "243",
    "online_date": "7/26/2013"
  },
  {
    "id": "159",
    "name": "Claremont Ave & Hirsch St",
    "latitude": "41.907781",
    "longitude": "-87.685854",
    "capacity": "11",
    "landmark": "245",
    "online_date": "7/26/2013"
  },
  {
    "id": "160",
    "name": "Campbell Ave & North Ave",
    "latitude": "41.910535",
    "longitude": "-87.689556",
    "capacity": "15",
    "landmark": "257",
    "online_date": "7/26/2013"
  },
  {
    "id": "162",
    "name": "Damen Ave & Wellington Ave",
    "latitude": "41.93588",
    "longitude": "-87.67842",
    "capacity": "15",
    "landmark": "268",
    "online_date": "7/25/2013"
  },
  {
    "id": "163",
    "name": "Paulina St & Diversey Pkwy",
    "latitude": "41.93186",
    "longitude": "-87.67079",
    "capacity": "15",
    "landmark": "271",
    "online_date": "7/29/2013"
  },
  {
    "id": "164",
    "name": "Franklin St & Lake St",
    "latitude": "41.885837",
    "longitude": "-87.6355",
    "capacity": "23",
    "landmark": "272",
    "online_date": "8/3/2013"
  },
  {
    "id": "165",
    "name": "Clark St & Waveland Ave",
    "latitude": "41.94893",
    "longitude": "-87.65775",
    "capacity": "19",
    "landmark": "275",
    "online_date": "8/3/2013"
  },
  {
    "id": "166",
    "name": "Ashland Ave & Wrightwood Ave",
    "latitude": "41.92883",
    "longitude": "-87.668507",
    "capacity": "15",
    "landmark": "296",
    "online_date": "7/25/2013"
  },
  {
    "id": "167",
    "name": "Damen Ave & Coulter St",
    "latitude": "41.8492",
    "longitude": "-87.67564",
    "capacity": "11",
    "landmark": "306",
    "online_date": "7/25/2013"
  },
  {
    "id": "168",
    "name": "Michigan Ave & 14th St",
    "latitude": "41.864059",
    "longitude": "-87.623727",
    "capacity": "19",
    "landmark": "310",
    "online_date": "8/3/2013"
  },
  {
    "id": "169",
    "name": "Canal St & Harrison St",
    "latitude": "41.874337",
    "longitude": "-87.639566",
    "capacity": "15",
    "landmark": "326",
    "online_date": "7/23/2013"
  },
  {
    "id": "170",
    "name": "Clinton St & 18th St",
    "latitude": "41.85795",
    "longitude": "-87.640826",
    "capacity": "15",
    "landmark": "329",
    "online_date": "7/25/2013"
  },
  {
    "id": "171",
    "name": "May St & Cullerton St",
    "latitude": "41.855136",
    "longitude": "-87.654127",
    "capacity": "11",
    "landmark": "331",
    "online_date": "7/25/2013"
  },
  {
    "id": "173",
    "name": "Mies van der Rohe Way & Chicago Ave",
    "latitude": "41.89691",
    "longitude": "-87.621743",
    "capacity": "15",
    "landmark": "338",
    "online_date": "8/1/2013"
  },
  {
    "id": "174",
    "name": "Canal St & Madison St",
    "latitude": "41.882091",
    "longitude": "-87.639833",
    "capacity": "23",
    "landmark": "341",
    "online_date": "7/28/2013"
  },
  {
    "id": "175",
    "name": "Wells St & Polk St",
    "latitude": "41.872373",
    "longitude": "-87.633523",
    "capacity": "19",
    "landmark": "344",
    "online_date": "8/3/2013"
  },
  {
    "id": "176",
    "name": "Clark St & Elm St",
    "latitude": "41.903233",
    "longitude": "-87.631253",
    "capacity": "19",
    "landmark": "349",
    "online_date": "8/1/2013"
  },
  {
    "id": "177",
    "name": "Theater on the Lake",
    "latitude": "41.926277",
    "longitude": "-87.630834",
    "capacity": "15",
    "landmark": "350",
    "online_date": "8/13/2013"
  },
  {
    "id": "178",
    "name": "State St & 19th St",
    "latitude": "41.856594",
    "longitude": "-87.627542",
    "capacity": "15",
    "landmark": "408",
    "online_date": "7/23/2013"
  },
  {
    "id": "179",
    "name": "Martin Luther King Dr & Oakwood Blvd",
    "latitude": "41.82256",
    "longitude": "-87.61615",
    "capacity": "15",
    "landmark": "420",
    "online_date": "7/24/2013"
  },
  {
    "id": "181",
    "name": "LaSalle St & Illinois St",
    "latitude": "41.890749",
    "longitude": "-87.63206",
    "capacity": "19",
    "landmark": "430",
    "online_date": "7/21/2013"
  },
  {
    "id": "183",
    "name": "Damen Ave & Augusta Blvd",
    "latitude": "41.899714",
    "longitude": "-87.677234",
    "capacity": "15",
    "landmark": "142",
    "online_date": "7/26/2013"
  },
  {
    "id": "184",
    "name": "State St & 35th St",
    "latitude": "41.83104",
    "longitude": "-87.62688",
    "capacity": "19",
    "landmark": "82",
    "online_date": "8/3/2013"
  },
  {
    "id": "185",
    "name": "Stave St & Armitage Ave",
    "latitude": "41.917741",
    "longitude": "-87.691392",
    "capacity": "11",
    "landmark": "266",
    "online_date": "7/26/2013"
  },
  {
    "id": "186",
    "name": "Ogden Ave & Race Ave",
    "latitude": "41.891795",
    "longitude": "-87.658751",
    "capacity": "15",
    "landmark": "194",
    "online_date": "7/28/2013"
  },
  {
    "id": "188",
    "name": "Greenview Ave & Fullerton Ave",
    "latitude": "41.92533",
    "longitude": "-87.6658",
    "capacity": "15",
    "landmark": "295",
    "online_date": "7/29/2013"
  },
  {
    "id": "190",
    "name": "Southport Ave & Wrightwood Ave",
    "latitude": "41.92888",
    "longitude": "-87.66317",
    "capacity": "15",
    "landmark": "298",
    "online_date": "8/6/2013"
  },
  {
    "id": "191",
    "name": "Canal St & Monroe St",
    "latitude": "41.8807",
    "longitude": "-87.63947",
    "capacity": "23",
    "landmark": "56",
    "online_date": "8/7/2013"
  },
  {
    "id": "192",
    "name": "Canal St & Adams St",
    "latitude": "41.87923",
    "longitude": "-87.640015",
    "capacity": "27",
    "landmark": "11",
    "online_date": "8/7/2013"
  },
  {
    "id": "193",
    "name": "State St & 29th St",
    "latitude": "41.841707",
    "longitude": "-87.626938",
    "capacity": "15",
    "landmark": "213",
    "online_date": "8/23/2013"
  },
  {
    "id": "194",
    "name": "State St & Wacker Dr",
    "latitude": "41.887155",
    "longitude": "-87.62775",
    "capacity": "11",
    "landmark": "339",
    "online_date": "8/10/2013"
  },
  {
    "id": "195",
    "name": "Columbus Dr & Randolph St",
    "latitude": "41.8853",
    "longitude": "-87.62077",
    "capacity": "23",
    "landmark": "263",
    "online_date": "8/10/2013"
  },
  {
    "id": "196",
    "name": "Cityfront Plaza & N Water St",
    "latitude": "41.889875",
    "longitude": "-87.621994",
    "capacity": "19",
    "landmark": "427",
    "online_date": "8/10/2013"
  },
  {
    "id": "197",
    "name": "Michigan Ave & Madison St",
    "latitude": "41.882134",
    "longitude": "-87.625125",
    "capacity": "19",
    "landmark": "36",
    "online_date": "8/10/2013"
  },
  {
    "id": "198",
    "name": "Halsted St & Madison St",
    "latitude": "41.88175",
    "longitude": "-87.6478",
    "capacity": "19",
    "landmark": "159",
    "online_date": "8/10/2013"
  },
  {
    "id": "199",
    "name": "Wabash Ave & Grand Ave",
    "latitude": "41.891738",
    "longitude": "-87.626937",
    "capacity": "15",
    "landmark": "4",
    "online_date": "8/10/2013"
  },
  {
    "id": "200",
    "name": "King Dr & 47th St",
    "latitude": "41.809851",
    "longitude": "-87.616279",
    "capacity": "11",
    "landmark": "90",
    "online_date": "8/14/2013"
  },
  {
    "id": "201",
    "name": "Indiana Ave & 40th St",
    "latitude": "41.82168",
    "longitude": "-87.6216",
    "capacity": "15",
    "landmark": "83",
    "online_date": "8/14/2013"
  },
  {
    "id": "202",
    "name": "Halsted St & 18th St",
    "latitude": "41.857499",
    "longitude": "-87.646277",
    "capacity": "15",
    "landmark": "99",
    "online_date": "8/15/2013"
  },
  {
    "id": "203",
    "name": "Western Ave & 21st St",
    "latitude": "41.85394",
    "longitude": "-87.685243",
    "capacity": "15",
    "landmark": "91",
    "online_date": "8/15/2013"
  },
  {
    "id": "204",
    "name": "Prairie Ave & Garfield Blvd",
    "latitude": "41.7951",
    "longitude": "-87.61936",
    "capacity": "15",
    "landmark": "101",
    "online_date": "8/14/2013"
  },
  {
    "id": "205",
    "name": "Paulina St & 18th St",
    "latitude": "41.857901",
    "longitude": "-87.668745",
    "capacity": "15",
    "landmark": "88",
    "online_date": "8/15/2013"
  },
  {
    "id": "206",
    "name": "Halsted St & Archer Ave",
    "latitude": "41.847203",
    "longitude": "-87.646795",
    "capacity": "15",
    "landmark": "98",
    "online_date": "8/14/2013"
  },
  {
    "id": "207",
    "name": "Emerald Ave & 28th St",
    "latitude": "41.84358",
    "longitude": "-87.645368",
    "capacity": "15",
    "landmark": "399",
    "online_date": "8/15/2013"
  },
  {
    "id": "208",
    "name": "Ashland Ave & 21st St",
    "latitude": "41.85381",
    "longitude": "-87.665897",
    "capacity": "15",
    "landmark": "307",
    "online_date": "8/15/2013"
  },
  {
    "id": "209",
    "name": "Normal Ave & Archer Ave",
    "latitude": "41.849527",
    "longitude": "-87.640591",
    "capacity": "11",
    "landmark": "308",
    "online_date": "8/15/2013"
  },
  {
    "id": "210",
    "name": "Ashland Ave & Division St",
    "latitude": "41.903456",
    "longitude": "-87.66777",
    "capacity": "19",
    "landmark": "61",
    "online_date": "8/16/2013"
  },
  {
    "id": "211",
    "name": "St Clair St & Erie St",
    "latitude": "41.894448",
    "longitude": "-87.622663",
    "capacity": "19",
    "landmark": "16",
    "online_date": "8/15/2013"
  },
  {
    "id": "212",
    "name": "Wells St & Ohio St",
    "latitude": "41.892238",
    "longitude": "-87.633985",
    "capacity": "19",
    "landmark": "264",
    "online_date": "8/16/2013"
  },
  {
    "id": "213",
    "name": "Leavitt St & North Ave",
    "latitude": "41.910652",
    "longitude": "-87.6824",
    "capacity": "11",
    "landmark": "244",
    "online_date": "8/16/2013"
  },
  {
    "id": "214",
    "name": "Damen Ave & Grand Ave",
    "latitude": "41.89122",
    "longitude": "-87.67686",
    "capacity": "15",
    "landmark": "141",
    "online_date": "8/16/2013"
  },
  {
    "id": "215",
    "name": "Damen Ave & Madison St",
    "latitude": "41.88137",
    "longitude": "-87.67493",
    "capacity": "15",
    "landmark": "134",
    "online_date": "8/15/2013"
  },
  {
    "id": "216",
    "name": "California Ave & Division St",
    "latitude": "41.903029",
    "longitude": "-87.697474",
    "capacity": "15",
    "landmark": "256",
    "online_date": "8/16/2013"
  },
  {
    "id": "217",
    "name": "May St & Fulton St",
    "latitude": "41.886773",
    "longitude": "-87.656001",
    "capacity": "15",
    "landmark": "197",
    "online_date": "8/16/2013"
  },
  {
    "id": "218",
    "name": "Wells St & 19th St",
    "latitude": "41.856802",
    "longitude": "-87.633879",
    "capacity": "11",
    "landmark": "180",
    "online_date": "8/23/2013"
  },
  {
    "id": "219",
    "name": "Damen Ave & Cortland Ave",
    "latitude": "41.916027",
    "longitude": "-87.677411",
    "capacity": "11",
    "landmark": "133",
    "online_date": "8/20/2013"
  },
  {
    "id": "220",
    "name": "Hampden Ct & Diversey Pkwy",
    "latitude": "41.93262",
    "longitude": "-87.642385",
    "capacity": "19",
    "landmark": "123",
    "online_date": "8/19/2013"
  },
  {
    "id": "222",
    "name": "Milwaukee Ave & Rockwell St",
    "latitude": "41.920195",
    "longitude": "-87.693033",
    "capacity": "19",
    "landmark": "242",
    "online_date": "8/22/2013"
  },
  {
    "id": "223",
    "name": "Clifton Ave & Armitage Ave",
    "latitude": "41.918216",
    "longitude": "-87.656936",
    "capacity": "15",
    "landmark": "185",
    "online_date": "8/22/2013"
  },
  {
    "id": "224",
    "name": "Halsted St & Willow St",
    "latitude": "41.913778",
    "longitude": "-87.64884",
    "capacity": "19",
    "landmark": "181",
    "online_date": "8/22/2013"
  },
  {
    "id": "225",
    "name": "Halsted St & Dickens Ave",
    "latitude": "41.919936",
    "longitude": "-87.64883",
    "capacity": "15",
    "landmark": "192",
    "online_date": "8/19/2013"
  },
  {
    "id": "226",
    "name": "Racine Ave & Belmont Ave",
    "latitude": "41.939743",
    "longitude": "-87.658865",
    "capacity": "15",
    "landmark": "230",
    "online_date": "8/19/2013"
  },
  {
    "id": "227",
    "name": "Southport Ave & Waveland Ave",
    "latitude": "41.94815",
    "longitude": "-87.66394",
    "capacity": "15",
    "landmark": "235",
    "online_date": "8/20/2013"
  },
  {
    "id": "228",
    "name": "Damen Ave & Melrose Ave",
    "latitude": "41.9406",
    "longitude": "-87.6785",
    "capacity": "11",
    "landmark": "143",
    "online_date": "8/20/2013"
  },
  {
    "id": "229",
    "name": "Southport Ave & Roscoe St",
    "latitude": "41.943739",
    "longitude": "-87.66402",
    "capacity": "19",
    "landmark": "71",
    "online_date": "8/29/2013"
  },
  {
    "id": "230",
    "name": "Lincoln Ave & Roscoe St",
    "latitude": "41.94334",
    "longitude": "-87.67097",
    "capacity": "19",
    "landmark": "78",
    "online_date": "8/20/2013"
  },
  {
    "id": "231",
    "name": "Sheridan Rd & Montrose Ave",
    "latitude": "41.96167",
    "longitude": "-87.65464",
    "capacity": "15",
    "landmark": "130",
    "online_date": "8/20/2013"
  },
  {
    "id": "232",
    "name": "Pine Grove Ave & Addison St",
    "latitude": "41.947836",
    "longitude": "-87.645416",
    "capacity": "15",
    "landmark": "273",
    "online_date": "8/21/2013"
  },
  {
    "id": "233",
    "name": "Sangamon St & Washington Blvd",
    "latitude": "41.883004",
    "longitude": "-87.651148",
    "capacity": "15",
    "landmark": "409",
    "online_date": "8/29/2013"
  },
  {
    "id": "234",
    "name": "Clark St & Montrose Ave",
    "latitude": "41.961588",
    "longitude": "-87.666036",
    "capacity": "19",
    "landmark": "316",
    "online_date": "8/21/2013"
  },
  {
    "id": "236",
    "name": "Sedgwick St & Schiller St",
    "latitude": "41.907576",
    "longitude": "-87.638517",
    "capacity": "15",
    "landmark": "410",
    "online_date": "8/21/2013"
  },
  {
    "id": "237",
    "name": "Martin Luther King Dr & 29th St",
    "latitude": "41.842052",
    "longitude": "-87.617",
    "capacity": "15",
    "landmark": "214",
    "online_date": "8/21/2013"
  },
  {
    "id": "238",
    "name": "Ravenswood Ave & Montrose Ave",
    "latitude": "41.961626",
    "longitude": "-87.674101",
    "capacity": "15",
    "landmark": "92",
    "online_date": "8/22/2013"
  },
  {
    "id": "239",
    "name": "Western Ave & Leland Ave",
    "latitude": "41.966555",
    "longitude": "-87.688487",
    "capacity": "15",
    "landmark": "112",
    "online_date": "8/21/2013"
  },
  {
    "id": "240",
    "name": "Sheridan Rd & Irving Park Rd",
    "latitude": "41.95434",
    "longitude": "-87.654601",
    "capacity": "11",
    "landmark": "63",
    "online_date": "8/21/2013"
  },
  {
    "id": "241",
    "name": "Morgan St & Polk St",
    "latitude": "41.871737",
    "longitude": "-87.65103",
    "capacity": "15",
    "landmark": "168",
    "online_date": "8/22/2013"
  },
  {
    "id": "242",
    "name": "Damen Ave & Leland Ave",
    "latitude": "41.967094",
    "longitude": "-87.679028",
    "capacity": "15",
    "landmark": "93",
    "online_date": "8/22/2013"
  },
  {
    "id": "243",
    "name": "Lincoln Ave & Leavitt St",
    "latitude": "41.962391",
    "longitude": "-87.684146",
    "capacity": "15",
    "landmark": "126",
    "online_date": "8/22/2013"
  },
  {
    "id": "244",
    "name": "Ravenswood Ave & Irving Park Rd",
    "latitude": "41.95469",
    "longitude": "-87.67393",
    "capacity": "19",
    "landmark": "87",
    "online_date": "8/22/2013"
  },
  {
    "id": "245",
    "name": "Clarendon Ave & Junior Ter",
    "latitude": "41.961004",
    "longitude": "-87.649603",
    "capacity": "15",
    "landmark": "389",
    "online_date": "8/26/2013"
  },
  {
    "id": "246",
    "name": "Ashland Ave & Belle Plaine Ave",
    "latitude": "41.956061",
    "longitude": "-87.668869",
    "capacity": "11",
    "landmark": "249",
    "online_date": "8/26/2013"
  },
  {
    "id": "247",
    "name": "Shore Drive & 55th St",
    "latitude": "41.795212",
    "longitude": "-87.580715",
    "capacity": "15",
    "landmark": "361",
    "online_date": "8/23/2013"
  },
  {
    "id": "248",
    "name": "Woodlawn Ave & 55th St",
    "latitude": "41.795264",
    "longitude": "-87.596471",
    "capacity": "15",
    "landmark": "362",
    "online_date": "8/23/2013"
  },
  {
    "id": "249",
    "name": "Montrose Harbor",
    "latitude": "41.963982",
    "longitude": "-87.638181",
    "capacity": "15",
    "landmark": "388",
    "online_date": "8/26/2013"
  },
  {
    "id": "250",
    "name": "Ashland Ave & Wellington Ave",
    "latitude": "41.936083",
    "longitude": "-87.669807",
    "capacity": "19",
    "landmark": "269",
    "online_date": "8/26/2013"
  },
  {
    "id": "251",
    "name": "Clarendon Ave & Leland Ave",
    "latitude": "41.967968",
    "longitude": "-87.650001",
    "capacity": "15",
    "landmark": "385",
    "online_date": "8/26/2013"
  },
  {
    "id": "252",
    "name": "Greenwood Ave & 47th St",
    "latitude": "41.809835",
    "longitude": "-87.599383",
    "capacity": "15",
    "landmark": "396",
    "online_date": "8/27/2013"
  },
  {
    "id": "253",
    "name": "Clifton Ave & Lawrence Ave",
    "latitude": "41.968873",
    "longitude": "-87.658857",
    "capacity": "15",
    "landmark": "104",
    "online_date": "9/5/2013"
  },
  {
    "id": "254",
    "name": "Pine Grove Ave & Irving Park Rd",
    "latitude": "41.954383",
    "longitude": "-87.648043",
    "capacity": "15",
    "landmark": "324",
    "online_date": "9/9/2013"
  },
  {
    "id": "255",
    "name": "Indiana Ave & Roosevelt Rd",
    "latitude": "41.867888",
    "longitude": "-87.623041",
    "capacity": "19",
    "landmark": "309",
    "online_date": "9/5/2013"
  },
  {
    "id": "256",
    "name": "Broadway & Sheridan Rd",
    "latitude": "41.952833",
    "longitude": "-87.649993",
    "capacity": "15",
    "landmark": "323",
    "online_date": "9/5/2013"
  },
  {
    "id": "257",
    "name": "Lincoln Ave & Waveland Ave",
    "latitude": "41.94911",
    "longitude": "-87.675112",
    "capacity": "15",
    "landmark": "253",
    "online_date": "9/9/2013"
  },
  {
    "id": "258",
    "name": "Logan Blvd & Elston Ave",
    "latitude": "41.930584",
    "longitude": "-87.685126",
    "capacity": "19",
    "landmark": "145",
    "online_date": "9/9/2013"
  },
  {
    "id": "259",
    "name": "California Ave & Francis Pl",
    "latitude": "41.91855",
    "longitude": "-87.69723",
    "capacity": "15",
    "landmark": "259",
    "online_date": "9/12/2013"
  },
  {
    "id": "260",
    "name": "Kedzie Ave & Milwaukee Ave",
    "latitude": "41.929567",
    "longitude": "-87.707857",
    "capacity": "19",
    "landmark": "85",
    "online_date": "9/17/2013"
  },
  {
    "id": "261",
    "name": "Hermitage Ave & Polk St",
    "latitude": "41.871514",
    "longitude": "-87.669886",
    "capacity": "15",
    "landmark": "80",
    "online_date": "9/5/2013"
  },
  {
    "id": "262",
    "name": "Halsted St & 37th St",
    "latitude": "41.827071",
    "longitude": "-87.645801",
    "capacity": "11",
    "landmark": "414",
    "online_date": "10/1/2013"
  },
  {
    "id": "263",
    "name": "Rhodes Ave & 32nd St",
    "latitude": "41.836208",
    "longitude": "-87.613533",
    "capacity": "11",
    "landmark": "215",
    "online_date": "9/17/2013"
  },
  {
    "id": "264",
    "name": "Stetson Ave & South Water St",
    "latitude": "41.886861",
    "longitude": "-87.622694",
    "capacity": "19",
    "landmark": "48",
    "online_date": "9/18/2013"
  },
  {
    "id": "265",
    "name": "Cottage Grove Ave & Oakwood Blvd",
    "latitude": "41.822985",
    "longitude": "-87.6071",
    "capacity": "15",
    "landmark": "346",
    "online_date": "9/17/2013"
  },
  {
    "id": "267",
    "name": "Lake Park Ave & 47th St",
    "latitude": "41.809443",
    "longitude": "-87.591875",
    "capacity": "15",
    "landmark": "117",
    "online_date": "9/17/2013"
  },
  {
    "id": "268",
    "name": "Lake Shore Dr & North Blvd",
    "latitude": "41.911722",
    "longitude": "-87.626804",
    "capacity": "15",
    "landmark": "328",
    "online_date": "9/12/2013"
  },
  {
    "id": "271",
    "name": "Cottage Grove Ave & 43rd St",
    "latitude": "41.816499",
    "longitude": "-87.606582",
    "capacity": "11",
    "landmark": "86",
    "online_date": "9/12/2013"
  },
  {
    "id": "272",
    "name": "Indiana Ave & 31st St",
    "latitude": "41.838842",
    "longitude": "-87.621857",
    "capacity": "11",
    "landmark": "219",
    "online_date": "9/12/2013"
  },
  {
    "id": "273",
    "name": "Michigan Ave & 18th St",
    "latitude": "41.857937",
    "longitude": "-87.623633",
    "capacity": "15",
    "landmark": "150",
    "online_date": "9/12/2013"
  },
  {
    "id": "274",
    "name": "Racine Ave & 15th St",
    "latitude": "41.861267",
    "longitude": "-87.656625",
    "capacity": "15",
    "landmark": "304",
    "online_date": "9/12/2013"
  },
  {
    "id": "275",
    "name": "Ashland Ave & 13th St",
    "latitude": "41.865234",
    "longitude": "-87.666507",
    "capacity": "15",
    "landmark": "354",
    "online_date": "9/12/2013"
  },
  {
    "id": "276",
    "name": "California Ave & North Ave",
    "latitude": "41.91044",
    "longitude": "-87.6972",
    "capacity": "11",
    "landmark": "258",
    "online_date": "9/12/2013"
  },
  {
    "id": "277",
    "name": "Ashland Ave & Grand Ave",
    "latitude": "41.891072",
    "longitude": "-87.666611",
    "capacity": "15",
    "landmark": "434",
    "online_date": "9/12/2013"
  },
  {
    "id": "278",
    "name": "Wallace Ave & 35th St",
    "latitude": "41.830629",
    "longitude": "-87.64129",
    "capacity": "15",
    "landmark": "417",
    "online_date": "9/13/2013"
  },
  {
    "id": "279",
    "name": "Halsted St & 35th St",
    "latitude": "41.830661",
    "longitude": "-87.647172",
    "capacity": "15",
    "landmark": "413",
    "online_date": "9/13/2013"
  },
  {
    "id": "280",
    "name": "Morgan St & 31st St",
    "latitude": "41.8378",
    "longitude": "-87.65114",
    "capacity": "11",
    "landmark": "97",
    "online_date": "9/13/2013"
  },
  {
    "id": "281",
    "name": "Western Ave & 24th St",
    "latitude": "41.84847",
    "longitude": "-87.685109",
    "capacity": "15",
    "landmark": "393",
    "online_date": "9/13/2013"
  },
  {
    "id": "282",
    "name": "Halsted St & Maxwell St",
    "latitude": "41.86458",
    "longitude": "-87.64693",
    "capacity": "15",
    "landmark": "161",
    "online_date": "9/13/2013"
  },
  {
    "id": "283",
    "name": "LaSalle St & Jackson Blvd",
    "latitude": "41.87817",
    "longitude": "-87.631985",
    "capacity": "23",
    "landmark": "32",
    "online_date": "9/14/2013"
  },
  {
    "id": "284",
    "name": "Michigan Ave & Jackson Blvd",
    "latitude": "41.87785",
    "longitude": "-87.62408",
    "capacity": "23",
    "landmark": "340",
    "online_date": "9/14/2013"
  },
  {
    "id": "285",
    "name": "Wood St & Grand Ave",
    "latitude": "41.89113",
    "longitude": "-87.67203",
    "capacity": "15",
    "landmark": "432",
    "online_date": "9/13/2013"
  },
  {
    "id": "286",
    "name": "Franklin St & Quincy St",
    "latitude": "41.878724",
    "longitude": "-87.634793",
    "capacity": "15",
    "landmark": "7",
    "online_date": "9/14/2013"
  },
  {
    "id": "287",
    "name": "Franklin St & Arcade Pl",
    "latitude": "41.881131",
    "longitude": "-87.635185",
    "capacity": "23",
    "landmark": "57",
    "online_date": "9/13/2013"
  },
  {
    "id": "288",
    "name": "Larrabee St & Armitage Ave",
    "latitude": "41.91797",
    "longitude": "-87.64368",
    "capacity": "11",
    "landmark": "184",
    "online_date": "9/13/2013"
  },
  {
    "id": "289",
    "name": "Wells St & Concord Ln",
    "latitude": "41.912202",
    "longitude": "-87.634664",
    "capacity": "19",
    "landmark": "182",
    "online_date": "9/14/2013"
  },
  {
    "id": "290",
    "name": "Kedzie Ave & Palmer Ct",
    "latitude": "41.921525",
    "longitude": "-87.707322",
    "capacity": "15",
    "landmark": "292",
    "online_date": "10/9/2013"
  },
  {
    "id": "291",
    "name": "Wells St & Evergreen Ave",
    "latitude": "41.906724",
    "longitude": "-87.63483",
    "capacity": "19",
    "landmark": "302",
    "online_date": "9/14/2013"
  },
  {
    "id": "292",
    "name": "Southport Ave & Clark St",
    "latitude": "41.957081",
    "longitude": "-87.664199",
    "capacity": "11",
    "landmark": "317",
    "online_date": "9/14/2013"
  },
  {
    "id": "293",
    "name": "Broadway & Wilson Ave",
    "latitude": "41.965287",
    "longitude": "-87.658774",
    "capacity": "19",
    "landmark": "74",
    "online_date": "9/18/2013"
  },
  {
    "id": "294",
    "name": "Broadway & Berwyn Ave",
    "latitude": "41.978353",
    "longitude": "-87.659753",
    "capacity": "15",
    "landmark": "109",
    "online_date": "9/18/2013"
  },
  {
    "id": "295",
    "name": "Broadway & Argyle St",
    "latitude": "41.972972",
    "longitude": "-87.659637",
    "capacity": "15",
    "landmark": "108",
    "online_date": "9/18/2013"
  },
  {
    "id": "296",
    "name": "Broadway & Belmont Ave",
    "latitude": "41.940106",
    "longitude": "-87.645451",
    "capacity": "15",
    "landmark": "277",
    "online_date": "9/18/2013"
  },
  {
    "id": "297",
    "name": "Paulina St & Montrose Ave",
    "latitude": "41.961507",
    "longitude": "-87.671387",
    "capacity": "15",
    "landmark": "250",
    "online_date": "9/18/2013"
  },
  {
    "id": "298",
    "name": "Lincoln Ave & Belle Plaine Ave",
    "latitude": "41.955927",
    "longitude": "-87.679259",
    "capacity": "15",
    "landmark": "252",
    "online_date": "10/1/2013"
  },
  {
    "id": "299",
    "name": "Halsted St & Roscoe St",
    "latitude": "41.943662",
    "longitude": "-87.648917",
    "capacity": "15",
    "landmark": "127",
    "online_date": "9/19/2013"
  },
  {
    "id": "300",
    "name": "Broadway & Barry Ave",
    "latitude": "41.937739",
    "longitude": "-87.644094",
    "capacity": "15",
    "landmark": "137",
    "online_date": "9/19/2013"
  },
  {
    "id": "301",
    "name": "Clark St & Schiller St",
    "latitude": "41.907993",
    "longitude": "-87.631501",
    "capacity": "19",
    "landmark": "200",
    "online_date": "9/19/2013"
  },
  {
    "id": "302",
    "name": "Sheffield Ave & Wrightwood Ave",
    "latitude": "41.928712",
    "longitude": "-87.653833",
    "capacity": "19",
    "landmark": "211",
    "online_date": "9/20/2013"
  },
  {
    "id": "303",
    "name": "Broadway & Cornelia Ave",
    "latitude": "41.945512",
    "longitude": "-87.64598",
    "capacity": "15",
    "landmark": "278",
    "online_date": "9/19/2013"
  },
  {
    "id": "304",
    "name": "Halsted St & Waveland Ave",
    "latitude": "41.949333",
    "longitude": "-87.649634",
    "capacity": "15",
    "landmark": "325",
    "online_date": "9/19/2013"
  },
  {
    "id": "305",
    "name": "Western Ave & Division St",
    "latitude": "41.902893",
    "longitude": "-87.687275",
    "capacity": "15",
    "landmark": "241",
    "online_date": "9/21/2013"
  },
  {
    "id": "306",
    "name": "Sheridan Rd & Buena Ave",
    "latitude": "41.9584",
    "longitude": "-87.65423",
    "capacity": "15",
    "landmark": "374",
    "online_date": "9/23/2013"
  },
  {
    "id": "307",
    "name": "Southport Ave & Clybourn Ave",
    "latitude": "41.921004",
    "longitude": "-87.663257",
    "capacity": "15",
    "landmark": "186",
    "online_date": "9/25/2013"
  },
  {
    "id": "308",
    "name": "Seeley Ave & Roscoe St",
    "latitude": "41.943403",
    "longitude": "-87.679618",
    "capacity": "11",
    "landmark": "144",
    "online_date": "9/27/2013"
  },
  {
    "id": "309",
    "name": "Leavitt St & Armitage Ave",
    "latitude": "41.917805",
    "longitude": "-87.682437",
    "capacity": "11",
    "landmark": "286",
    "online_date": "9/20/2013"
  },
  {
    "id": "310",
    "name": "Damen Ave & Charleston St",
    "latitude": "41.920082",
    "longitude": "-87.677855",
    "capacity": "11",
    "landmark": "288",
    "online_date": "9/20/2013"
  },
  {
    "id": "311",
    "name": "Lincoln Ave & Eastwood Ave",
    "latitude": "41.96583",
    "longitude": "-87.68651",
    "capacity": "15",
    "landmark": "237",
    "online_date": "9/20/2013"
  },
  {
    "id": "312",
    "name": "Clarendon Ave & Gordon Ter",
    "latitude": "41.957879",
    "longitude": "-87.649519",
    "capacity": "15",
    "landmark": "379",
    "online_date": "9/20/2013"
  },
  {
    "id": "313",
    "name": "Lakeview Ave & Fullerton Pkwy",
    "latitude": "41.925858",
    "longitude": "-87.638973",
    "capacity": "19",
    "landmark": "147",
    "online_date": "9/20/2013"
  },
  {
    "id": "314",
    "name": "Ravenswood Ave & Berteau Ave",
    "latitude": "41.957921",
    "longitude": "-87.673567",
    "capacity": "15",
    "landmark": "251",
    "online_date": "9/27/2013"
  },
  {
    "id": "315",
    "name": "Leavitt St & Hirsch St",
    "latitude": "41.906717",
    "longitude": "-87.682779",
    "capacity": "11",
    "landmark": "255",
    "online_date": "9/21/2013"
  },
  {
    "id": "316",
    "name": "Damen Ave & Sunnyside Ave",
    "latitude": "41.96325",
    "longitude": "-87.679258",
    "capacity": "19",
    "landmark": "315",
    "online_date": "9/25/2013"
  },
  {
    "id": "317",
    "name": "Wood St & Taylor St",
    "latitude": "41.869154",
    "longitude": "-87.671045",
    "capacity": "15",
    "landmark": "285",
    "online_date": "9/21/2013"
  },
  {
    "id": "318",
    "name": "Southport Ave & Irving Park Rd",
    "latitude": "41.954177",
    "longitude": "-87.664358",
    "capacity": "15",
    "landmark": "321",
    "online_date": "9/21/2013"
  },
  {
    "id": "319",
    "name": "Greenview Ave & Diversey Pkwy",
    "latitude": "41.932595",
    "longitude": "-87.665939",
    "capacity": "15",
    "landmark": "294",
    "online_date": "9/26/2013"
  },
  {
    "id": "320",
    "name": "Loomis St & Lexington St",
    "latitude": "41.872187",
    "longitude": "-87.661501",
    "capacity": "15",
    "landmark": "332",
    "online_date": "9/21/2013"
  },
  {
    "id": "321",
    "name": "Wabash Ave & 8th St",
    "latitude": "41.871962",
    "longitude": "-87.626106",
    "capacity": "19",
    "landmark": "54",
    "online_date": "9/21/2013"
  },
  {
    "id": "322",
    "name": "Kimbark Ave & 53rd St",
    "latitude": "41.799568",
    "longitude": "-87.594747",
    "capacity": "15",
    "landmark": "397",
    "online_date": "9/21/2013"
  },
  {
    "id": "323",
    "name": "Sheridan Rd & Lawrence Ave",
    "latitude": "41.969517",
    "longitude": "-87.654691",
    "capacity": "15",
    "landmark": "384",
    "online_date": "9/23/2013"
  },
  {
    "id": "324",
    "name": "Stockton Dr & Wrightwood Ave",
    "latitude": "41.93132",
    "longitude": "-87.638742",
    "capacity": "15",
    "landmark": "276",
    "online_date": "10/3/2013"
  },
  {
    "id": "325",
    "name": "Clark St & Winnemac Ave",
    "latitude": "41.973385",
    "longitude": "-87.668365",
    "capacity": "15",
    "landmark": "392",
    "online_date": "9/23/2013"
  },
  {
    "id": "326",
    "name": "Clark St & Leland Ave",
    "latitude": "41.967096",
    "longitude": "-87.667429",
    "capacity": "11",
    "landmark": "239",
    "online_date": "9/27/2013"
  },
  {
    "id": "327",
    "name": "Sheffield Ave & Webster Ave",
    "latitude": "41.921687",
    "longitude": "-87.653714",
    "capacity": "19",
    "landmark": "188",
    "online_date": "9/25/2013"
  },
  {
    "id": "328",
    "name": "Ellis Ave & 58th St",
    "latitude": "41.788746",
    "longitude": "-87.601334",
    "capacity": "15",
    "landmark": "365",
    "online_date": "9/25/2013"
  },
  {
    "id": "329",
    "name": "Lake Shore Dr & Diversey Pkwy",
    "latitude": "41.932684",
    "longitude": "-87.63625",
    "capacity": "15",
    "landmark": "347",
    "online_date": "9/25/2013"
  },
  {
    "id": "330",
    "name": "Lincoln Ave & Addison St",
    "latitude": "41.946176",
    "longitude": "-87.673308",
    "capacity": "19",
    "landmark": "77",
    "online_date": "9/26/2013"
  },
  {
    "id": "331",
    "name": "Halsted St & Blackhawk St",
    "latitude": "41.90854",
    "longitude": "-87.648568",
    "capacity": "19",
    "landmark": "176",
    "online_date": "9/28/2013"
  },
  {
    "id": "332",
    "name": "Halsted St & Diversey Pkwy",
    "latitude": "41.933341",
    "longitude": "-87.648747",
    "capacity": "15",
    "landmark": "208",
    "online_date": "9/28/2013"
  },
  {
    "id": "333",
    "name": "Ashland Ave & Blackhawk St",
    "latitude": "41.907066",
    "longitude": "-87.667252",
    "capacity": "15",
    "landmark": "224",
    "online_date": "9/27/2013"
  },
  {
    "id": "334",
    "name": "Lake Shore Dr & Belmont Ave",
    "latitude": "41.940775",
    "longitude": "-87.639192",
    "capacity": "19",
    "landmark": "233",
    "online_date": "9/27/2013"
  },
  {
    "id": "335",
    "name": "Calumet Ave & 35th St",
    "latitude": "41.831379",
    "longitude": "-87.618034",
    "capacity": "15",
    "landmark": "345",
    "online_date": "10/17/2013"
  },
  {
    "id": "336",
    "name": "Cottage Grove Ave & 47th St",
    "latitude": "41.809855",
    "longitude": "-87.606755",
    "capacity": "15",
    "landmark": "422",
    "online_date": "10/17/2013"
  },
  {
    "id": "337",
    "name": "Clark St & Chicago Ave",
    "latitude": "41.896544",
    "longitude": "-87.630931",
    "capacity": "19",
    "landmark": "303",
    "online_date": "9/27/2013"
  },
  {
    "id": "338",
    "name": "Calumet Ave & 18th St",
    "latitude": "41.857611",
    "longitude": "-87.619407",
    "capacity": "15",
    "landmark": "102",
    "online_date": "9/28/2013"
  },
  {
    "id": "339",
    "name": "Emerald Ave & 31st St",
    "latitude": "41.838198",
    "longitude": "-87.645143",
    "capacity": "11",
    "landmark": "404",
    "online_date": "9/28/2013"
  },
  {
    "id": "340",
    "name": "Clark St & Wrightwood Ave",
    "latitude": "41.929546",
    "longitude": "-87.643118",
    "capacity": "15",
    "landmark": "209",
    "online_date": "10/24/2013"
  },
  {
    "id": "341",
    "name": "Adler Planetarium",
    "latitude": "41.866095",
    "longitude": "-87.607267",
    "capacity": "19",
    "landmark": "431",
    "online_date": "10/9/2013"
  },
  {
    "id": "342",
    "name": "Wolcott Ave & Polk St",
    "latitude": "41.871262",
    "longitude": "-87.673688",
    "capacity": "15",
    "landmark": "284",
    "online_date": "10/12/2013"
  },
  {
    "id": "343",
    "name": "Racine Ave & Wrightwood Ave",
    "latitude": "41.928887",
    "longitude": "-87.658971",
    "capacity": "15",
    "landmark": "297",
    "online_date": "10/24/2013"
  },
  {
    "id": "344",
    "name": "Wolcott Ave & Lawrence Ave",
    "latitude": "41.968641",
    "longitude": "-87.676335",
    "capacity": "15",
    "landmark": "26",
    "online_date": "10/9/2013"
  },
  {
    "id": "345",
    "name": "Lake Park Ave & 56th St",
    "latitude": "41.793242",
    "longitude": "-87.587782",
    "capacity": "15",
    "landmark": "119",
    "online_date": "10/9/2013"
  },
  {
    "id": "346",
    "name": "Ada St & Washington Blvd",
    "latitude": "41.88283",
    "longitude": "-87.661206",
    "capacity": "15",
    "landmark": "353",
    "online_date": "10/10/2013"
  },
  {
    "id": "347",
    "name": "Ashland Ave & Grace St",
    "latitude": "41.950687",
    "longitude": "-87.6687",
    "capacity": "15",
    "landmark": "319",
    "online_date": "10/12/2013"
  },
  {
    "id": "348",
    "name": "California Ave & 21st St",
    "latitude": "41.854016",
    "longitude": "-87.695445",
    "capacity": "15",
    "landmark": "96",
    "online_date": "10/14/2013"
  },
  {
    "id": "349",
    "name": "Halsted St & Wrightwood Ave",
    "latitude": "41.929143",
    "longitude": "-87.649077",
    "capacity": "15",
    "landmark": "210",
    "online_date": "10/28/2013"
  },
  {
    "id": "350",
    "name": "Ashland Ave & Chicago Ave",
    "latitude": "41.895966",
    "longitude": "-87.667747",
    "capacity": "15",
    "landmark": "247",
    "online_date": "10/22/2013"
  },
  {
    "id": "351",
    "name": "Cottage Grove Ave & 51st St",
    "latitude": "41.803038",
    "longitude": "-87.606615",
    "capacity": "15",
    "landmark": "440",
    "online_date": "10/17/2013"
  }
];
