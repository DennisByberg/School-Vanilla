// console.log() only the city property in the following object.

let person = {
  name: "Sixten Faceplant",
  email: "sixten.faceplant@zocom.se",
  role: "ninjah",
  address: {
    street: "Karatevägen 3",
    zip: "41477",
    city: "Kablam City",
  },
};

console.log(person.address.city);
