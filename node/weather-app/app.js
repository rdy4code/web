const request = require("request"); //easy http calls

const url =
  "https://api.darksky.net/forecast/6545fe1a18ea817905dd916d66442ff1/55.751244, -122?units=si"; //from darksky API
// ,37.618423?units=si

//Request ({object obligatory}, callback function with 2 arguments (error - if something went wrong)
//and (response - if everything is OK)

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect to weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       "It is currently " +
//       response.body.currently.temperature +
//       " degrees out. There is a " +
//       response.body.currently.precipProbability +
//       "% chance of " +
//       response.body.daily.data[0].precipType + //array bracket notation for 0 element
//         "."
//     );
//   }
// });

// });

// Geocoding
// Address --> convert to Lat/Long --> make request
// const mapUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//   "Los%20Angeles.json" + //String city request
//   "?access_token=" +
//   "pk.eyJ1IjoicmR5NGNvZGUiLCJhIjoiY2p4dXRtaXc3MTR0MTNibzFtZnE2Mzh6NiJ9.-jQONiy1YgtJERYE3k723A" + //given public token
//   "&limit=1"; //option for quantity

const mapUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/moscow.json?access_token=pk.eyJ1IjoicmR5NGNvZGUiLCJhIjoiY2p4dXRtaXc3MTR0MTNibzFtZnE2Mzh6NiJ9.-jQONiy1YgtJERYE3k723A&limit=1";

request({ url: mapUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to map data service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find such city name. Thy another search!");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude, longitude);
  }

  // console.log(response);
});

// request((url: url2, json: true),(error, response) => {})

//pk.eyJ1IjoicmR5NGNvZGUiLCJhIjoiY2p4dXRtaXc3MTR0MTNibzFtZnE2Mzh6NiJ9.-jQONiy1YgtJERYE3k723A
