//Create an array grades = [78, 85, 92, 60, 89].

//👉 Find and print the average grade using a loop or reduce()./

const grades = [78, 85, 92, 60, 89];
const total = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = total / grades.length;
console.log("Average grade:", average);