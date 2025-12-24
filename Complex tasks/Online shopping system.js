//Fatima is shopping online. She adds two products to her cart: a Phone priced at $800 and Headphones priced at $200.
//However, by mistake, the items are placed in the wrong variables, so the program should swap their positions.
//The system must then display her shopping cart details in a clear sentence using template literals.
//Next, the system calculates the total price and applies a discount using if–else conditions:
//If the total is more than $1000, apply a 20% discount.
//If the total is between $500 and $1000, apply a 10% discount.
//Otherwise, no discount is applied.

let product1 = "Headphones";
let price1 = 200;
let product2 = "Phone";
let price2 = 800;

[product1, product2] = [product2, product1];
[price1, price2] = [price2, price1];    
console.log(`Fatima's shopping cart contains: ${product1} priced at $${price1} and ${product2} priced at $${price2}.`);

let total = price1 + price2;
let discount = 0;

if (total > 1000) {
    discount = total * 0.20;
}
else if (total >= 500 && total <= 1000) {
    discount = total * 0.10;
}

let finalPrice = total - discount;
console.log(`Total price before discount: $${total}.`);
console.log(`Discount applied: $${discount}.`);
console.log(`Final price after discount: $${finalPrice}.`);