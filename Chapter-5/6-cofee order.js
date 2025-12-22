//Create a function named makeCoffee(type = "Black Coffee", sugar = 1) that prints “Making [type] with [sugar] spoon(s) of sugar.”
//  If the sugar value is greater than 3, display an extra warning message: “That’s too much sugar!” 
// Call the function with different arguments and observe how default parameters work.
function makeCoffee(type = "Black Coffee", sugar = 1) {
    console.log(`Making ${type} with ${sugar} spoon(s) of sugar.`);
    if (sugar > 3) {
        console.log("That's too much sugar!");
    }
}
makeCoffee("Latte", 2);
makeCoffee("Cappuccino", 5);
makeCoffee();