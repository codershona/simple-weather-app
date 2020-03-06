// function
// declaring some variables that hold the element .
// showing my fetch data
// these are all html elements

let name = document.querySelector(".name");
let date = document.querySelector(".date");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let hum = document.querySelector(".hum");
let press = document.querySelector(".pressure");
let ozon = document.querySelector(".ozone");
let icons = document.querySelector(".image");

// two more variables,

let temps = [];
let isConverted = false;
// let isLoading = false;
const key = "585c007f38e1484a17a09a0c785e4c32";

// using ES6 class syntax to create object

// create a simple object and methods to work with

class Weather {

  // first method : giving my location name

  // Dark sky doesnot provide location name ...
  // Adding APi to get locations name ...

  // Using simple API to get the data...
  //  This API returns location details from our IP address

  getLocation() {
    // using fetch API to get AJAX calls you can use XHP also
    fetch("https://geoip-db.com/json/")
    .then(res => res.json())
    .then(result => {
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
        .then(res => {
          console.log(res);

          const {
            temperature,
            summary,
            humidity,
             pressure,
             icon,
             ozone
           } = res.currently;
          date.innerHTML += new Date().toDateString();
          temp.innerHTML += `${Math.floor(
            temperature
          )}
          <i class="wi wi-fahrenheit"></i>`;
          temps.push(Math.floor(temperature))
          temps.push(Math.floor((temperature - 32) * 0.5555))
          desc.innerHTML += summary;
          hum.innerHTML += Math.round(humidity * 100) + "%";
          press.innerHTML += Math.round(pressure * 100) + "%";
          ozon.innerHTML += ozone;
          // adding some interaction
          //show that icon  // download the weather icon css file and put it into your CSS directory
          // also put the font file in the parent directory of the project folder
          // create another method which will dynamically get
          // the icon for our weather condition

  // now call that method here and see the magic
    this.getIcon(icon, icons);
     })
        .catch(err => console.log(err)); //check in the url
        // JSON data lets put them in our html filter

     });
  } else {
    alert("Sorry your browser does not support navigation. Please Update it.");
    }
  }


 getIcon(image, el) {
   // 1st arg- image- will take the icon value from the JSON
   // 2nd arg- el- in which element we have to put the icon
   if (image === 'clear-day'){
     el.innerHTML += `<i class='wi wi-day-sunny'></i>`;
     // make if else ladder for each weather conditions
     //
   } else if  (image === 'clear-night'){
     el.innerHTML += `<i class='wi wi-night-clear'></i>`;

 } else if  (image === 'rain'){
   el.innerHTML += `<i class='wi wi-rain'></i>`;

} else if  (image === 'snow'){
  el.innerHTML += `<i class='wi wi-snow'></i>`;

} else if  (image === 'sleet'){
  el.innerHTML += `<i class='wi wi-sleet'></i>`;

} else if  (image === 'wind'){
  el.innerHTML += `<i class='wi wi-windy'></i>`;

} else if  (image === 'fog'){
  el.innerHTML += `<i class='wi wi-fog'></i>`;

} else if  (image === 'cloudy'){
  el.innerHTML += `<i class='wi wi-cloudy'></i>`;

} else if  (image === 'partly-cloudy-day'){
  el.innerHTML += `<i class='wi wi-day-cloudy-gusts'></i>`;

} else if  (image === 'partly-cloudy-night'){
  el.innerHTML += `<i class='wi wi-night-alt-cloudy'></i>`;
} else {
  el.innerHTML = "";
    }
   }
  }

  const convert = () => {
    if(!isConverted){
      temp.innerHTML = temps[1] + ` <i class="wi wi-celcius"></i>`;
      isConverted = !isConverted;
    } else {
      temp.innerHTML = temps[0] + ` <i class="wi wi-fahrenheit"></i>`;
      isConverted = !isConverted;
    }
  };


    // instatiate the class
    var start = new Weather();
    start.getLocation();
    start.getCurrentForecast();


    setTimeout(() => {
      document.querySelector(".loader").style.display = "none"
        document.querySelector(".card").classList.add("animated", "fadeIn")
          document.querySelector(".card").style.display = "block"

    },2000)
