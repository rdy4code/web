const fs = require("fs")
fs.writeFileSync("notes.txt", "This file was created with nodejs.")
fs.appendFileSync("notes.txt", " I live in Moscow.")