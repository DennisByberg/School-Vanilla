// let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// In the array above, get funky chihuahua.

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];

// If we know that funky chihuahua is at index 3
const funkyChihuahuaWithIndex = animals[3];
console.log(`Funky chihuahua with index: ${funkyChihuahuaWithIndex}`);

// if we don't know that funky chihuahua is at index 3
animals.forEach((animalType) => {
  if (animalType == "funky chihuahua") {
    const funkyChihuahuaWithoutIndex = animalType;
    console.log(`Funky chihuahua without index: ${funkyChihuahuaWithoutIndex}`);
  }
});

// if we don't know that funky chihuahua is at index 3 and we are not allowed to use foreach-loops :D
for (let i = 0; i < animals.length; i++) {
  if (animals[i] == "funky chihuahua") {
    const funkyChihuahuaWithoutIndexAndForEachLoop = animals[i];
    console.log(
      `funky chihuahua without index and foreach-loop: ${funkyChihuahuaWithoutIndexAndForEachLoop}`
    );
  }
}
