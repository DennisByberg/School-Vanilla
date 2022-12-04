import { saveToDatabase, getAllHighScores } from "./firebase.js";
import { toggleSlider } from "./slider.js";

let userWeapon; //Här sparar vi valet som användaren gör
let computerWeapon; //Här sparar vi datorns val
let matches = 0;
let stats = {
  wins: 0,
  loses: 0,
  draws: 0,
};
const maxGames = 3;
let round = 1;

// Omgång 1/3
printRound();

// Öppna och stänga hamburgarmenyn.
const menuBtn = document.querySelector(".hamburger");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  getAllHighScores();
  toggleSlider();
});

//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen ROCK.
document.getElementById("rock").addEventListener("click", function () {
  userWeapon = "sten";
  console.log(`Du har valt: ${userWeapon}`);
  addOneToRound();
  getWinner();
});

//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen SCISSOR.
document.getElementById("scissor").addEventListener("click", function () {
  userWeapon = "sax";
  console.log(`Du har valt: ${userWeapon}`);
  addOneToRound();
  getWinner();
});

//Det gör här är att vi hämtar knappen och kör kod när användaren klickar på knappen PAPER.
document.getElementById("paper").addEventListener("click", function () {
  userWeapon = "påse";
  console.log(`Du har valt: ${userWeapon}`);
  addOneToRound();
  getWinner();
});

// print "omgång 1 / 3 when we start the program..."
function printRound() {
  const roundEl = document.querySelector("#omgång-txt");
  roundEl.textContent = `
    Omgång ${round} / ${maxGames}
    `;
}

function resetRound() {
  const roundEl = document.querySelector("#omgång-txt");
  roundEl.textContent = "";
  round = 1;
}

// add one to round and setTimeOut for 2 sec...
function addOneToRound() {
  const roundEl = document.querySelector("#omgång-txt");
  round++;
  setTimeout(() => {
    roundEl.innerHTML = `Omgång ${round} / ${maxGames}`;
  }, 2000);
}

function showWinner(winner) {
  document.getElementById("winner").innerHTML = "Vinnare avgörs...";
  matches++;
  setTimeout(() => {
    if (matches === 3) {
      document.getElementById("winner").innerHTML = `
                <p>Vinster: ${stats.wins}</p>
                <p>Förluster: ${stats.loses}</p>
                <p>Oavgjort: ${stats.draws}</p>
            `;
      resetRound();
      makeButtonsSectionNotVisible();
      addPlayAgainOrSubmitToHighScoreButtons();
    } else {
      document.getElementById("winner").innerHTML = winner;
    }
  }, 2000); // Kör denna funktion efter 2s
}

function makeButtonsSectionNotVisible() {
  const buttonSection = document.querySelector("#buttons-section");
  buttonSection.style.display = "none";
}

function addPlayAgainOrSubmitToHighScoreButtons() {
  const body = document.querySelector("body");
  const template = `
    <section id="play-or-hs-buttons">
    <button id="play-again-btn">Play Again</button>
    <button id="submit-to-hs-btn">Submit Highscore</button>
    </section>
    `;
  body.insertAdjacentHTML("beforeend", template);

  document.querySelector("#play-again-btn").addEventListener("click", () => {
    window.location.reload();
  });

  document.querySelector("#submit-to-hs-btn").addEventListener("click", () => {
    document.querySelector("#play-or-hs-buttons").style.display = "none";
    SubmitForm();
  });
}

function SubmitForm() {
  const submitForm = document.querySelector("#submit-to-hs-form");
  const userName = document.querySelector("#submit-to-hs-form input");
  const submitBtn = document.querySelector("#submit");

  // make visible...
  submitForm.style.display = "flex";

  // save to db when submit-btn is clicked...
  submitBtn.addEventListener("click", () => {
    saveToDatabase(userName.value, stats.wins, stats.draws, stats.loses);
    printSubmitSuccessful();
    restart();
  });
}

function printSubmitSuccessful() {
  const submitBtn = document.querySelector("#submit");
  submitBtn.textContent = "SUCCESS 😊";
  submitBtn.style.borderColor = "green";
}

function restart() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

function getWinner() {
  computerWeapon = Math.round(Math.random() * 2); //Slumpa ett nummer mellan 0-2.
  if (computerWeapon == 0) {
    computerWeapon = "sten";
  } else if (computerWeapon == 1) {
    computerWeapon = "sax";
  } else if (computerWeapon == 2) {
    computerWeapon = "påse";
  }

  console.log(`Ditt vapen: ${userWeapon} Datorns vapen: ${computerWeapon}`);
  //Avgör vinnare. Kollar först om det blir blivit oavgjort annars vem som vann.
  if (userWeapon == computerWeapon) {
    stats.draws++;
    showWinner("Det blev oavgjort");
  } else if (userWeapon == "sten") {
    if (computerWeapon == "sax") {
      stats.wins++;
      showWinner("Du vann!");
    } else {
      stats.loses++;
      showWinner("Datorn vann!");
    }
  } else if (userWeapon == "sax") {
    if (computerWeapon == "påse") {
      stats.wins++;
      showWinner("Du vann!");
    } else {
      stats.loses++;
      showWinner("Datorn vann!");
    }
  } else if (userWeapon == "påse") {
    if (computerWeapon == "sten") {
      stats.wins++;
      showWinner("Du vann!");
    } else {
      stats.loses++;
      showWinner("Datorn vann!");
    }
  }
}
