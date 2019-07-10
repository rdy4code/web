const https = require("https");
const url = "https://api.darksky.net/forecast/6545fe1a18ea817905dd916d66442ff1/40,-75";

const request = https.request(url, (response) => {
  let data = "";

  request.on("data", (chunk) => {
    data =+ chunk.toString()    
});

  request.on("end", () => {
      const body = JSON.parse(data)
      console.log(body);

  });

});

request.on("error", (error) =>{
    console.log("An error", error);
})

request.end();
