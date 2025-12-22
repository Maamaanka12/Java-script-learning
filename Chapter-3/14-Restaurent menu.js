//A restaurant menu uses numbers: 
// 1 for Pizza, 2 for Burger, 3 for Salad. 
// Write a program that shows which food a customer ordered based on the number they select.


let menu = prompt('Order one of these foods : \npizza, salmon, Elforno')
switch(menu){
    case 'pizza':
        console.log('You ordered pizza')
    break
    case 'salmon':
        console.log('You ordered salmon')
    break
    case 'Elforno':
        console.log('You ordered Elforno')
    break
    default:
        console.log('Invalid food')
}