import { data } from "./api.js"; // Data = API-List
let userChoice = null;

async function displayAllGoals() {
  const ul = document.querySelector("main ul");
  const allGoals = await data;
  let amountOfGoalsArray = [];

  for (let i = 0; i < allGoals.length; i++) {
    if (!amountOfGoalsArray.includes(allGoals[i].goal)) {
      amountOfGoalsArray.push(allGoals[i].goal);
    }
  }

  for (let i = 0; i < amountOfGoalsArray.length; i++) {
    const liTemplate = `
		<li>
    ${amountOfGoalsArray[i]}
    </li>
    
    `;
    ul.insertAdjacentHTML("beforeend", liTemplate);
  }
  const liTemplates = document.querySelectorAll("main ul li");
  liTemplates.forEach((li) => {
    li.addEventListener("click", (li) => {
      ul.textContent = "";
      userChoice = parseInt(li.target.innerHTML);

      allGoals.forEach((goal) => {
        if (userChoice < 10) {
          if (userChoice == goal.code[0] && goal.code[1] == ".") {
            const liTemplate = `
            <li>${goal.code}</li>
            `;
            ul.insertAdjacentHTML("beforeend", liTemplate);
          }
        } else {
          const copyOfUserChoice = userChoice.toString();
          const secondNumber = copyOfUserChoice.slice(1);
          if (secondNumber == goal.code[1]) {
            const liTemplate = `
            <li>${goal.code}</li>
            `;
            ul.insertAdjacentHTML("beforeend", liTemplate);
          }
        }
      });
      const liElements = document.querySelectorAll("main ul li");
      liElements.forEach((liEl) => {
        liEl.addEventListener("click", async (liEl) => {
          const goalCode = liEl.target.innerHTML;
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
  } catch (err) {
    console.log(err);
  }
}

function displayTitle(titleData) {
  document.querySelector("#home-btn").style.display = "block";
  document.querySelector("main").style.marginTop = "0";
  document.querySelector("main").style.marginBottom = "1rem";
  document.querySelector("main section").style.display = "block";
  document.querySelector("main p").textContent = titleData[0].title;
}

export { displayAllGoals };
