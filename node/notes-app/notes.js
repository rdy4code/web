const fs = require("fs");

console.log("Starting the nodes.js");

let add = (x, y) => x+y;
let sub = (x, y) => x-y;

module.exports = {
    add, // add: add --> single element
    sub
}