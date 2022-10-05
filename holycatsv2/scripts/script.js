/* -------------------- | HOMEPAGE-SCRIPT | --------------------*/
// Öppna och stänga hamburgarmenyn.
window.onload = function () {
  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-nav-links");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });
};

/* -------------------- | CONTACT-SCRIPT | --------------------*/
// Data från Form
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validera att våran data är korrekt.
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name can not be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "THANK YOU FOR YOUR MAIL!";
  }
}

// Tar bort error meddelanden när dom stämmer igen.
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  success.innerText = "";
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

// Validerar att emailen är korrekt inmatad.
function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/; // REGEX kopierat från gammalt kodprojekt.
  return pattern.test(email);
}

let slideIndex = 0;
showSlides();

/* --------------------- | POLKA-SCRIPT | ----------------------*/
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

/* ------------------- | DARK-MODE SCRIPT | --------------------*/
function changePerformanceMode() {
  let x = document.getElementById("bg-video");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
