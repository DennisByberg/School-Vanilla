import { displayAllGoals } from "./displayList.js";

function triggerBackButton() {
  document.querySelector("#home-btn").addEventListener("click", () => {
    resetList();
    displayAllGoals();
  });
}

function resetPageWhenNameIsClicked() {
  document.querySelector("header h1").addEventListener("click", () => {
    window.location.reload();
  });
}

// Function that resets the list to its start version...
function resetList() {
  document.querySelector("#home-btn").style.display = "none";
  document.querySelector("main ul").textContent = "";
  document.querySelector("main section").style.display = "none";
  document.querySelector("main").style.marginTop = "6rem";
  document.querySelector("main").style.marginBottom = "7.1rem";
}

export { triggerBackButton, resetPageWhenNameIsClicked };
