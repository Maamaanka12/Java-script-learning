//A job portal first collects user information, then processes it, and finally shows a thank-you message.
//Create a normal function collectInfo(callback) that prints “Information collected.”
//Pass a function expression as the callback to print “Application processed.”
//Inside that callback, call an arrow function that prints “Thank you for applying!”

function collectInfo(callback) {
    console.log("Information collected.");
    callback();
}   
collectInfo(function() {
    console.log("Application processed.");
    let thankYou = () => console.log("Thank you for applying!");
    thankYou();
});