//An event registration system checks if a person is old enough to join.
//Write an arrow function that takes age and prints “Eligible” if age is 18 or more, otherwise “Not eligible”.

let checkEligibility = (age) => {
    return (age >= 18) ? 'Eligible' : 'Not eligible';
}
let age = parseInt(prompt('Enter your age: '));
console.log(checkEligibility(age));
