// ratings = [4.5, 3.2, 5.0, 2.9, 4.1]
// 👉 Use filter() to select all ratings greater than or equal to 4.

const ratings = [4.5, 3.2, 5.0, 2.9, 4.1];

const highRatings = ratings.filter(rating => rating >= 4);
console.log(highRatings);