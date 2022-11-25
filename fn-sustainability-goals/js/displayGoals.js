import { data } from "./api.js"; // Data = API-List

// /v1/dgs / Goal / { goalCode } / Target / List;

const ul = document.querySelector("main ul");
let userChoice = null;

async function displayAllGoals() {
  const allGoals = await data;
  let amountOfGoalsArray = [];

  for (let i = 0; i < allGoals.length; i++) {
    if (!amountOfGoalsArray.includes(allGoals[i].goal)) {
      amountOfGoalsArray.push(allGoals[i].goal);
    }
  }

  for (let i = 0; i < amountOfGoalsArray.length; i++) {
    const liEl = `
		<li>${amountOfGoalsArray[i]}</li>
    `;
    ul.insertAdjacentHTML("beforeend", liEl);
  }
  const liEls = document.querySelectorAll("main ul li");
  liEls.forEach((x) => {
    x.addEventListener("click", (x) => {
      ul.textContent = "";
      userChoice = parseInt(x.target.innerHTML);

      allGoals.forEach((x) => {
        // Hantera allt som är under 10...
        if (userChoice < 10) {
          if (userChoice == x.code[0] && x.code[1] == ".") {
            const liEl = `
            <li>${x.code}</li>
            `;
            ul.insertAdjacentHTML("beforeend", liEl);
          }
        } else {
          const copyOfUserChoice = userChoice.toString();
          const secondNumber = copyOfUserChoice.slice(1);
          if (secondNumber == x.code[1]) {
            const liEl = `
            <li>${x.code}</li>
            `;
            ul.insertAdjacentHTML("beforeend", liEl);
          }
        }
      });
    });
  });
}

export { displayAllGoals };
