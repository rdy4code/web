const path = require("path")
const express = require("express")

const app = express(); 

const publicDirectoryPath = path.join(__dirname, "../public"); //to reroute static file

app.use(express.static(publicDirectoryPath))

app.get("/weather", (req, res) => {
    res.send({
        forecast: "it's snowing",
        location: "Moscow"
    })

})

//app.com

// app.get("/about", (req, res) => {
//     res.send("About page")    
// })

app.listen(3000, () => {
    console.log("Server is runninng on port 3000");
});

//Ctrl+C to shutdowm the server
//nodemon src/app.js  