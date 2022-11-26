import { displayAllGoals } from "./displayGoals.js";

const backButton = document.querySelector("#home-btn");
const ul = document.querySelector("main ul");
const section = document.querySelector("main section");
const main = document.querySelector("main");

function triggerBackButton() {
  backButton.addEventListener("click", () => {
    ul.textContent = "";
    backButton.style.display = "none";
    section.style.display = "none";
    main.style.marginTop = "6rem";
    main.style.marginBottom = "7.1rem";
    displayAllGoals();
  });
}

export { triggerBackButton };
