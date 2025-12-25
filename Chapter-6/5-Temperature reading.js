//Given temps = [25, 30, 29, 33, 27, 35, 28],
//👉 Use filter() to get all temperatures above 30°C.

const temps = [25, 30, 29, 33, 27, 35, 28];
const highTemps = temps.filter(temp => temp > 30);
console.log(highTemps);