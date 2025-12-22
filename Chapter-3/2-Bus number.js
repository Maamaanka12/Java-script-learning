//A city bus system uses numbers: 
// Bus 101 goes to the airport, Bus 202 goes to the train station, and Bus 303 goes to the shopping mall. 
// Write a program that shows the destination based on the bus number.



let bus_number = prompt('Enter the bus number: \nBus 101, Bus 202, Bus 303')
switch(bus_number){
    case 'Bus101':
        console.log('This bus is going to the Airport')
    break
     case 'Bus202':
        console.log('This bus is going to the Trainstation')
    break
     case 'Bus303':
        console.log('This bus is going to the Shopping Mall')
    break
    default:
        console.log('Invalid choice')
}