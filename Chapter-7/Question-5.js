
//Write a program that creates a car object:
//{ brand: "Honda", model: "Civic", year: 2019 }
//Then add owner: "Omar" using dot notation and "last-service-date": "2025-01-01" using bracket notation.
let car = {
    brand: "Honda",
    model: "Civic",
    year: 2019
};
car.owner = "Omar";
car["last-service-date"] = "2025-01-01";
console.log(car);


console.log("------------------------------------");


//Write a program that creates a student object:
//{ name: "Maryam", grade: "A", school: "Afbaro Academy" }
//Add age: 18 using dot notation and "favorite-subject": "Physics" using bracket notation.

let student = {
    name: "Maryam",
    grade: "A",
    school: "Afbaro Academy"
};
student.age = 18;
student["favorite-subject"] = "Physics";
console.log(student);


console.log("------------------------------------");

//Write a program that creates a shop item object:
//{ itemName: "Milk", price: 2, category: "Food" }
//Add quantity: 30 using dot notation and "discount-percentage": 10 using bracket notation.
let shopItem = {
    itemName: "Milk",
    price: 2,
    category: "Food"
};
shopItem.quantity = 30;
shopItem["discount-percentage"] = 10;
console.log(shopItem);
console.log("------------------------------------");