//Given prices = [10, 20, 30, 40],
//👉 Use map() to calculate the new prices after adding 15% tax.
//👉 Print both the old and new arrays.

const prices = [10, 20, 30, 40];
const newPrices = prices.map(price => price + (price * 0.15));
console.log("Old prices:", prices);
console.log("New prices:", newPrices);