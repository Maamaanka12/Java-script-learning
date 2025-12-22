//A student can get a scholarship if their average is above 80.
//  If it is above 90, they get a full scholarship; otherwise, they get a half scholarship.
//  Write a program that checks and prints which scholarship they get.

let average = parseInt(prompt('Enter the average you have:'))
if(average>90){
    console.log('you got full scholarship')
}
else if(average>80){
    console.log('you got half scholarship')
}
else{
    console.log('you didn\'t get any scholarship')
}