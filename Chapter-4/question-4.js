//Customer Queue

//A store serves up to 10 customers. However, if a VIP customer (number 5) arrives, the service should stop immediately. 
// Use a for loop and a break statement to handle this situation.
for (let customerNumber = 1; customerNumber <= 10; customerNumber++) {
  if (customerNumber === 5) {
    console.log("VIP customer arrived. Stopping service.");
    break;
  }
    console.log("Serving customer number " + customerNumber);
}


// Odd Number Skipper
//Write a program that displays numbers from 1 to 10 but skips the odd numbers. 
// Use a continue statement in your loop to skip over odd numbers.

for (let number = 1; number <= 10; number++) {
  if (number % 2 !== 0) {
    continue;
  }
  console.log(number);
}