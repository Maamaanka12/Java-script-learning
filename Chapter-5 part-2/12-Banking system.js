//In a banking system, create a global variable bankName.
//  Write a function expression showBank() that declares a local variable branch and prints both bankName and branch. 
// Try to access branch outside the function and note what happens.

var bankName = "ABC Bank";
var showBank = function() {
    var branch = "Main Branch";
    console.log("Bank Name: " + bankName);
    console.log("Branch: " + branch);
};
showBank();