const input = document.querySelector("input");
const button = document.querySelector("button");
const answerText = document.querySelector("h2");
let guessCounter = document.querySelector("h3");
const numberWithDecimals = Math.random() * 100;
const rightAnswer = Math.round(numberWithDecimals);
let counter = 1;

// un-comment this to cheat... v
// console.log(rightAnswer);

// When we click on the button...
button.addEventListener("click", () => {
  guessCounter.innerText = `Antal gissningar: ${counter}`;
  console.log(counter);
  counter++;
  if (parseInt(input.value) === rightAnswer) {
    answerText.innerText = "Rätt svar!";
    answerText.style.color = "lightgreen";
  } else if (parseInt(input.value) < rightAnswer) {
    answerText.innerText = "För Lågt";
    answerText.style.color = "red";
  } else {
    answerText.innerText = "För Högt";
    answerText.style.color = "red";
  }
});
