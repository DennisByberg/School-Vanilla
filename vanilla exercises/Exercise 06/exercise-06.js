let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// In the array above, replace hamster with tiger.

// If we know that hamster is at index 1
// animals.splice(1, 1, "tiger");

// if we don't know that hamster is at index 1
animalIndex = animals.indexOf("hamster");
animals.splice(animalIndex, 1, "tiger");

// console.log(animals);
