const navBar = document.querySelector("header nav ul");
const projectName = document.querySelector("#project-name");
const hamburgerBtn = document.querySelector("#hamburger");

// Öppna och stänga hamburgarmenyn.
function hamburgerMenu() {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("is-active");
    navBar.classList.toggle("is-active");
    projectName.classList.toggle("is-active");
  });
}

export { hamburgerMenu, navBar, projectName, hamburgerBtn };
