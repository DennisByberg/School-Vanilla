var displayNumber = document.getElementById("display");
// Create an Array of all the buttons...
let buttons = Array.from(document.getElementsByClassName("calc-btn"));

// Everytime you click on a button the function doCalculate() will get triggered...
buttons.map((button) => {
  button.addEventListener("click", (numberOrSymbolClicked) => {
    doCalculate(numberOrSymbolClicked);
  });
});

function doCalculate(numberOrSymbolClicked) {
  // This if statement take away placeholder 0...
  if (displayNumber.innerText == "0") {
    displayNumber.innerText = "";
  }

  switch (numberOrSymbolClicked.target.innerText) {
    case "C":
      displayNumber.innerText = "0";
      break;

    case "=":
      displayNumber.innerText = eval(displayNumber.innerText);
      break;

    default:
      displayNumber.innerText += numberOrSymbolClicked.target.innerText;
      break;
  }
}
