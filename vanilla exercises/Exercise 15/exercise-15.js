let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
// In the array above, use a loop + if statement to filter out all numbers below 5 and insert them into a new array.

let newArray = [];

numArray.forEach((number) => {
  if (number < 5) {
    newArray.push(number);
  }
});

console.log(newArray);
