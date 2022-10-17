// 1. Byt namn på första hoodien från Ash till Potato.
let ash = document.querySelector(".art-1 h3");
ash.innerText = "potato";

let home = document.querySelectorAll(".home");
home.forEach((e) => {
  e.innerText = "Start";
  console.log(home);
  console.log(e.innerText);
});
