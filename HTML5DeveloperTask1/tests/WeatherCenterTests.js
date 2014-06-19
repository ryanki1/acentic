var weatherCenter = new Acentic.WeatherCenter();
module("Given that Weather Center Application has been started, ", {
    setup: function () {
        //debugger;
        weatherCenter.SetupCityScroller($(weatherCenter.Hook));
    },
    teardown: function () {
    }
});
test("as already mentioned, cities should appear in the city scroller control", function () {
        ok($("#cityScroller li").length > 0, "The city scroller has some cities loaded");
    });
test("as already mentioned, only neighbouring cities to current city pointer should show in cityScroller", function () {
    weatherCenter.MoveScrollerPointerTo(1);
    ok($(weatherCenter.GetCityElementAtIndex(0, weatherCenter.Hook)).hasClass("veil") === false, "The left city of scroller window is visible");
    ok($(weatherCenter.GetCityElementAtIndex(1, weatherCenter.Hook)).hasClass("veil") === false, "The center city of scroller window is visible");
    ok($(weatherCenter.GetCityElementAtIndex(2, weatherCenter.Hook)).hasClass("veil") === false, "The right city of scroller window is visible");
    ok($(weatherCenter.GetCityElementAtIndex(3, weatherCenter.Hook)).hasClass("veil") === true, "A nearby city outside of scroller window is hidden");
    ok($(weatherCenter.GetCityElementAtIndex(100, weatherCenter.Hook)).hasClass("veil") === true, "A faraway city outside of scroller window is hidden");
});
test("as already mentioned, should be able to jump to city by code", function () {
    debugger;
    weatherCenter.MoveScrollerPointerTo("GMXX3581");
    var scroller = $(".scroller");
    ok($(scroller[1]).attr("code") === "GMXX3581", "Baden Baden city has been selected");
});

test("as already mentioned, cities with weather data should stand out in the city scroller", function () {
    weatherCenter.MoveScrollerPointerTo(1);
    weatherCenter.MoveScrollerPointerTo("GMXX3581");
    debugger;
    var selectedCitySpan = $(".scroller span")[1];
    ok($(selectedCitySpan).hasClass('weather'), "Baden Baden has weather data and stands out");
});

test("as already mentioned, cities without weather data should not stand out in the city scroller", function () {
    weatherCenter.MoveScrollerPointerTo(1);
    debugger;
    var selectedCitySpan = $(".scroller span")[1];
    ok($(selectedCitySpan).hasClass('weather') === false, "Dubai does not have weather data and stands out");
});

test("as already mentioned, on startup scroller should scroll right to next city with weather data", function () {
    debugger;
    var cityIndexInScroller = 1;
    var goRight = 1;
    weatherCenter.FindNextWeatherCityFrom({
            startingIndex: cityIndexInScroller,
            direction: goRight
            });
        ok(weatherCenter.GetIndexOfCityCode(weatherCenter.GetSelectedCityCode()) > cityIndexInScroller, "next selected city in scroller on startup has weather");
});

test("as already mentioned, scroll right should scroll to next city with weather data", function () {
    debugger;
    var cityIndexInScroller = 50;
    weatherCenter.MoveScrollerPointerTo(cityIndexInScroller);
    var goRight = 1;
    weatherCenter.FindNextWeatherCityFrom({
        startingIndex: cityIndexInScroller,
        direction: goRight
    });
    ok(weatherCenter.GetIndexOfCityCode(weatherCenter.GetSelectedCityCode()) > cityIndexInScroller, "next selected city in scroller from middle of city list has weather");

});

test("as already mentioned, scroll right at right edge of city list should not scroll to next city with weather data", function () {
    var rightCityRangeEdge = 269;
    var cityIndexInScroller = rightCityRangeEdge;
    weatherCenter.MoveScrollerPointerTo(cityIndexInScroller);
    debugger;
    var goRight = 1;
    weatherCenter.FindNextWeatherCityFrom({
        startingIndex: cityIndexInScroller,
        direction: goRight
    });
    ok(weatherCenter.GetIndexOfCityCode(weatherCenter.GetSelectedCityCode()) === cityIndexInScroller, "next selected city in scroller from right edge of city list not found");
});

test("as already mentioned, on startup scroll left should not scroll to next city with weather data", function () {
    debugger;
    var leftCityRangeEdge = 1;
    var cityIndexInScroller = leftCityRangeEdge;
    weatherCenter.MoveScrollerPointerTo(cityIndexInScroller);
    var goLeft = -1;
    weatherCenter.FindNextWeatherCityFrom({
        startingIndex: cityIndexInScroller,
        direction: goLeft
    });
    ok(weatherCenter.GetIndexOfCityCode(weatherCenter.GetSelectedCityCode()) === cityIndexInScroller, "next selected city to the left in scroller on startup same as before");
});

test("as already mentioned, scroll left should scroll to next city with weather data", function () {
    var cityIndexInScroller = 50;
    var goLeft = -1;
    weatherCenter.FindNextWeatherCityFrom({
        startingIndex: cityIndexInScroller,
        direction: goLeft
    });
    ok(weatherCenter.GetIndexOfCityCode(weatherCenter.GetSelectedCityCode()) < cityIndexInScroller, "next selected city in scroller from middle of city list has weather");
});

test("as already mentioned, scroll left should scroll to next city with weather data", function () {
    var cityIndexInScroller = 269;
    var goLeft = -1;
    weatherCenter.FindNextWeatherCityFrom({
        startingIndex: cityIndexInScroller,
        direction: goLeft
    });
    ok(weatherCenter.GetIndexOfCityCode(weatherCenter.GetSelectedCityCode()) < cityIndexInScroller, "next selected city in scroller from end of city list has weather");
});
test("as already mentioned, weather data should not show for City without weather", function () {
    debugger;
    weatherCenter.MoveScrollerPointerTo(1);
    var forecast = weatherCenter.GetForecastFor(weatherCenter.GetSelectedCityCode());
    var imagePath = "../resources/weathericon/";
    weatherCenter.DisplayForecast({        
        forecast: forecast, 
        imagePath: imagePath
        });
    ok($("#forecast thead").innerHTML === undefined, "No days should display in header of weather table");
    ok($("#forecast tbody").innerHTML === undefined, "No weather data should display in body of weather table");
});

test("as already mentioned, weather data should show for City with weather", function () {
    weatherCenter.MoveScrollerPointerTo(weatherCenter.GetIndexOfCityCode("GMXX0018"));
    //debugger;
    var forecast = weatherCenter.GetForecastFor(weatherCenter.GetSelectedCityCode());
    var imagePath = "../resources/weathericon/";
    weatherCenter.DisplayForecast({
        forecast: forecast, 
        imagePath: imagePath
        });
    ok($("#forecast thead").length > 0, "Days should display in header of weather table");
    ok($("#forecast tbody").length > 0, "Weather data should display in body of weather table");
});
