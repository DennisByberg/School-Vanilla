import { saveToDatabase, checkIfNameAlreadyInDatabase } from "../firebase.js"; //db.
import { printAllMoviesToUl } from "../movie-section/index.js";
import {
  displayAdd,
  displaySearch,
  clearAddInputs,
  clearSearchInput,
} from "./displayHandler.js";

// inputs
const nameInput = document.querySelector("#name-input");
const genreInput = document.querySelector("#genre-input");
const dateInput = document.querySelector("#date-input");
// p
const addOrSearchTxt = document.querySelector("#add-or-search-txt");
// buttons
const addMovieButton = document.querySelector("#add-btn");
const searchMovieButton = document.querySelector("#search-btn");
const toggleSwitch = document.querySelector(".slider");

// Toggler
function toggler() {
  toggleSwitch.addEventListener("click", () => {
    if (addOrSearchTxt.textContent === "Add Movie") {
      clearAddInputs();
      displaySearch();
    } else {
      clearSearchInput();
      displayAdd();
    }
  });
}

// This function activates when you click the "Add To Collection Button" and saves name, genre and date and adds it to the db.
function addMovie() {
  addMovieButton.addEventListener("click", () => {
    saveToDatabase(
      convertInput(nameInput.value),
      convertInput(genreInput.value),
      dateInput.value
    );
    clearAddInputs();
    printAllMoviesToUl();
  });
}

function searchMovie() {
  searchMovieButton.addEventListener("click", async () => {
    const result = await checkIfNameAlreadyInDatabase(
      convertInput(nameInput.value)
    );
    if (result.size > 0) {
      console.log("Found it!");
    } else {
      console.log("Can't find it!");
    }
    clearSearchInput();
  });
}

function convertInput(input) {
  const lowerCaseName = input.toLowerCase();
  const firstLetterCapitalized =
    lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
  return firstLetterCapitalized;
}

// Adds dummy data for testing purposes only...
document.querySelector("#logo-img").addEventListener("click", () => {
  const rndNumber = Math.floor(Math.random() * 1000);
  saveToDatabase(
    `Test Name ${rndNumber}`,
    `Test Genre ${rndNumber}`,
    "1994-01-01"
  );
  printAllMoviesToUl();
});

// Export : Functions.
export { addMovie, toggler, searchMovie };
// Export : Variables.
export {
  nameInput,
  genreInput,
  dateInput,
  addOrSearchTxt,
  addMovieButton,
  searchMovieButton,
};
