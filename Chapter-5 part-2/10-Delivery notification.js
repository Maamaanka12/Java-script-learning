//A delivery app confirms an order, then after 3 seconds, notifies the user. 
// Use setTimeout() with an anonymous callback to print “Your order has been delivered!” after printing “Order confirmed.”

function amar() {
    console.log("Order confirmed.");
    setTimeout(() => console.log("Your order has been delivered!"), 3000);
}
amar();