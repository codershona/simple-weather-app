// function
// declaring some variables that hold the element .
// showing my fetch data
// these are all html elements

let name = document.querySelector(".name");
let date = document.querySelector(".date");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let hum = document.querySelector(".hum");
let pressure = document.querySelector(".pressure");
let ozone = document.querySelector(".ozone");
let icon = document.querySelector(".image");

// two more variables,

let temps = [];
let isConverted = false;
const key = "585c007f38e1484a17a09a0c785e4c32";

// using ES6 class syntax to create object

// create a simple object and methods to work with

class Weather {

  // first method : giving my location name

  // Dark sky doesnot provide location name ...
  // Adding APi to get locations name ...

  // Using simple API to get the data...
  //  This API returns location details from our IP address

  getLocationName() {
    // using fetch API to get AJAX calls you can use XHP also
    fetch("https://geoip-db.com/json/")
    .then(res => res.json())
    .then(res => {
    name.innerHTML += `${res.city}, ${res.state}`;
      });
  }
  // making uses of darksky API to get current forecast

  getCurrentForecast() {
    // show you API call url
    // pass that secret key, latitude and longitude data with API url to get data.
  // first get our latitude and longitude using navigator object
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(res => {
      // send the those three value from here using string literal
      // create another variable

      // remember the format should be like this else it will return error
      // We need to set a proxy server to get our JSON shouldComponentUpdate(nextProps, nextState) {
        // this proxy server 'https://cors-anywhere.herokuapp.com/'
      fetch (
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${key}/${res.coords.latitude},${res.coords.longitude}`
      )
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err)); //
     });
  } else {
    alert("Sorry your browser does not support navigation. Please Update it.");
     }
  }

}


    // instatiate the class
    var start = new Weather();
    start.getLocationName();
    start.getCurrentForecast();
