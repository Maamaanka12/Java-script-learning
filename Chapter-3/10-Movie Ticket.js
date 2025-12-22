//A cinema charges different prices: children under 12 pay $5, 
// adults pay $10, and seniors over 60 pay $7. 
// Write a program that decides the ticket price based on age.

let age = parseInt(prompt('Enter your age: '))
if(age<= 12){
    console.log('you\'re a minor so please pay $5 only')
}
else if(age>60){
    console.log('you\'re an senior so you\'ll pay $7')
}
else{
    console.log('you\'re an adult so you\'ll pay $10')
}