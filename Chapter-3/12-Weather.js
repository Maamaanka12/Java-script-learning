//The weather app shows different advice: 
// “Sunny” means wear sunglasses, “Rainy” means carry an umbrella, and “Cold” means wear a jacket. 
// Write a program that prints advice based on the weather condition.

let weather = prompt('Enter the weather: \nsunny, rainy, cold')
switch(weather){
    case 'sunny':
        console.log('Its sunny wear sunglasses')
    break
    case 'rainy':
        console.log('Its rainy wear coat')
    break
    case 'cold':
        console.log('Its cold wear jacket')
    break
    default:
        console.log('Invalid choice')
}
