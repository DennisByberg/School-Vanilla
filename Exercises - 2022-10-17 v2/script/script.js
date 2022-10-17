// Leta reda på knappen...
let addButton = document.querySelector(".add-btn");
let subButton = document.querySelector(".sub-btn");
let p = document.querySelector("p");
let count = 0;

// Släng på öronen
addButton.addEventListener("click", (e) => {
  count++;
  p.innerText = count;
});

subButton.addEventListener("click", (e) => {
  count--;
  p.innerText = count;
});
// Lyssna efter click
// Vad händer när ett click registreras
