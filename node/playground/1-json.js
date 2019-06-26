const fs = require("fs"); 

/* Create JSON file for an object */

const book = {
    title: "Ego is an enemy",
    author: "Ryan Holiday"
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync("1-json.json", bookJSON)

// - - - - - 

/* Read JSON file (need convert binary code to string) */

const dataBuffer = fs.readFileSync("1-json.json")\
console.log(dataBuffer); //Binary code
const dataJSON = dataBuffer.toString(); // convert data to a standard string
console.log(dataJSON)

const data = JSON.parse(dataJSON); // parsing to an object
console.log(data.title) //Access to the object's title

// - - - - - 


// console.log(bookJSON);
// const bookParsed = JSON.parse(bookJSON);
// console.log(bookParsed.author);
