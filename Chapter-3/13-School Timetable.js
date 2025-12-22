//A school has different activities for different days
// : Monday is Math Club, Wednesday is Science Lab, and Friday is Sports Day. 
// Write a program that prints the activity based on the day entered.

let day = prompt('Enter one of these days : \nmonday, saturday, friday')
switch(day){
    case 'monday':
        console.log('Today we have a science lab')
    break
    case 'saturday':
        console.log('today we have a math quiz')
    break
    case 'friday':
        console.log('today is a match day')
    break
    default:
        console.log('Invalid choice')
}