const request = require("request"); //easy http calls
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Request ({object obligatory}, callback function with 2 arguments (error - if something went wrong)
//and (response - if everything is OK)

/* * Dynamic geolocation + weather chaining request * */

geocode("Saint-Peterburg", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);

  // data.lat/long recieved from geocode because of chaining
  forecast(data.latitude, data.longitude, (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
  });
});
