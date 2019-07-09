const request = require("request");

/* * Dynamic forecast request * */

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/6545fe1a18ea817905dd916d66442ff1/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url: url, json: true }, (error, response) => {
    //low lvl cast error
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          response.body.currently.temperature +
          " degrees out. There is a " +
          response.body.currently.precipProbability +
          "% chance of " +
          response.body.daily.data[0].precipType +
          "."
      );
    }
  });
};

module.exports = forecast;
