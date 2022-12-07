function hamburgerMenu() {
  // Öppna och stänga hamburgarmenyn.
  const hamburgerBtn = document.querySelector("#hamburger");
  const navBar = document.querySelector("header nav ul");
  const projectName = document.querySelector("#project-name");
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("is-active");
    navBar.classList.toggle("is-active");
    projectName.classList.toggle("is-active");
  });
}

export { hamburgerMenu };
