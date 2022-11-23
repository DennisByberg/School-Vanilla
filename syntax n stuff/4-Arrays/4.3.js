const myFruits = ["apple", "pear", "banana", "orange", "kiwi"];
// In the above fruit array, remove the first and last fruit.

// remove the last fruit from the array...
myFruits.pop();

// remove the first fruit of the array...
myFruits.shift();

console.log(myFruits);

/* ----------------------------- */

// In the following array, insert two new fruits at index 2.

let fruits = ["apple", "orange", "pear", "kiwi"];

// Splice(at what index we want to input new item, items we want to delete, item(s) we want to add)
fruits.splice(2, 0, "banana", "melon");

console.log(fruits);
