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

/* * Customizing Yargs 8 */

/* Customize version */
yargs.version("1.0.1")

// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body)
    }
})

/* Create remove command */
yargs.command({
    command: "remove",
    describe: "Removing the note", 
    handler: function(){
        console.log("Removing the note");
    }
})

/*Create read command */
yargs.command({
    command: "read",
    describe: "Reading the note", 
    handler: function(){
        console.log("Reading the note");
    }
})

/*Create list command */
yargs.command({
    command: "list",
    describe: "List all notes", 
    handler: function(){
        console.log("Note list");
    }
})


// Create remove command



/* yargs is using to parse options into an object and easily access them  */
console.log(yargs.argv); 


// if (command === "add"){
//     console.log("Adding note");
// } else if (command === "remove"){
//     console.log("Removing note");
// }
