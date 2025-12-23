//In a shop billing system, inside an if block check if the bill amount is greater than 100.
//  Use let to store a discount message and var to store a note.
//  Print both inside and outside the block to observe which one remains accessible.

var bill = 150;
if (bill > 100) {
    let discountMessage = "You get a 10% discount!";
    var note = "Thank you for shopping with us.";
    console.log(discountMessage);
    console.log(note);
}
console.log("Note outside block: " + note);