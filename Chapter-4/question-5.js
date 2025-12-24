//Number Collector

//Write a program that asks the user to enter numbers repeatedly.
// The loop should end when the user enters -1. After stopping, display the total number of values entered (excluding -1).
let count = 0;
while (true) {
    let input = prompt("Enter a number (-1 to stop): ");
    let number = parseInt(input);
    if (number === -1) {
        break;
    }
    count++;
}

//Total Grocery Cost

//A cashier enters the price of grocery items one by one. 
// When the cashier enters 0, the program should stop asking for prices and display the total bill.
//  Use a sentinel-controlled loop.

let totalBill = 0;
while (true) {
    let input = prompt("Enter the price of a grocery item (0 to stop): ");
    let price = parseInt(input);
    if (price === 0) {
        break;
    }
    totalBill += price;
}
console.log("Total bill: " + totalBill);