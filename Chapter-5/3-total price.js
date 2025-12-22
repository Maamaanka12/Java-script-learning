//Write a function named calculateTotal(price, quantity) that returns the total amount by multiplying price and quantity. 
// If the total is greater than $100, display “You get a 10% discount!” and then calculate the discounted total.
//  Display the result using console.log() to show how return values work.

function calculateTotal(price, quantity) {
    let total = price * quantity;
    if (total > 100) {
        console.log("You get a 10% discount!");
        total = total - (total * 0.1);
    }
    console.log(total);
}
calculateTotal(15, 8);