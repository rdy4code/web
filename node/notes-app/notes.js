const fs = require("fs")

const getNotes = () =>{
    "Your notes..."
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    console.log(notes);
}
// Read--> toString --> parse
const loadNotes = () => {
    try {
        const notes = loadNotes()
        const dataBuffer = fs.readFileSync("notes.json") //Read file /than
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote
} 