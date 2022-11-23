let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// In the array above, get cat.

// If we know that cat is at index 0
const catWithIndex = animals[0];
console.log(`Cat with index: ${catWithIndex}`);

// if we don't know that cat is at index 0
animals.forEach((animalType) => {
  if (animalType == "cat") {
    const catWithoutIndex = animalType;
    console.log(`Cat without index: ${catWithoutIndex}`);
  }
});

// if we don't know that cat is at index 0 and we are not allowed to use foreach-loops :D
for (let i = 0; i < animals.length; i++) {
  if (animals[i] == "cat") {
    const catWithoutIndexAndForEachLoop = animals[i];
    console.log(
      `Cat without index and foreach-loop: ${catWithoutIndexAndForEachLoop}`
    );
  }
}
