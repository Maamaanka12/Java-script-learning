//Write a function named checkEvenOdd(limit) that uses a for loop to iterate from 1 up to the given limit
// . For each number, print whether it is even or odd. For example:
//1 is Odd
//2 is Even
//3 is Odd, and so on.

function checkEvenOdd(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is Even`);
        } else {
            console.log(`${i} is Odd`);
        }
    }
}

checkEvenOdd(10);