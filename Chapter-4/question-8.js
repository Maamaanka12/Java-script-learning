//You are organizing a small event and need to create a system to register attendees. Each attendee has a name and a ticket type (VIP or Regular). 
//The program should allow the user to register up to 5 attendees, but if the user types "STOP" at any time, the registration should end early.
//` Depending on the ticket type, the program should display the benefits: VIP attendees get free drinks and front seats, while Regular attendees get snacks only
// . After all attendees have been registered, the program should show a summary of all attendees and their ticket types.
// Use variables to store names and ticket types, loops to handle repeated registration, if-else or switch statements to show ticket benefits, and variable swapping when needed.
let attendees = [];
while (attendees.length < 5) {
    let name = prompt("Enter attendee name (or type 'STOP' to finish): ");
    if (name.toUpperCase() === "STOP") {
        break;
    }
    let ticketType = prompt("Enter ticket type (VIP or Regular): ");
    attendees.push({ name: name, ticketType: ticketType });
    if (ticketType.toUpperCase() === "VIP") {
        console.log(name + " registered as VIP: Free drinks and front seats.");
    }
    else if (ticketType.toUpperCase() === "REGULAR") {
        console.log(name + " registered as Regular: Snacks only.");
    }
}
console.log("Registration Summary:");
attendees.forEach(attendee => {
    console.log(attendee.name + " - " + attendee.ticketType);
});