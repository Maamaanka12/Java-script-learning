//A cleaning company wants to first clean the room, then sanitize it. Write two functions:
//cleanRoom() prints “Room cleaned.”
//sanitizeRoom() prints “Room sanitized.”
//Use a callback so that sanitizing happens after cleaning.
function cleanRoom(callback) {
    console.log("Room has been cleaned.");
    callback();
}
function sanitizeRoom() {
    console.log("Room has been sanitized.");
}
cleanRoom(sanitizeRoom);