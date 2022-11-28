// Create the object dog with the properties name, breed and the method bark which should return "Woff, my name is N!" where N should be replaced with the name property in the same object.

const dog = {
  name: "Sune",
  breed: "CatDog",
  bark: () => {
    return `Woff, my name is ${dog.name}`;
  },
};

console.log(dog.bark());
