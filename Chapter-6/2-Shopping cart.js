//You have cart = ["Milk", "Bread", "Eggs"].
//👉 Add "Butter" at the end, "Juice" at the beginning, and remove "Milk".
//👉 Print the final cart.

let cart = ["Milk", "Bread", "Eggs"];

// Add "Butter" at the end
cart.push("Butter");

// Add "Juice" at the beginning
cart.unshift("Juice");

// Remove "Milk"
cart.splice(cart.indexOf("Milk"), 1);

console.log("Final cart:", cart);