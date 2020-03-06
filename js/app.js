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
    
  }

}


// instatiate the class
var start = new Weather();
start.getLocationName();
