//Multiplication Table
//Write a program that uses nested loops to display a multiplication table from 1×1 to 5×5.
//  Use one loop for the rows and a second loop for the columns.

for (let row = 1; row <= 5; row++) {
    let output = "";
    for (let col = 1; col <= 5; col++) {
        output += row * col + " ";
    }
    console.log(output);
}

//Seating Arrangement
//A hall has 3 rows and 4 seats in each row. 
// Use nested loops to display seat numbers in order, like “Row 1 Seat 1”, “Row 1 Seat 2”, …, “Row 3 Seat 4”.

for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 4; col++) {
        console.log("Row " + row + " Seat " + col);
    }
}
