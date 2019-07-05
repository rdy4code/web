const squareNumber = (x) => x * x;



console.log(squareNumber(3));

const event = {
    name: "Birthday Party",
    guestList: ["Andry", "Jen", "Mike"],
    printGuestList() {
        console.log("Guest list for " + this.name)

        const that = this;

        this.guestList.forEach(function (guest) {
            console.log(guest + " is attending " + that.name);
        })
    }
}

event.printGuestList();
