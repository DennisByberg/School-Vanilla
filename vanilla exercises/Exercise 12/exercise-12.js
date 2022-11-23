let str = "Supercalifragilisticexpialidocious";
// Check using a loop + if statement if the string above contains the letter x.

let containsTheLetterX = false;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "x" || str[i] === "X") {
    containsTheLetterX = true;
  }
}

// console.log(containsTheLetterX);
