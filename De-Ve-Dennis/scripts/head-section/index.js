// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// Here I have all the functional code for the head section which is 1 of 2 pages I have.
// Here I import functions from a styling module that is in the same folder called...
// ... displayHandler and i also import database functions from the firebase module...
// ...if I need to change something in the database.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

import { saveToDatabase, checkIfNameAlreadyInDatabase } from "../firebase.js"; //db.
import { printAllMoviesToUl } from "../movie-section/index.js";
import {
  displayAdd,
  displaySearch,
  displayNotFound,
  displayFound,
  displayAddFailed,
  displayAddSucceed,
  clearAddInputs,
  clearSearchInput,
} from "./displayHandler.js";

// <input>'s...
const nameInput = document.querySelector("#name-input");
const genreInput = document.querySelector("#genre-input");
const dateInput = document.querySelector("#date-input");
// <p>'s...
const addOrSearchTxt = document.querySelector("#add-or-search-txt");
// <button>'s
const addMovieButton = document.querySelector("#add-btn");
const searchMovieButton = document.querySelector("#search-btn");
const toggleSwitch = document.querySelector(".slider");

// Toggle the head-section toggler back and fourth between two stages. "ADD MOVIE" and "SEARCH MOVIE".
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

// Checks if name input & genre input is filled. Saves all 3 inputs into the db if input is correct. Clears inputs and updates movie list.
function addMovie() {
  addMovieButton.addEventListener("click", () => {
    if (nameInput.value === "" || genreInput.value === "") {
      displayAddFailed();
    } else {
      displayAddSucceed();
      saveToDatabase(
        convertInput(nameInput.value),
        convertInput(genreInput.value),
        dateInput.value
      );
    }
    clearAddInputs();
    printAllMoviesToUl();
  });
}

// Checks if the name in the input exists in the database and display if yes or no then clearing the name input value.
function searchMovie() {
  searchMovieButton.addEventListener("click", async () => {
    const result = await checkIfNameAlreadyInDatabase(
      convertInput(nameInput.value)
    );
    if (result.size > 0) {
      displayFound();
    } else {
      displayNotFound();
    }
    clearSearchInput();
  });
}

// Converts given input to first letter capitalized and the rest lowercase to get a standard in app.
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

// Exports : Functions.
export { addMovie, toggler, searchMovie };
// Exports : Variables.
export {
  nameInput,
  genreInput,
  dateInput,
  addOrSearchTxt,
  addMovieButton,
  searchMovieButton,
};
