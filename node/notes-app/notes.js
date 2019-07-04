const fs = require("fs")

const getNotes = () =>{
    "Your notes..."
}

const addNote = (title, body) =>{
    const notes = loadNotes();

    //Check for duplicates
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title

    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("New note added!");
    } else {
        console.log("Note title taken!");
    }
}

// Read--> toString --> parse
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json") //Read file -->
        const dataJSON = dataBuffer.toString()           //toString  -->
        return JSON.parse(dataJSON)                      //parse
    } catch (err) {
        return []
    }
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);

}

module.exports = {
    getNotes,
    addNote
} 