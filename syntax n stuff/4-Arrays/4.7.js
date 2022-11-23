// Mix the following arrays where every other is from array a and every other from array b.

let a = ["My", "has", "many", "open"];
let b = ["brain", "to", "tabs", "!"];

const mixedArray = [];
for (let i = 0; i < a.length; i++) {
  mixedArray.push(a[i]);
  mixedArray.push(b[i]);
}
console.log(mixedArray);
