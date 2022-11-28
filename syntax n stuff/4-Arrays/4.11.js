// Write the code to check if the array names contains the name Ewa. Your answer must be true or false.

let names = ["sixten", "Eva", "Ali", "Kim", "Greger", "Alicia"];

function doesTheArrayContainsName(arr, firstName) {
  let answer = false;
  arr.forEach((name) => {
    if (name === firstName) {
      answer = true;
    }
  });
  console.log(answer);
}

// Answer = False.
doesTheArrayContainsName(names, "Ewa");
