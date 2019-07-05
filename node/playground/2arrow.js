const squareNumber = (x) => x * x;



console.log(squareNumber(3));

const event = {
    name: "Birthday Party",
    guestList: ["Andry", "Jen", "Mike"],
    printGuestList() {
        console.log("Guest list for " + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}

event.printGuestList();


//Ctrl+C to shotdown nodemon