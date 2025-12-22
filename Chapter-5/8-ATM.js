//Create a function named withdrawMoney(balance, amount) that simulates a simple ATM withdrawal process.
//  If the requested amount is less than or equal to the balance, subtract it and return the new balance. 
// If not, print “Insufficient funds.” Then call the function with a few different test values.
function withdrawMoney(balance, amount) {
    if (amount <= balance) {
        console.log(`Withdrawal successful. New balance: ${balance - amount}`);
        return balance - amount;
    } else {
        console.log("Insufficient funds.");
        return balance;
    }
}
withdrawMoney(1000, 200);
