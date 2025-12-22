//Write a program that creates a movie object:
//{ title: "Inception", duration: "2h 30m", rating: 9 }
//Convert it to JSON and print the JSON string.

let movie = {
  title: "Inception",
  duration: "2h 30m",
  rating: 9
};
let movieJSON = JSON.stringify(movie);
console.log(movieJSON);

console.log("-----------------------");  

//Write a program that takes this JSON string:
//{"name":"Sara","age":25,"country":"Kenya"}
//Convert it to a JavaScript object and print each property.

let jsonString = '{"name":"Sara","age":25,"country":"Kenya"}';
let person = JSON.parse(jsonString);
for (let key in person) {
  console.log(key + ": " + person[key]);
}


console.log("----------------------");
//Write a program that creates a weather object:
//{ temperature: 32, humidity: "70%", condition: "Sunny" }
//Convert it to JSON and back to an object, then print the final object.

let weather = {
  temperature: 32,
  humidity: "70%",
  condition: "Sunny"
};
let weatherJSON = JSON.stringify(weather);
let weatherObject = JSON.parse(weatherJSON);
console.log(weatherObject);