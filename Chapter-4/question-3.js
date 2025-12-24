//Temperature Reader

//Write a program that asks for the current temperature at least once and repeats asking until the temperature entered is 0. 
// Use a do…while loop.

let temperature;

do {
  temperature = parseInt(prompt("Enter the current temperature:"));
} while (temperature !== 0);
console.log("Temperature is " + temperature);  


//Quiz Retake
//A student can retake a quiz until they score at least 50.
// The program should allow the quiz to be taken at least once and continue repeating until the score condition is met.
// Use a do…while loop.

let score;
do {
  score = parseInt(prompt("Enter your quiz score:"));
} while (score < 50);
console.log("You passed the quiz with a score of " + score);