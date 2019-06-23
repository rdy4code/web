// const fs = require("fs")
// fs.writeFileSync("notes.txt", "This file was created with nodejs.")
// fs.appendFileSync("notes.txt", " I live in Moscow.")
// const add = require("./utils.js")
// const sum = add(3, 4);
// console.log(sum);

const getNotes = require('./nodes.js');
const msg = getNotes();
console.log(msg);
console.log("test");

