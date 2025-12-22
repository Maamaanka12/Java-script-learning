//A hospital directs patients based on their department: 
// “Cardiology” for heart issues, “Dermatology” for skin problems, and “Pediatrics” for children. 
// Write a program that displays which department the patient should go to based on the entered department name.

let department = prompt('Enter the department number: \nCardiology, Dermatology, Pediatric')
switch(department){
    case 'Cardiology':
        console.log('You are diagnosed with heart issue')
    break
     case 'Dermatology':
        console.log('You are diagnosed with skin issue')
    break
     case 'Pediatric':
        console.log('You are going for the department of children')
    break
    default:
        console.log('Invalid choice')
}