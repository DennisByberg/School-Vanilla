function toggleWelcomeSlider() {
  setTimeout(() => {
    welcomeSlider.classList.toggle("hide");
    displayNone();
  }, 4000);
}

function displayNone() {
  setTimeout(() => {
    welcomeSlider.classList.toggle("display-none");
  }, 1000);
}
export { toggleWelcomeSlider };
