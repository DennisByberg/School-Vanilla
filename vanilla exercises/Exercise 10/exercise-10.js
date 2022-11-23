let names = ["David", "Christoffer", "Johan", "Maja"];
// In the array above, remove Christoffer and Johan.

for (let i = names.length - 1; i >= 0; i--) {
  if (names[i] === "Christoffer" || names[i] === "Johan") {
    names.splice(i, 1);
  }
}

// console.log(names);
