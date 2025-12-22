//Create a function named calculateParkingFee(hours) that calculates parking fees based on the following rules: 
// $2 per hour for the first 3 hours, $1 for each additional hour, and a flat fee of $10 if the total hours exceed 10. 
// Return and display the total fee in a readable format.

function calculateParkingFee(hours) {
    let fee = 0;
    if (hours <= 3) {
        fee = hours * 2;
    } else {
        fee = 3 * 2 + (hours - 3) * 1;
    }
    if (hours > 10) {
        fee += 10;
    }
    console.log(`Total parking fee: $${fee}`);
}
calculateParkingFee(5);