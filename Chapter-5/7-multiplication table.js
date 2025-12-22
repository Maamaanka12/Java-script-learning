//Write a function named printTable(number) that displays the multiplication table for the given number using a loop. 
// For example, if the number is 5, print:
//5 × 1 = 5,
//5 × 2 = 10,
//and so on, up to 5 × 10 = 50.
function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} × ${i} = ${number * i}`);
    }   
}
printTable(5);
