(function (window) {
    function WeatherLocations() {
        this.RawData = {
            "weatherlocations": {
                "location": [
                  {
                      "code": "AEXX0001",
                      "name": "Abu Dhabi",
                      "country": "United Arab Emirates"
                  },
                  {
                      "code": "AEXX0004",
                      "name": "Dubai",
                      "country": "United Arab Emirates"
                  },
                  {
                      "code": "AEXX0005",
                      "name": "Sharjah",
                      "country": "United Arab Emirates"
                  },
                  {
                      "code": "ALXX0002",
                      "name": "Tirana",
                      "country": "Albania"
                  },
                  {
                      "code": "ASXX0075",
                      "name": "Melbourne",
                      "country": "Australia"
                  },
                  {
                      "code": "ASXX0112",
                      "name": "Sydney",
                      "country": "Australia"
                  },
                  {
                      "code": "AUXX0016",
                      "name": "Linz",
                      "country": "Austria"
                  },
                  {
                      "code": "AUXX0025",
                      "name": "Vienna",
                      "country": "Austria"
                  },
                  {
                      "code": "BEXX0005",
                      "name": "Brussels",
                      "country": "Belgium"
                  },
                  {
                      "code": "BFXX0016",
                      "name": "Bahamas",
                      "country": "Bahamas"
                  },
                  {
                      "code": "BRXX0232",
                      "name": "Sao Paulo",
                      "country": "Brasil"
                  },
                  {
                      "code": "CAXX0504",
                      "name": "Toronto",
                      "country": "Canada"
                  },
                  {
                      "code": "CHXX0008",
                      "name": "Beijing",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0019",
                      "name": "Dalian",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0037",
                      "name": "Guangzhou",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0049",
                      "name": "Hong Kong",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0116",
                      "name": "Shanghai",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0120",
                      "name": "Shenzhen",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0512",
                      "name": "Macau",
                      "country": "China"
                  },
                  {
                      "code": "CHXX0522",
                      "name": "Ningbo",
                      "country": "China"
                  },
                  {
                      "code": "DAXX0009",
                      "name": "Copenhagen",
                      "country": "Danmark"
                  },
                  {
                      "code": "DAXX0029",
                      "name": "Roskilde",
                      "country": "Danmark"
                  },
                  {
                      "code": "EIXX0014",
                      "name": "Dublin",
                      "country": "Ireland"
                  },
                  {
                      "code": "EZXX0012",
                      "name": "Prague",
                      "country": "Czech Republic"
                  },
                  {
                      "code": "FIXX0002",
                      "name": "Helsinki",
                      "country": "Finnland"
                  },
                  {
                      "code": "FRXX0016",
                      "name": "Bordeaux",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0023",
                      "name": "Cannes",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0028",
                      "name": "Chantilly",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0041",
                      "name": "Grasse",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0052",
                      "name": "Lille",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0055",
                      "name": "Lyon",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0059",
                      "name": "Marseille",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0073",
                      "name": "Nice",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0076",
                      "name": "Paris",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0095",
                      "name": "Strassbourg",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0176",
                      "name": "Arzon",
                      "country": "France"
                  },
                  {
                      "code": "FRXX0299",
                      "name": "Evian",
                      "country": "France"
                  },
                  {
                      "code": "GMXX0004",
                      "name": "Augsburg",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0007",
                      "name": "Berlin",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0010",
                      "name": "Bonn",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0014",
                      "name": "Bremen",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0018",
                      "name": "Cologne",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0024",
                      "name": "Dortmund",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0025",
                      "name": "Dresden",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0028",
                      "name": "Dusseldorf",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0035",
                      "name": "Essen",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0040",
                      "name": "Frankfurt",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0048",
                      "name": "Halle",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0049",
                      "name": "Hamburg",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0051",
                      "name": "Hannover",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0064",
                      "name": "Kiel",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0087",
                      "name": "Munich",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0128",
                      "name": "Stuttgart",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0138",
                      "name": "Wiesbaden",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0155",
                      "name": "Nuerburg",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX0247",
                      "name": "Fulda",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX1323",
                      "name": "Berchtesgaden",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX1949",
                      "name": "Wildungen",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX2549",
                      "name": "Schofhausen",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX2598",
                      "name": "Mainz",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX3003",
                      "name": "Kleve",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX3277",
                      "name": "Weeze",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX3581",
                      "name": "Baden Baden",
                      "country": "Germany"
                  },
                  {
                      "code": "GMXX5355",
                      "name": "Weingarten",
                      "country": "Germany"
                  },
                  {
                      "code": "GRXX0004",
                      "name": "Athens",
                      "country": "Greece"
                  },
                  {
                      "code": "GRXX0020",
                      "name": "Serrai",
                      "country": "Greece"
                  },
                  {
                      "code": "HUXX0002",
                      "name": "Budapest",
                      "country": "Hungary"
                  },
                  {
                      "code": "HUXX0218",
                      "name": "Visegrád",
                      "country": "Hungary"
                  },
                  {
                      "code": "INXX0096",
                      "name": "New Delhi",
                      "country": "India"
                  },
                  {
                      "code": "INXX0102",
                      "name": "Pune",
                      "country": "India"
                  },
                  {
                      "code": "ISXX0010",
                      "name": "Jerusalem",
                      "country": "Israel"
                  },
                  {
                      "code": "ITLM2988",
                      "name": "Saronno",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0003",
                      "name": "Bari",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0005",
                      "name": "Bergamo",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0006",
                      "name": "Bologna",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0028",
                      "name": "Florence",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0031",
                      "name": "Genoa",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0042",
                      "name": "Milan",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0052",
                      "name": "Naples",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0067",
                      "name": "Rome",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0080",
                      "name": "Trieste",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0081",
                      "name": "Turin",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0085",
                      "name": "Venice",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0124",
                      "name": "Lecce",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0140",
                      "name": "Parma",
                      "country": "Italy"
                  },
                  {
                      "code": "ITXX0377",
                      "name": "Busto Arsizio",
                      "country": "Italy"
                  },
                  {
                      "code": "JAXX0085",
                      "name": "Tokyo",
                      "country": "Japan"
                  },
                  {
                      "code": "KSXX0037",
                      "name": "Seoul",
                      "country": "South Korea"
                  },
                  {
                      "code": "LOXX0001",
                      "name": "Bratislava",
                      "country": "Slovakia"
                  },
                  {
                      "code": "LSXX0002",
                      "name": "Vaduz",
                      "country": "Luxembourg"
                  },
                  {
                      "code": "LUXX0003",
                      "name": "Luxembourg",
                      "country": "Luxembourg"
                  },
                  {
                      "code": "MNXX0001",
                      "name": "Monaco",
                      "country": "Monaco"
                  },
                  {
                      "code": "MOXX0001",
                      "name": "Casablanca",
                      "country": "Moroco"
                  },
                  {
                      "code": "MTXX0001",
                      "name": "Valletta",
                      "country": "Malta"
                  },
                  {
                      "code": "MXDF0132",
                      "name": "Mexico City",
                      "country": "Mexico"
                  },
                  {
                      "code": "NLXX0002",
                      "name": "Amsterdam",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NLXX0004",
                      "name": "Breda",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NLXX0007",
                      "name": "Eindhoven",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NLXX0015",
                      "name": "Rotterdam",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NLXX0018",
                      "name": "Utrecht",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NLXX0024",
                      "name": "Renesse",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NLXX0040",
                      "name": "Bergen op Zoom",
                      "country": "Netherlands"
                  },
                  {
                      "code": "NOXX0029",
                      "name": "Oslo",
                      "country": "Norway"
                  },
                  {
                      "code": "NZXX0003",
                      "name": "Auckland",
                      "country": "Newzeeland"
                  },
                  {
                      "code": "PLXX0003",
                      "name": "Gdansk",
                      "country": "Poland"
                  },
                  {
                      "code": "PLXX0012",
                      "name": "Krakow",
                      "country": "Poland"
                  },
                  {
                      "code": "PLXX0028",
                      "name": "Warsaw",
                      "country": "Poland"
                  },
                  {
                      "code": "PLXX0040",
                      "name": "Poznan",
                      "country": "Poland"
                  },
                  {
                      "code": "PLXX0053",
                      "name": "Sopot",
                      "country": "Poland"
                  },
                  {
                      "code": "POXX0013",
                      "name": "Faro",
                      "country": "Portugal"
                  },
                  {
                      "code": "POXX0022",
                      "name": "Porto",
                      "country": "Portugal"
                  },
                  {
                      "code": "POXX0036",
                      "name": "Evora",
                      "country": "Portugal"
                  },
                  {
                      "code": "POXX0039",
                      "name": "Lisboa",
                      "country": "Portugal"
                  },
                  {
                      "code": "POXX0050",
                      "name": "Obidos",
                      "country": "Portugal"
                  },
                  {
                      "code": "POXX0238",
                      "name": "Obidos",
                      "country": "Portugal"
                  },
                  {
                      "code": "QAXX0003",
                      "name": "Doha",
                      "country": "Quatar"
                  },
                  {
                      "code": "RPXX0007",
                      "name": "Cebu",
                      "country": "Philippines"
                  },
                  {
                      "code": "RPXX0008",
                      "name": "Davao",
                      "country": "Philippines"
                  },
                  {
                      "code": "RPXX0017",
                      "name": "Manila",
                      "country": "Philipines"
                  },
                  {
                      "code": "RPXX0027",
                      "name": "Quezon City",
                      "country": "Philippines"
                  },
                  {
                      "code": "RPXX0248",
                      "name": "Binangonan",
                      "country": "Philippines"
                  },
                  {
                      "code": "RPXX1257",
                      "name": "Caloocan",
                      "country": "Philippines"
                  },
                  {
                      "code": "RSXX0063",
                      "name": "Moscow",
                      "country": "Russian Federation"
                  },
                  {
                      "code": "RSXX0077",
                      "name": "Novosibirsk",
                      "country": "Russian Federation"
                  },
                  {
                      "code": "RSXX0091",
                      "name": "Saint Petersburg",
                      "country": "Russian Federation"
                  },
                  {
                      "code": "RSXX1415",
                      "name": "Gelendzhik",
                      "country": "Russian Federation"
                  },
                  {
                      "code": "RSXX1430",
                      "name": "Sochi",
                      "country": "Russian Federation"
                  },
                  {
                      "code": "RSXX2769",
                      "name": "Donetsk",
                      "country": "Russian Federation"
                  },
                  {
                      "code": "SAXX0011",
                      "name": "Jeddah",
                      "country": "Saudi Arabia"
                  },
                  {
                      "code": "SAXX0013",
                      "name": "Mecca",
                      "country": "Saudi Arabia"
                  },
                  {
                      "code": "SAXX0040",
                      "name": "Jizan",
                      "country": "Saudi Arabia"
                  },
                  {
                      "code": "SFXX0010",
                      "name": "Capetown",
                      "country": "South Africa"
                  },
                  {
                      "code": "SFXX0023",
                      "name": "Johannesburg",
                      "country": "South Africa"
                  },
                  {
                      "code": "SNXX0006",
                      "name": "Singapore",
                      "country": "Singapore"
                  },
                  {
                      "code": "SPXX0015",
                      "name": "Barcelona",
                      "country": "Spain"
                  },
                  {
                      "code": "SPXX0050",
                      "name": "Madrid",
                      "country": "Spain"
                  },
                  {
                      "code": "SPXX0061",
                      "name": "Palma de Mallorca",
                      "country": "Spain"
                  },
                  {
                      "code": "SPXX0074",
                      "name": "Seville",
                      "country": "Spain"
                  },
                  {
                      "code": "SPXX0082",
                      "name": "Valencia",
                      "country": "Spain"
                  },
                  {
                      "code": "SPXX0204",
                      "name": " Caceres",
                      "country": "Spain"
                  },
                  {
                      "code": "SWXX0008",
                      "name": "Halmstad",
                      "country": "Sweden"
                  },
                  {
                      "code": "SWXX0020",
                      "name": "Malmö",
                      "country": "Sweden"
                  },
                  {
                      "code": "SWXX0031",
                      "name": "Stockholm",
                      "country": "Sweden"
                  },
                  {
                      "code": "SZXX0006",
                      "name": "Bern",
                      "country": "Switzerland"
                  },
                  {
                      "code": "SZXX0013",
                      "name": "Geneva",
                      "country": "Switzerland"
                  },
                  {
                      "code": "SZXX0033",
                      "name": "Zurich",
                      "country": "Switzerland"
                  },
                  {
                      "code": "SZXX0038",
                      "name": "Davos",
                      "country": "Suisse"
                  },
                  {
                      "code": "SZXX0041",
                      "name": "St. Moritz",
                      "country": "Suisse"
                  },
                  {
                      "code": "SZXX0042",
                      "name": "Zermatt",
                      "country": "Switzerland"
                  },
                  {
                      "code": "THXX0002",
                      "name": "Bangkok",
                      "country": "Thailand"
                  },
                  {
                      "code": "THXX0018",
                      "name": "Phuket",
                      "country": "Thailand"
                  },
                  {
                      "code": "TUXX0014",
                      "name": "Istanbul",
                      "country": "Turkey"
                  },
                  {
                      "code": "UKXX0001",
                      "name": "Aberdeen",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0005",
                      "name": "Ashford",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0006",
                      "name": "Ayr",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0011",
                      "name": "Basingstoke",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0015",
                      "name": "Belfast",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0018",
                      "name": "Birmingham",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0019",
                      "name": "Blackpool",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0021",
                      "name": "Bournemouth",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0022",
                      "name": "Bracknell",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0023",
                      "name": "Bradford",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0025",
                      "name": "Bristol",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0026",
                      "name": "Bromsgrove",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0027",
                      "name": "Burton-On-Trent",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0028",
                      "name": "Cambridge",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0030",
                      "name": "Cardiff",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0033",
                      "name": "Chester",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0037",
                      "name": "Colchester",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0038",
                      "name": "Coventry",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0040",
                      "name": "Derby",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0045",
                      "name": "Dundee",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0046",
                      "name": "Dunfermline",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0047",
                      "name": "Durham",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0051",
                      "name": "Eastleigh",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0052",
                      "name": "Edinburgh",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0056",
                      "name": "Fareham",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0057",
                      "name": "Farnborough",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0061",
                      "name": "Glasgow",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0062",
                      "name": "Gloucester",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0072",
                      "name": "Ipswich",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0078",
                      "name": "Leeds",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0079",
                      "name": "Leicester",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0083",
                      "name": "Liverpool",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0085",
                      "name": "London",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0090",
                      "name": "Maidenhead",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0091",
                      "name": "Maidstone",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0092",
                      "name": "Manchester",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0097",
                      "name": "Newbury",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0098",
                      "name": "Newcastle",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0099",
                      "name": "Newport",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0102",
                      "name": "Northampton",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0103",
                      "name": "Norwich",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0104",
                      "name": "Nottingham",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0106",
                      "name": "Oxford",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0110",
                      "name": "Peterborough",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0115",
                      "name": "Portsmouth",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0117",
                      "name": "Reading",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0133",
                      "name": "Sheffield",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0138",
                      "name": "Southampton",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0142",
                      "name": "Stoke on Trent",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0145",
                      "name": "Sunderland",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0146",
                      "name": "Swansea",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0147",
                      "name": "Swindon",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0152",
                      "name": "Wakefield",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0153",
                      "name": "Warrington",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0158",
                      "name": "Windsor",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0162",
                      "name": "York",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0166",
                      "name": "Coylumbridge",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0204",
                      "name": "Aylesbury",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0215",
                      "name": "Brighton",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0228",
                      "name": "Crewe",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0268",
                      "name": "Milton Keynes",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0282",
                      "name": "Preston",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0309",
                      "name": "Taunton",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0474",
                      "name": "High Wycombe",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0476",
                      "name": "Hull",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0518",
                      "name": "Basildon",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0527",
                      "name": "Hemel Hempstead",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0581",
                      "name": "Lancaster",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0614",
                      "name": "Ironbridge",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0640",
                      "name": "Arundel",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0850",
                      "name": "Bexley",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0924",
                      "name": "Watford",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0927",
                      "name": "Waltham Abbey",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0950",
                      "name": "Bexleyheath",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0962",
                      "name": "Tewkesbury",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX0998",
                      "name": "Dunkeld",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1252",
                      "name": "Rugby",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1333",
                      "name": "Craigendarroch",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1344",
                      "name": "Brentwood",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1347",
                      "name": "Warwick",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1373",
                      "name": "Cobham",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1384",
                      "name": "Rochester",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1425",
                      "name": "Croydon",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1426",
                      "name": "Ealing",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1526",
                      "name": "Worsley",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1549",
                      "name": " Stratford-upon-Avon",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1696",
                      "name": "Washington",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1727",
                      "name": "Guildford",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1783",
                      "name": "Runcorn",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1894",
                      "name": "Kent",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX1899",
                      "name": "Gatwick",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UKXX2095",
                      "name": "Haydock Park",
                      "country": "United Kingdom"
                  },
                  {
                      "code": "UPXX0010",
                      "name": "Dnipropetrovsk",
                      "country": "Ukraine"
                  },
                  {
                      "code": "UPXX0011",
                      "name": "Donetsk",
                      "country": "Ukraine"
                  },
                  {
                      "code": "UPXX0014",
                      "name": "Kharkiv",
                      "country": "Ukraine"
                  },
                  {
                      "code": "UPXX0016",
                      "name": "Kiev",
                      "country": "Ukrain"
                  },
                  {
                      "code": "UPXX0017",
                      "name": "Lviv",
                      "country": "Ukraine"
                  },
                  {
                      "code": "UPXX0021",
                      "name": "Odessa",
                      "country": "Ukraine"
                  },
                  {
                      "code": "UPXX0060",
                      "name": "Zaporizhzhya",
                      "country": "Ukraine"
                  },
                  {
                      "code": "UPXX0204",
                      "name": "Alushta",
                      "country": "Ukraine"
                  },
                  {
                      "code": "USAZ0166",
                      "name": "Phoenix",
                      "country": "United States"
                  },
                  {
                      "code": "USCA0638",
                      "name": "Los Angeles",
                      "country": "United States"
                  },
                  {
                      "code": "USCA0987",
                      "name": "San Francisco",
                      "country": "United States"
                  },
                  {
                      "code": "USDC0001",
                      "name": "Washington",
                      "country": "United States"
                  },
                  {
                      "code": "USFL0316",
                      "name": "Miami",
                      "country": "United States"
                  },
                  {
                      "code": "USGA0028",
                      "name": "Atlanta",
                      "country": "United States"
                  },
                  {
                      "code": "USIL0225",
                      "name": "Chicago",
                      "country": "United States"
                  },
                  {
                      "code": "USIN0570",
                      "name": "Rockville IN",
                      "country": "United States"
                  },
                  {
                      "code": "USLA0338",
                      "name": "New Orleans",
                      "country": "United States"
                  },
                  {
                      "code": "USMA0046",
                      "name": "Boston",
                      "country": "United States"
                  },
                  {
                      "code": "USMD0347",
                      "name": "Rockville MD",
                      "country": "United States"
                  },
                  {
                      "code": "USMN0503",
                      "name": "Minneapolis",
                      "country": "United States"
                  },
                  {
                      "code": "USNY0996",
                      "name": "New York",
                      "country": "United States"
                  },
                  {
                      "code": "USPA1276",
                      "name": "Philadelphia",
                      "country": "United States"
                  },
                  {
                      "code": "USTX0327",
                      "name": "Dallas",
                      "country": "United States"
                  },
                  {
                      "code": "USUT0225",
                      "name": "Salt Lake City",
                      "country": "United States"
                  },
                  {
                      "code": "USWA0395",
                      "name": "Seattle",
                      "country": "United States"
                  }
                ]
            }
        }
      }
    // Export function
    window.Acentic = window.Acentic || {};
    window.Acentic.WeatherLocations = WeatherLocations;
} (window));