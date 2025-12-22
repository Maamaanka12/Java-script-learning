
//Write a function named calculateGrade(score) that prints a letter grade based on the following scale:
//90–100 → A, 80–89 → B, 70–79 → C, and below 70 → Fail.
//Use an if–else if structure to implement this logic, then call the function with a few sample test scores.
function Grade(score) {
    if (score >= 90 && score <= 100) {
        console.log("A");
    } else if (score >= 80 && score < 90) {
        console.log("B");
    } else if (score >= 70 && score < 80) {
        console.log("C");
    } else {
        console.log("Failed");
    }
}
Grade(85);