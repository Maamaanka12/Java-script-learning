//A weather app checks if the temperature is high.
//  Create an arrow function that takes a temperature value and 
// prints “Hot day” if it’s above 30, otherwise “Cool day”.

var checkWeather = (temperature) => {
    if (temperature > 30) {
        console.log("Hot day");
    } else {
        console.log("Cool day");
    }
};
checkWeather(35);