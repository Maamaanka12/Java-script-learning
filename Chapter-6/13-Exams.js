// marks = [45, 88, 67, 92, 55, 76]
// 👉 Sort them in ascending order and print both the original and sorted arrays.

const marks = [45, 88, 67, 92, 55, 76];
const sortedMarks = [...marks].sort((a, b) => a - b);
console.log("Original array:", marks);
console.log("Sorted array:", sortedMarks);