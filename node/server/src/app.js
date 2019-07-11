const express = require("express")

const app = express(); 

//app.com

app.get("", (req, res) => {
    res.send("Hello express!")    
})

app.get("/help", (req, res) => {
    res.send("Help page")    
})
app.get("/about", (req, res) => {
    res.send("About page")    
})
app.get("/weather", (req, res) => {
    res.send("Your weather information")    
})

app.listen(3000, () => {
    console.log("Server is runninng on port 3000");
});

//Ctrl+C to shutdowm the server
//nodemon src/app.js 
