//A store processes online payments. Create a function processPayment(callback) that takes a callback.
//  Call it and pass an anonymous function that prints “Payment successful.”
function processPayment(callback) {
    callback();
}
processPayment(() => console.log("Payment successful."));