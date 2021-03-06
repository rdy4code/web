const fs = require("fs");
// // /* Chalk module is use to print color logs */
const chalk = require("chalk");
const yargs = require("yargs")
const notes = require("./notes.js"); // recieve getNotes, addNote

// const greenMsg = chalk.green.inverse.bold("Success!")
// console.log(greenMsg);

const command = (yargs.argv[2]);
/* * Customizing Yargs 8 */

/* Customize version */
yargs.version("1.0.1")

/* Create ADD command */
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, //Required info
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true, //Required info
            type: "string"
        }
    },

    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

/* Create REMOVE command */
yargs.command({
    command: "remove",
    describe: "Remove the note",
    builder: {
        title: {
            describe: "Remove title",
            demandOption: true,
            type: "string"

        }
    },

    handler(argv) {
        notes.removeNote(argv.title);
    }
})

/*Create READ command */
yargs.command({
    command: "read",
    describe: "Read the note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse();

/*Create LIST command */
yargs.command({
    command: "list",
    describe: "List the note",

    handler() {
        // console.log("your notes")
        notes.listNotes();
    }
})
yargs.parse();
