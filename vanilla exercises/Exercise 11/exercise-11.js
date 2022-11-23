let str = "Supercalifragilisticexpialidocious";
// Check using a loop + if statement if the string above contains the letter n.

let containsTheLetterN = false;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "n" || str[i] === "N") {
    containsTheLetterN = true;
  }
}

// console.log(containsTheLetterN);
