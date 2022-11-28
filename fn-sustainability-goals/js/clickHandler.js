import { displayAllGoals } from "./displayList.js";

// Backbutton when you are on the last page ~> TITLE
function triggerBackButton() {
  document.querySelector("#home-btn").addEventListener("click", () => {
    resetList();
    displayAllGoals();
  });
}

// Triggered when you click "FN Sus Goals in header"...
function resetPageWhenNameIsClicked() {
  document.querySelector("header h1").addEventListener("click", () => {
    window.location.reload();
  });
}

// Reset
function resetList() {
  document.querySelector("#home-btn").style.display = "none";
  document.querySelector("main ul").textContent = "";
  document.querySelector("main section").style.display = "none";
  document.querySelector("main").style.marginTop = "6rem";
  document.querySelector("main").style.marginBottom = "7.1rem";
}

export { triggerBackButton, resetPageWhenNameIsClicked };
