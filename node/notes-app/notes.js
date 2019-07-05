const fs = require("fs")
const chalk = require("chalk")

const getNotes = () => {
    "Your notes..."
}


/* ADD command */
const addNote = (title, body) =>{
    const notes = loadNotes();
    
    //Check for duplicates
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("New note added!"));
    } else {
        console.log("Note title taken!");
    }
}

// Read--> toString --> parse                            //Pattern
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json") //Read file -->
        const dataJSON = dataBuffer.toString()           //toString  -->
        return JSON.parse(dataJSON)                      //parse
    } catch (err) {
        return []
    }
}  


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

/* REMOVE command */
const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title)

    //Print chalk background depends from 

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse("No note found!"));
    }

 }

/* LIST command */
 const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your notes"))

    notes.filter((note) => {
          console.log(note.title);
    })
 }


module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes
} 