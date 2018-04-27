function do_something(latitude, longitude) {
  console.log(latitude);
  console.log(longitude);
  var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude+ "&lon=" +longitude;
  var page = window.location.assign(url);
  //var object = JSON.parse(url);
  return page
}

function geo_success(position) {
  do_something(position.coords.latitude, position.coords.longitude);
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
  

var results = wpid;
                  
document.getElementById("display").innerHTML = results;

