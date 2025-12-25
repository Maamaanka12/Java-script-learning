// stock = [120, 80, 150, 60]
// 👉 Find the maximum and minimum stock values using Math.max() and Math.min() with the spread operator ....
const stock = [120, 80, 150, 60];
const maxStock = Math.max(...stock);
const minStock = Math.min(...stock);
console.log("Maximum stock:", maxStock);
console.log("Minimum stock:", minStock);