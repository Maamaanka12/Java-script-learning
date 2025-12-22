//A café gives a 10% discount if a customer buys more than 5 cups of coffee.
//Write a program that checks the number of cups bought and applies the discount if the condition is true.

let one_cup = 1.5
let cups_bought=parseInt(prompt('How many cups of coffee have you bought'))
console.log('You bought '+cups_bought+' cups of coffee')
total = one_cup * cups_bought
discount = 0.1
if(cups_bought>5){
    console.log('Congrats you have 10% discount')
    DisAmount = total-(total * discount)
    console.log('Which means you will pay only '+DisAmount+'$')

}
else{
    console.log('Which means you will pay only '+total+'$')
}