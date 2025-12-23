//In a library system, create a function library() that has a variable libraryName. 
// Inside it, create another function section() with its own variable sectionName. 
// Print both inside the inner function to show nested scope.

function library() {
    var libraryName = "xareed Library";
    function section() {
        var sectionName = "Science Section";
        console.log("Library Name: " + libraryName);
        console.log("Section Name: " + sectionName);
    }
    section();
}
library();