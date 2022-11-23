// Clone the following array and change the first fruit to pineapple.

let fruits = ["apple", "orange", "pear", "kiwi"];

/* 1. Spread Operator (Shallow copy)
Ever since ES6 dropped, this has been the most popular method. It’s a brief syntax and you’ll find it incredibly useful when using libraries like React and Redux. */
let fruitsWithPineapple = [...fruits];

// Splice(at what index we want to input new item, items we want to delete, item(s) we want to add)
fruitsWithPineapple.splice(0, 1, "Pineapple");

console.log(fruitsWithPineapple);
