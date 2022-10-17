// Variabler...
let headline = document.querySelector("body h1");
let allPTags = document.querySelectorAll("p");

headline.innerText = "Found You";
headline.style.color = "black";
headline.style.backgroundColor = "gold";

allPTags.forEach((element) => {
  element.innerText = "Found You 2";
});
