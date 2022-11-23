// Sort the following array in descending order.
let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];

num.sort((a, b) => {
  return b - a;
});

console.log(num);
