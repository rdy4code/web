const request = require("request"); //easy http calls
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2]; // input from the console

if (!address) {
  return console.log("Please provide an address!");
}

/* * Dynamic geolocation + weather chaining request * */

geocode(address, (error, data) => {
  if (error) {
    return console.log(error); //after RETURN statement --> function stops and no need to use ELSE statement
  }
  console.log("Error", error);
  console.log("Data", data);

  // data.lat/long recieved from geocode because of chaining
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error); //after RETURN statement --> function stops and no need to use ELSE statement
    }
    console.log(data.location);
    console.log(forecastData);
    // console.log("Error", error);
    // console.log("Data", forecastData);
  });
});
