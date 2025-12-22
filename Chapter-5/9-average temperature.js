//Write a function named averageTemperature() that uses a loop to collect temperature readings for five days (you can use prompt() for user input).
//  Calculate the average temperature and display it. If the average is greater than 30, print “It’s a hot week!” otherwise print “Weather is normal.”
function averageTemperature() {
    let totalTemperature = 0;
    const days = 5;
    for (let i = 1; i <= days; i++) {
        let temp = parseFloat(prompt(`Enter temperature for day ${i}:`));
        totalTemperature += temp;
    }  
    let averageTemp = totalTemperature / days;
    console.log(`Average Temperature: ${averageTemp.toFixed(2)}°C`);
    if (averageTemp > 30) {
        console.log("It's a hot week!");
    } else {
        console.log("Weather is normal.");
    }
}
averageTemperature();
