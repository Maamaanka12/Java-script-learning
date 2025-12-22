//Write a function named greetUser(name, hour) that takes the user’s name and the current hour (in 24-hour format). Use an if–else structure to print a suitable greeting message. If the hour is less than 12, display “Good Morning, [name]”; if it is less than 18, display “Good Afternoon, [name]”; otherwise, display “Good Evening, [name]”.
//  Call the function with your own name and a sample hour.

function greetUser(name, hour) {
    if (hour < 12) {
        console.log(`Good Morning, ${name}`);
    } else if (hour < 18) {
        console.log(`Good Afternoon, ${name}`);
    } else {
        console.log(`Good Evening, ${name}`);
    }
}

greetUser("Maamaan", 14);