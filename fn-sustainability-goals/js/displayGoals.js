import { data } from "./api.js"; // Data = API-List

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
		<li>
    ${amountOfGoalsArray[i]}
    </li>
    
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
      const liEls = document.querySelectorAll("main ul li");
      liEls.forEach((x) => {
        x.addEventListener("click", async (x) => {
          const goalCode = x.target.innerHTML;
          ul.textContent = "";
          await getGoalTitle(goalCode);
        });
      });
    });
  });
}

async function getGoalTitle(goalCode) {
  try {
    const URL = "https://unstats.un.org/SDGAPI";
    const resp = await fetch(
      `${URL}/v1/sdg/Target/${goalCode}/Indicator/List?includechildren=true`
    );
    const titleData = await resp.json();
    displayTitle(titleData);
    // console.log(titleData[0].title);
  } catch (err) {
    console.log(err);
  }
}

function displayTitle(titleData) {
  console.log(titleData[0].title);
  const p = document.querySelector("main p");
  const section = document.querySelector("main section");
  const main = document.querySelector("main");
  const backButton = document.querySelector("#home-btn");
  backButton.style.display = "block";
  main.style.marginTop = "0";
  main.style.marginBottom = "1rem";
  section.style.display = "block";
  p.textContent = titleData[0].title;
}

export { displayAllGoals };
