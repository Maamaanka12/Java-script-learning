// Write a program that creates a laptop object:
//{ brand: "Dell", ram: "8GB", price: 700 }
//Access the brand, then update the ram to "16GB".

let laptop = {
    brand: "Dell",
    ram: "8GB",
    price: 700
};      
console.log(laptop.brand); 
laptop.ram = "16GB"; 
console.log(laptop); 

console.log("------------------------------------");    

//Write a program that creates a user profile object:
//{ username: "Ali2025", email: "ali@example.com", age: 22 }
//Print the old email, then update it to "ali.new@example.com".

let userProfile = {
    username: "Ali2025",
    email: "ali@example.com",
    age: 22
};
console.log(userProfile.email); 
userProfile.email = "ali.new@example.com"; 
console.log(userProfile);

console.log("------------------------------------");    

//Write a program that creates a hotel room object:
//{ roomNumber: 105, price: 50, type: "Single" }
//Access the price and change it to 40.

let hotelRoom = {
    roomNumber: 105,
    price: 50,
    type: "Single"
};
console.log(hotelRoom.price);
hotelRoom.price = 40;
console.log(hotelRoom);