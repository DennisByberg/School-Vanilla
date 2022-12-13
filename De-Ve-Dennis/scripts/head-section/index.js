import { saveToDatabase } from "../firebase.js";
import { printAllMoviesToUl } from "../movie-section/index.js";

// inputs
const nameInput = document.querySelector("#name-input");
const genreInput = document.querySelector("#genre-input");
const dateInput = document.querySelector("#date-input");
// p
const genreTxt = document.querySelector("#genre-txt");
const releaseDateTxt = document.querySelector("#date-txt");
const addOrSearchTxt = document.querySelector("#add-or-search-txt");
// buttons
const addMovieButton = document.querySelector("#add-btn");
const searchMovieButton = document.querySelector("#search-btn");
const toggleSwitch = document.querySelector(".slider");
// articles
const headSectionArticle = document.querySelector("#head-section article");

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

function displaySearch() {
  addOrSearchTxt.textContent = "Search Movie";
  genreTxt.style.display = "none";
  releaseDateTxt.style.display = "none";
  dateInput.style.display = "none";
  genreInput.style.display = "none";

  searchMovieButton.style.display = "inline";
  addMovieButton.style.display = "none";

  headSectionArticle.style.boxShadow = "0 0 15px var(--dvdPink)";
}

function displayAdd() {
  addOrSearchTxt.textContent = "Add Movie";
  genreTxt.style.display = "flex";
  releaseDateTxt.style.display = "flex";
  dateInput.style.display = "flex";
  genreInput.style.display = "flex";

  searchMovieButton.style.display = "none";
  addMovieButton.style.display = "inline";

  headSectionArticle.style.boxShadow = "0 0 15px var(--dvdMediumBlue)";
}

// This function activates when you click the "Add To Collection Button" and saves name, genre and date and adds it to the db.
function addToCollection() {
  addMovieButton.addEventListener("click", () => {
    saveToDatabase(nameInput.value, genreInput.value, dateInput.value);
    printAllMoviesToUl();
  });
}

// Exports...
export { addToCollection, toggler };
