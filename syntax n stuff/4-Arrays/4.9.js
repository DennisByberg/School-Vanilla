//Make all names in array names uppercase.

let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];
let upperCaseNames = [];

names.forEach((name) => {
  upperCaseNames.push(name.toUpperCase());
});

console.log(upperCaseNames);
