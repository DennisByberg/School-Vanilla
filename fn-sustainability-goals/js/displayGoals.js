import { data } from "./api.js";

const ul = document.querySelector("main ul");

async function displayAllGoals() {
  const allGoals = await data;
  let amountOfGoalsArray = [];

  for (let i = 0; i < allGoals.length; i++) {
    if (amountOfGoalsArray.includes(allGoals[i].goal)) {
      // Do nothing...
    } else {
      amountOfGoalsArray.push(allGoals[i].goal);
    }
  }
  for (let i = 0; i < amountOfGoalsArray.length; i++) {
    const liEl = `
		<li>${amountOfGoalsArray[i]}</li>
	`;
    ul.insertAdjacentHTML("beforeend", liEl);
  }
}

export { displayAllGoals };
