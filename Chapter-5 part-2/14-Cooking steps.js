//A cooking timer prints “Cooking started.” Then after 2 seconds, prints “Food is ready!” 
// Use setTimeout() with an anonymous callback function to simulate the process.

function Cooking() {
    console.log("Cooking started.");
    setTimeout(() => console.log("Food is ready!"), 2000);
}   
Cooking();