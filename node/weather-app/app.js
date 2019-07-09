const request = require("request"); //easy http calls
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

//Request ({object obligatory}, callback function with 2 arguments (error - if something went wrong)
//and (response - if everything is OK)

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {

//   }
// });

/* * Dynamic geolocation url request * */

// geocode("Saint-Peterburg", (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
