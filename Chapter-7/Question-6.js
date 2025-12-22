//Write a program that creates a restaurant menu object:
//{ burger: 5, pizza: 8, juice: 3 }
//Use a loop to print each item and price.
let menu = {
  burger: 5,
  pizza: 8,
  juice: 3
};
for (let item in menu) {
  console.log(item + ": " + menu[item]);
}

console.log("----------------------");

//Write a program that creates a city information object:
//{ population: 500000, mayor: "Hassan", area: "200 sq km" }
//Use a loop through the object to print each detail.
let cityInfo = {
  population: 500000,
  mayor: "Hassan",
  area: "200 sq km"
};
for (let detail in cityInfo) {
  console.log(detail + ": " + cityInfo[detail]);
}

console.log("----------------------");

//Write a program that creates a classroom schedule object:
//{ math: "8:00 AM", english: "10:00 AM", science: "1:00 PM" }
//Iterate and print each subject and time
let schedule = {
  math: "8:00 AM",
  english: "10:00 AM",
  science: "1:00 PM"
};
for (let subject in schedule) {
  console.log(subject + ": " + schedule[subject]);
}