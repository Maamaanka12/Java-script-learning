//A country allows people to vote only if they are 18 years old or older.
//  Write a program that checks if a person’s age (for example, 18) meets the requirement and displays the result as true or false.



let age=parseInt(prompt('Enter your age: '))
let vote = (age >= 18) ? 'you can vote': 'you cannot vote'
console.log(vote)