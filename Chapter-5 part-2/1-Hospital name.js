//A hospital system has a global variable called hospitalName.
//  Inside a function called displayInfo(), create a local variable department
// . Print both variables inside the function, then try to print department outside the function.
//  Explain the result.
var hospitalName = "kalkaal Hospital";
function Info() {
    var department = "Cardiology"; 
    console.log("Hospital Name: " + hospitalName);
    console.log("Department: " + department);
}
Info();