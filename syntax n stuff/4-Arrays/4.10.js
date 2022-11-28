// Filter out all people who are 30 years of age or older.

let namesWithAgeOver30 = [];
let names = [
  { name: "sixten", age: 32 },
  { name: "Eva", age: 19 },
  { name: "Ali", age: 67 },
  { name: "Kim", age: 13 },
  { name: "Greger", age: 30 },
  { name: "Alicia", age: 82 },
];

names.forEach((person) => {
  if (person.age >= 30) {
    namesWithAgeOver30.push(person);
  }
});

console.log(namesWithAgeOver30);
