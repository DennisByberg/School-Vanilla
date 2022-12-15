import { saveToDatabase, checkIfNameAlreadyInDatabase } from "../firebase.js"; // database.
import { printAllMoviesToUl } from "../movie-section/index.js";
import { displayAdd, displaySearch } from "./displayHandler.js";

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
      displaySearch();
    } else {
      displayAdd();
    }
  });
}

// Adds dummy data for testing purposes only...
const image = document
  .querySelector("#logo-img")
  .addEventListener("click", () => {
    const rndNumber = Math.floor(Math.random() * 1000);
    saveToDatabase(
      `Test Name ${rndNumber}`,
      `Test Genre ${rndNumber}`,
      "1994-01-01"
    );
    printAllMoviesToUl();
  });

// This function activates when you click the "Add To Collection Button" and saves name, genre and date and adds it to the db.
function addToCollection() {
  addMovieButton.addEventListener("click", () => {
    saveToDatabase(nameInput.value, genreInput.value, dateInput.value);
    printAllMoviesToUl();
  });
}

function searchMovie() {
  searchMovieButton.addEventListener("click", async () => {
    const result = await checkIfNameAlreadyInDatabase(nameInput.value);
    if (result.size > 0) {
      console.log("Found it!");
    } else {
      console.log("Can't find it!");
    }
  });
}

// Exports...
export { addToCollection, toggler, searchMovie };
