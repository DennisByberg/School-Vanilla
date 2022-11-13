const generatePasswordButton = document
  .querySelector("button")
  .addEventListener("click", () => {
    generateRandomPassword();
  });

function generateRandomPassword() {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];
  let randomPassword1 = "";
  let randomPassword2 = "";
  const lengthOfPassword = document.querySelector("#number-dd").value;
  console.log(lengthOfPassword);

  for (let i = 0; i < lengthOfPassword; i++) {
    const randomIndex1 = Math.floor(Math.random() * characters.length);
    const randomIndex2 = Math.floor(Math.random() * characters.length);
    randomPassword1 += characters[randomIndex1];
    randomPassword2 += characters[randomIndex2];
  }
  document.querySelector("#password-1").textContent = randomPassword1;
  document.querySelector("#password-2").textContent = randomPassword2;
  document.querySelector("aside").style.display = "flex";
}
