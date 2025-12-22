//A store gives discounts based on customer type. VIP customers get a 20% discount, while all other customers get a 5% discount.
//  Write a program that checks the customer type and prints the correct discount.


console.log('Welcome dear customer.')
let cus_type = prompt('Please enter your type (vip or regular):')
let dis=(cus_type==='vip')? 20:5
console.log('you have a discount of '+dis+'% on what you buy')