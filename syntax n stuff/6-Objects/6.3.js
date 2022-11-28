// Clone an object

const food = { beef: "🥩", bacon: "🥓" };
const cloneFood = JSON.parse(JSON.stringify(food));

console.log(cloneFood);
