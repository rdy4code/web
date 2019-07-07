const request = require("request"); //easy http calls

const url =
  "https://api.darksky.net/forecast/6545fe1a18ea817905dd916d66442ff1/37.8267,-122.4233"; //from darksky API

//Request ({object obligatory}, callback function with 2 arguments (error - if something went wrong)
//and (response - if everything is OK)

request({ url: url }, (error, response) => {
  console.log(response);
});
