import {
  nameInput,
  genreInput,
  addOrSearchTxt,
  addMovieButton,
  searchMovieButton,
  dateInput,
} from "./index.js";

// articles...
const headSectionArticle = document.querySelector("#head-section article");
// p.
const releaseDateTxt = document.querySelector("#date-txt");
const genreTxt = document.querySelector("#genre-txt");

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

function clearAddInputs() {
  nameInput.value = "";
  genreInput.value = "";
  dateInput.value = "";
}

function clearSearchInput() {
  nameInput.value = "";
}

export { displayAdd, displaySearch, clearAddInputs, clearSearchInput };
