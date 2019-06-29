const fs = require("fs"); 

/* Create JSON file for an object */

const myUser = {
    name: "Serge",
    age: "35",
    planet: "Earth"
}

const userJSON = JSON.stringify(myUser);
fs.writeFileSync("2-json.json", userJSON)

/* Read from a file an rewrite an information */
const dataBuffer = fs.readFileSync("2-json.json") // Read a JSON data from a file
const dataJSON = dataBuffer.toString(); // convert data to a standard string

const person = JSON.parse(dataJSON); // parse JSON data to an object
console.log(person)

// Write new information
person.name = "Vasya";
person.age = 24;

// Rewrite with the new data
personJSON = JSON.stringify(person);
fs.writeFileSync("2-json.json", personJSON)

// - - - - - - - - - - 

//Check the console 

const secondBuffer = fs.readFileSync("2-json.json")
const secondJSON = secondBuffer.toString();
const data = JSON.parse(secondJSON);
console.log(data)

/* To read a JSON file (we need to convert binary code to strings) */