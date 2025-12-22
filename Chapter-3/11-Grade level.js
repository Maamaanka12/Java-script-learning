//In a school: 1 means Primary, 2 means Middle School, 3 means High School. 
// Write a program that prints the level of the student based on the entered grade number.


let grade_number = prompt('Enter the bus number: \nGrade 1, Grade 2, Grade 3')
switch(grade_number){
    case 'Grade 1':
        console.log('Go to primary')
    break
    case 'Grade 2':
        console.log('Go to middle school')
    break
    case 'Grade 3':
        console.log('Go to secondary school')
    break
    default:
        console.log('Invalid choice')
}