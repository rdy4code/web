const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoicmR5NGNvZGUiLCJhIjoiY2p4dXRtaXc3MTR0MTNibzFtZnE2Mzh6NiJ9.-jQONiy1YgtJERYE3k723A&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to geolocation service", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        location: response.body.features[0].place_name,
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0]
      });
    }
  });
};

module.exports = geocode;
