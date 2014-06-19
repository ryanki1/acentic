(function (window) {
    function Weather() {
        this.RawData =
            {
                "channels": [{
                    "locationid": "GMXX0018",
                    "locationname": "Cologne",
                    "lastupdate": "6/1/2013 17:17:13 PM",
                    "forecast": [
                  {
                      "day": "Sat",
                      "date": "2013-06-01",
                      "low": "5",
                      "high": "12",
                      "code": "9"
                  },
                  {
                      "day": "Sun",
                      "date": "2013-06-02",
                      "low": "3",
                      "high": "16",
                      "code": "32"
                  },
                  {
                      "day": "Mon",
                      "date": "2013-06-03",
                      "low": "3",
                      "high": "15",
                      "code": "44"
                  },
                  {
                      "day": "Tue",
                      "date": "2013-06-04",
                      "low": "3",
                      "high": "16",
                      "code": "32"
                  },
                  {
                      "day": "Wed",
                      "date": "2013-06-05",
                      "low": "8",
                      "high": "16",
                      "code": "32"
                  }
                ]
                },
            { "locationid": "UKXX0158",
                "locationname": "Windsor",
                "lastupdate": "6/1/2013 17:20:13 PM",
                "forecast": [
                  {
                      "day": "Sat",
                      "date": "2013-06-01",
                      "low": "19",
                      "high": "26",
                      "code": "11"
                  },
                  {
                      "day": "Sun",
                      "date": "2013-06-02",
                      "low": "9",
                      "high": "22",
                      "code": "44"
                  },
                  {
                      "day": "Mon",
                      "date": "2013-06-03",
                      "low": "12",
                      "high": "22",
                      "code": "32"
                  },
                  {
                      "day": "Tue",
                      "date": "2013-06-04",
                      "low": "7",
                      "high": "23",
                      "code": "32"
                  },
                  {
                      "day": "Wed",
                      "date": "2013-06-05",
                      "low": "10",
                      "high": "15",
                      "code": "44"
                  }
                ]
            },
              { "locationid": "GMXX3581",
                  "locationname": "Baden Baden",
                  "lastupdate": "6/1/2013 17:20:15 PM",
                  "forecast": [
                  {
                      "day": "Sat",
                      "date": "2013-06-01",
                      "low": "8",
                      "high": "18",
                      "code": "11"
                  },
                  {
                      "day": "Sun",
                      "date": "2013-06-02",
                      "low": "8",
                      "high": "13",
                      "code": "11"
                  },
                  {
                      "day": "Mon",
                      "date": "2013-06-03",
                      "low": "8",
                      "high": "13",
                      "code": "44"
                  },
                  {
                      "day": "Tue",
                      "date": "2013-06-04",
                      "low": "9",
                      "high": "13",
                      "code": "9"
                  },
                  {
                      "day": "Wed",
                      "date": "2013-06-05",
                      "low": "8",
                      "high": "13",
                      "code": "44"
                  }
                ]
              }
              ]
          }
    }
    // Export function
    window.Acentic = window.Acentic || {};
    window.Acentic.Weather = Weather;
} (window));