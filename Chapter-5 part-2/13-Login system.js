//A website login first checks username and then displays a welcome message. Create two functions:
//checkUser() prints “User verified.”
//welcomeUser() prints “Welcome to your account.”
//Use a callback function to make sure welcomeUser() runs only after checkUser().

function checkUser(callback) {
    console.log("User verified.");
    callback();
}
function welcomeUser() {
    console.log("Welcome to your account.");
}

checkUser(welcomeUser);