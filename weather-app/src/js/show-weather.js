var x = document.getElementById("display");

//have dataect data here that shows script what icon to get based on weather value
var weatherIcon = {
  "Rain" : " <i class='wi wi-rain'></i>",
  "Drizzle" : " <i class='wi wi-showers'></i>",
  "Mist" : " <i class='wi wi-fog'></i>",
  "Haze" : " <i class='wi wi-fog'></i>",
  "Clouds" : " <i class='wi wi-cloudy'></i>",
  "Storm" : " <i class='wi wi-storm-showers'></i>",
  "Thunderstorm" : " <i class='wi wi-thunderstorm'></i>",
  "Snow" : " <i class='wi wi-snow'></i>",
  "Sleet" : " <i class='wi wi-sleet'></i>",
  "Wind" : " <i class='wi wi-cloudy-gusts'></i>",
  "Windy" : " <i class='wi wi-cloudy-gusts'></i>",
  "Hail" : " <i class='wi wi-hail'></i>",
  "Fog" : " <i class='wi wi-fog'></i>",
  "Sunny" : " <i class='wi wi-day-sunny'></i>",
  "Clear" : " <i class='wi wi-day-sunny'></i>"

}



var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function error(err){
  x.innerHTML = "Geolocation is not supported by this broswer.";
}

$("document").ready(function(){
  //function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition, error, options);

    });
    
function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" +longitude;
  console.log(url);

  $.ajax(url, {
    dataType: "json",
    method: 'GET',
    success: function(response){
      //response is already a parsed json, because you told ajax what dataType it was
      var data = response;
      showWeather(data);
      
    },

    error: function(request, errorType, errorMsg){
      $("#display").text("There was an issue with the ajax call: "+ errorMsg).css({"color":"red"});
      }

    });
          
}

function showWeather(data) {
      var loc = data.name;
      var mainWeather = data["weather"][0]["main"];
      var icon = weatherIcon[mainWeather];
      var celsius = Math.round(data["main"]["temp"]);
      var humid = data["main"]["humidity"];
      var Fahr = Math.round((celsius * 9/5) + 32);
      
      $("#location").html(loc);
      $("#show-info").html(mainWeather + icon); 
      $("#show-info2").html("<i class='wi wi-thermometer'></i> " + celsius + " &deg;C ");
      $("#show-info2b").html(" / " + Fahr + " &deg;F ").addClass('d-none');
      $("#show-info3").html("<i class='wi wi-humidity'></i> Humidity: " + humid); 
      $("#show-button").html("<button id='toggler' class='btn btn-light text-center'>Show Fahrenheit</button>");

    showFahrenheit();
}

function showFahrenheit() {
  //var str = $("#show-info2").text();
  $("button#toggler").on("click", function() {
    $("#show-info2b").toggleClass('d-none');
  });
  
}
 
