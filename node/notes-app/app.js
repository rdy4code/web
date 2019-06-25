// const fs = require("fs")
// fs.writeFileSync("notes.txt", "This file was created with nodejs.")
// fs.appendFileSync("notes.txt", " I live in Moscow.")
// const add = require("./utils.js")
// const sum = add(3, 4);
// console.log(sum);


const chalk = require("chalk");
const yargs = require("yargs")

const getNotes = require('./nodes.js');


// const msg = getNotes();
// console.log(msg)

// /* nodemon is ude to continious run an app (need to install it globaly with g flag)*/
// /* Chalk module is use to print color logs */
// const greenMsg = chalk.blue.inverse.bold("Success!");
// console.log(greenMsg)
 
// console.log(process.argv[2])

// const command = process.argv[2]
console.log(process.argv)

/* Customize yargs version */
yargs.version("1.0.1")

/* yargs is using to parse options into an object and easily access them  */
console.log(yargs.argv); 


// if (command === "add"){
//     console.log("Adding note");
// } else if (command === "remove"){
//     console.log("Removing note");
// }
