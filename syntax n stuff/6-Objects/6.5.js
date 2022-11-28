// Loop out the following object where key and value should console.log(). Ex. "name - Sixten".

let person = {
  name: "sixten",
  email: "sixten@zocom.se",
  role: "ninjah",
  age: 32,
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} - ${value}`);
}
