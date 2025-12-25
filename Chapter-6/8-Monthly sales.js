// Given sales = [1200, 2300, 1800, 2900, 3100],
// 👉 Use reduce() to find the total yearly sales.

const sales = [1200, 2300, 1800, 2900, 3100];
const totalYearlySales = sales.reduce((total, monthlySale) => total + monthlySale, 0);
console.log(totalYearlySales);