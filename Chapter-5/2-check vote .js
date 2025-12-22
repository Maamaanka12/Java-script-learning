//Create a function named checkVotingAge(age) that checks if a person is eligible to vote.
//  If the age is 18 or older, print “You are eligible to vote.” Otherwise, print “You are not eligible to vote yet.”
//  Call the function with a few sample ages to test both possible outcomes.
function checkVotingAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote");
    }
}

checkVotingAge(20);