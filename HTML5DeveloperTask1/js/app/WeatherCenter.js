(function (window, $) {
    function WeatherCenter(params) {
        defaultParams = {
            hook: "#cityScroller",
            forecastHook: "#forecast",
            leftScroll: "#leftNav",
            rightScroll: "#rightNav"
        }
        params = $.extend(defaultParams, params);
        //debugger;
        var self = this;
        self.Hook = params.hook;
        self.ForecastHook = params.forecastHook;
        var weatherLocations = new Acentic.WeatherLocations();
        var weather = new Acentic.Weather();
        self.WeatherLocations = weatherLocations.RawData;
        self.Weather = weather.RawData;
        $(params.leftScroll).on("click", function () {
            debugger;
            var goLeft = -1;
            self.FindNextWeatherCityFrom({
                startingIndex: self.GetSelectedCityCode(),
                direction: goLeft
            });
            var forecast = self.GetForecastFor(self.GetSelectedCityCode());
            self.DisplayForecast({
                forecast: forecast
            });
        });
        $(params.rightScroll).on("click", function () {
            debugger;
            var goRight = 1;
            self.FindNextWeatherCityFrom({
                startingIndex: self.GetSelectedCityCode(),
                direction: goRight
            });
            var forecast = self.GetForecastFor(self.GetSelectedCityCode());
            self.DisplayForecast({
                forecast: forecast
            });
        });
        //debugger;
        // Due to Same Origin browser Policy was not able to make direct use of REST API 
        //        if (!self.Cities || self.Cities === 0) {
        //            $.ajax({
        //                url: "http://acs.acentic.com/CloudServices/rest/weatherlocations",
        //                dataType: "json",
        //                success: function (data) {
        //                    debugger;
        //                    this.Cities = data;
        //                    if (cbTestSuccess) cbTestSuccess();
        //                },
        //                error: function (x, y, z) {
        //                    debugger;
        //                    if (cbTestError) cbTestError();
        //                },
        //                complete: function (x, y, z) {
        //                    debugger;
        //                },
        //                always: function (x, y, z) {
        //                    debugger;
        //                }
        //            });
        //);
        //        }
    }
    WeatherCenter.prototype = {
        init: function () {
            debugger;
            this.GetCities();
        },
        veilAndUnscroll: function () {
            $(this.Hook + " li[class!='veil']").addClass('veil').removeClass('scroller');
        },
        GetCityElementAtIndex: function (index) {
            var selectAllHookListElements = this.Hook + " li";
            var city = $(selectAllHookListElements)[index];
            return city;
        },
        GetIndexOfCityCode: function (cityCode) {
            var selectAllHookListElements = this.Hook + " li";
            var cityCodeIndex = -1;
            $.grep($(selectAllHookListElements), function (ele, index) {
                //debugger;
                var eleCityCode = $(ele).attr("code");
                var bingo = (eleCityCode === cityCode);
                if (bingo) {
                    cityCodeIndex = index;
                }
                return bingo;
            });
            return cityCodeIndex;
        },
        GetSelectedCityCode: function () {
            var selectedCity = $(".scroller")[1];
            var selectedCityCode = $(selectedCity).attr("code");
            return selectedCityCode;
        },
        HasWeather: function (cityCode) {
            var weather = $.grep(this.Weather.channels, function (ele, index) { return (ele.locationid === cityCode); });
            return (weather.length > 0);
        },
        GetForecastFor: function (cityCode) {
            var ret = undefined;
            var channelList = $.grep(this.Weather.channels, function (ele, index) {
                return (ele.locationid === cityCode);
            });
            if (channelList.length > 0) {
                ret = channelList[0].forecast;
            }
            return ret;
        },
        CtoF: function (c) {
            return Math.round((9 / 5) * c + 32);
        },
        DisplayForecast: function (params) {
            var defaultParams = {
                forecast: undefined,
                imagePath: "resources/weathericon/"
            }
            params = $.extend(defaultParams, params);
            this.DisplayTableClear();
            if (params.forecast === undefined) return;
            var self = this;
            var htmlHead = "<tr>";
            var htmlHighC = "<tr>";
            var htmlHighF = "<tr>";
            var htmlSymbol = "<tr>";
            var htmlLowC = "<tr>";
            var htmlLowF = "<tr>";
            $.each(params.forecast, function (index, ele) {
                debugger;
                htmlHead = htmlHead + "<th>" + ele.day + "</th>";
                var highC = ele.high;
                htmlHighC = htmlHighC + "<td>" + highC + "</td>";
                htmlHighF = htmlHighF + "<td>" + self.CtoF(highC) + "</td>";
                var imageFile = ele.code + ".png";
                htmlSymbol = htmlSymbol + "<td><img src='" + params.imagePath + imageFile + "'/></td>";
                var lowC = ele.low;
                htmlLowC = htmlLowC + "<td>" + lowC + "</td>";
                htmlLowF = htmlLowF + "<td>" + self.CtoF(lowC) + "</td>";
            });
            htmlHead = htmlHead + "</tr>";
            htmlHighC = htmlHighC + "</tr>";
            htmlHighF = htmlHighF + "</tr>";
            htmlSymbol = htmlSymbol + "</tr>";
            htmlLowC = htmlLowC + "</tr>";
            htmlLowF = htmlLowF + "</tr>";
            var htmlBody = htmlHighC.concat(htmlHighF, htmlSymbol, htmlLowC, htmlLowF);
            this.DisplayForecastTableHeader(htmlHead);
            this.DisplayForecastTableBody(htmlBody);
        },
        DisplayForecastTableHeader: function (htmlTHead) {
            $("#forecast thead").append(htmlTHead);
        },
        DisplayForecastTableBody: function (htmlTBody) {
            $("#forecast tbody").append(htmlTBody);
        },
        GetWeatherCities: function (params) {
            var goLeft = -1;
            var defaultParams = {
                startingIndex: 0,
                direction: goLeft
            }
            params = $.extend(defaultParams, params)
            var self = this;
            var weatherCities = $.grep(self.WeatherLocations.weatherlocations.location, function (eleLocation, indexLocation) {
                //debugger;
                eleWeatherLocationList = $.grep(self.Weather.channels, function (eleWeather, indexWeather) {
                    //debugger;
                    var bingo = false;
                    if (params.direction === goLeft) {
                        bingo = ((eleWeather.locationid === eleLocation.code) && (indexLocation < params.startingIndex));
                        if (bingo) {
                            debugger;
                        }
                    }
                    else {
                        bingo = ((eleWeather.locationid === eleLocation.code) && (indexLocation > params.startingIndex));
                    }
                    return bingo;
                });
                return (eleWeatherLocationList.length > 0);
            });
            return weatherCities;
        },
        ShowGreeting: function () {
            alert(this.Greeting);
        },
        SetupCityScroller: function () {
            var self = this;
            $(self.Hook).html("");
            var initialDudCityHTML = "<li code='DudNumberInitial' class='veil'><a href='#'><span></span></a></li>";
            $(self.Hook).append(initialDudCityHTML);
            $.grep(this.WeatherLocations.weatherlocations.location, function (ele, index) {
                //debugger;
                var cityHTML = "";
                var cityHasWeather = self.HasWeather(ele.code);
                if (cityHasWeather) {
                    cityHTML = "<li code=" + ele.code + "  class='veil'><a href='#'><span class='weather'>" + ele.name + "</span></a></li>";
                }
                else {
                    cityHTML = "<li code=" + ele.code + "  class='veil'><a href='#'><span>" + ele.name + "</span></a></li>";
                }
                $(self.Hook).append(cityHTML);
            });
            var lastDudCityHTML = "<li code='DudNumberLast' class='veil'><a href='#'><span></span></a></li>";
            $(self.Hook).append(lastDudCityHTML);
        },
        MoveScrollerPointerToCityCode: function (weatherCityCode) {
            //debugger;
            var weatherCityIndex = $(this.Hook + " li[code='" + weatherCityCode + "']").index();
            return weatherCityIndex;
        },
        MoveScrollerPointerTo: function (weatherCityIndex) {
            var weatherLocationsScrollerLeftEdge = 1;
            var weatherLocationsScrollerRightEdge = this.WeatherLocations.weatherlocations.location.length;
            if ((weatherCityIndex < weatherLocationsScrollerLeftEdge) || (weatherCityIndex > weatherLocationsScrollerRightEdge)) {
                alert("Cannot move scroller pointer to this index - it is outside the city range :-(");
            }
            if (weatherCityIndex === undefined) return;
            debugger;
            this.veilAndUnscroll();

            var notANumber = (parseInt(weatherCityIndex) > -1);
            var isWeatherCityCode = !(notANumber);
            if (isWeatherCityCode) {
                weatherCityIndex = this.MoveScrollerPointerToCityCode(weatherCityIndex);
            }

            var weatherCityGoLeftIndex = weatherCityIndex - 1;
            var weatherCityGoRightIndex = weatherCityIndex + 1;
            var leftNeighbourIndex = (weatherCityGoLeftIndex >= weatherLocationsScrollerLeftEdge) ? weatherCityGoLeftIndex : weatherLocationsScrollerLeftEdge - 1;
            var rightNeighbourIndex = (weatherCityGoRightIndex <= weatherLocationsScrollerRightEdge) ? weatherCityGoRightIndex : weatherLocationsScrollerRightEdge + 1;

            $(this.GetCityElementAtIndex(leftNeighbourIndex)).removeClass('veil').addClass('scroller');
            $(this.GetCityElementAtIndex(weatherCityIndex)).removeClass('veil').addClass('scroller');
            $(this.GetCityElementAtIndex(rightNeighbourIndex)).removeClass('veil').addClass('scroller');
        },
        FindNextWeatherCityFrom: function (params) {
            var defaultParams = {
                startingIndex: 0,
                direction: -1
            }
            params = $.extend(defaultParams, params);
            debugger;
            var goLeft = (params.direction < 0);
            cityIndexInScroller = params.startingIndex;
            if (goLeft) {
                this.MoveScrollerPointerLeftToNextWeatherCity();
            }
            else {
                this.MoveScrollerPointerRightToNextWeatherCity();
            }
        },
        MoveScrollerPointerLeftToNextWeatherCity: function () {
            var initialDudListElementOffset = 1;
            var middleScrollerElement = $(".scroller")[1];
            var cityScrollerIndex = $(middleScrollerElement).index() - initialDudListElementOffset;
            var goLeft = -1;
            var weatherCities = this.GetWeatherCities({
                startingIndex: cityScrollerIndex,
                direction: goLeft
            });
            if (weatherCities.length === 0) return;
            debugger;
            var nextWeatherCityToTheLeft = weatherCities[weatherCities.length - 1];
            var nextWeatherCityCodeToTheLeft = $(nextWeatherCityToTheLeft).attr("code");
            this.MoveScrollerPointerTo(nextWeatherCityCodeToTheLeft);
        },
        MoveScrollerPointerRightToNextWeatherCity: function () {
            var initialDudListElementOffset = 1;
            var middleScrollerElement = $(".scroller")[1];
            var cityScrollerIndex = $(middleScrollerElement).index() - initialDudListElementOffset;
            var goRight = 1;
            var weatherCities = this.GetWeatherCities({
                startingIndex: cityScrollerIndex,
                direction: goRight
            });
            if (weatherCities.length === 0) return;
            debugger;
            var nextWeatherCityToTheRight = weatherCities[0];
            var nextWeatherCityCodeToTheRight = $(nextWeatherCityToTheRight).attr("code");
            this.MoveScrollerPointerTo(nextWeatherCityCodeToTheRight);
        },
        DisplayTableClear: function () {
            $("#forecast thead").html("");
            $("#forecast tbody").html("");
        },
        DisplayTableAddHeading: function () {

        },
        DisplayTableAddBody: function () {

        }
    }
    // Export function
    window.Acentic = window.Acentic || {};
    window.Acentic.WeatherCenter = WeatherCenter;
} (window, jQuery));