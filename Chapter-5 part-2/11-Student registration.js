//A student registration system first saves the data, then prints a message. 
// Create a function register(callback) that prints “Data saved.” Pass an arrow function as a callback that prints “Registration successful.”
function register(callback) {
    console.log("Data saved.");
    callback();
}
register(() => console.log("Registration successful."));