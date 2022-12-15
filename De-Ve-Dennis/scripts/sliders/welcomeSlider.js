const body = document.querySelector("body");

function toggleWelcomeSlider() {
  body.style.overflowY = "hidden";
  setTimeout(() => {
    welcomeSlider.classList.toggle("hide");
    displayNone();
    body.style.overflowY = null;
  }, 5000);
}

function displayNone() {
  setTimeout(() => {
    welcomeSlider.classList.toggle("display-none");
  }, 1000);
}
export { toggleWelcomeSlider };
