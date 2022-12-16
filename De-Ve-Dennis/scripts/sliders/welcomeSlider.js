// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// Nothing but styling changes for the slider in this module.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

// <body>
const body = document.querySelector("body");

// Only styling changes.
function toggleWelcomeSlider() {
  body.style.overflowY = "hidden";
  setTimeout(() => {
    welcomeSlider.classList.toggle("hide");
    displayNone();
    body.style.overflowY = null;
  }, 5000);
}

// Only styling changes.
function displayNone() {
  setTimeout(() => {
    welcomeSlider.classList.toggle("display-none");
  }, 1000);
}

// Exports : Functions
export { toggleWelcomeSlider };
