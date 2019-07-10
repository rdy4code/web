const request = require("request"); //easy http calls
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

/* * Dynamic geolocation + weather chaining request * */
const address = process.argv[2]; // input from the console

if (!address) {
  return console.log("Please provide an address!");
}

geocode(address, (error, { latitude, longitude, location } = data) => {
  if (error) {
    return console.log(error); //after RETURN statement --> function stops and no need to use ELSE statement
  }

  // data.lat/long recieved from geocode because of chaining
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error); //after RETURN statement --> function stops and no need to use ELSE statement
    }
    console.log(location);
    console.log(forecastData);
    // console.log("Error", error);
    // console.log("Data", forecastData);
  });
});
