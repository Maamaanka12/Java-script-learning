//Daily Steps Tracker

//Ali wants to track his walking progress for 7 days. 
// Write a program that displays a message for each day like “Day 1: Keep walking!” up to “Day 7: Keep walking!” using a for loop.
for (let day = 1; day <= 7; day++) {
    console.log(`Day ${day}: Keep walking!`);
}


//Even Numbers Display

//Write a program that shows all even numbers between 2 and 20. 
// Use a for loop to count through the numbers and only display the even ones.
for (let number = 2; number <= 20; number++) {
    if (number % 2 === 0) {
        console.log(number);
    }
}