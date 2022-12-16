// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// Nothing but styling changes for the head-section in this module.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

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
// p-tags...
const releaseDateTxt = document.querySelector("#date-txt");
const genreTxt = document.querySelector("#genre-txt");

// Only styling changes.
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

// Only styling changes.
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

// Clear all input values in the "Add Movie / Search Movie" inputs.
function clearAddInputs() {
  nameInput.value = "";
  genreInput.value = "";
  dateInput.value = "";
}

// Clear only the name input value in the "Add Movie / Search Movie" inputs.
function clearSearchInput() {
  nameInput.value = "";
}

// Only styling changes.
function displayAddFailed() {
  headSectionArticle.style.boxShadow = "0 0 20px var(--dvdDangerDarkRed)";
  addMovieButton.style.backgroundColor = "var(--dvdDangerDarkRed)";
  addMovieButton.textContent = "INVALID INPUT(s)";
  setTimeout(() => {
    headSectionArticle.style.boxShadow = "0 0 15px var(--dvdMediumBlue)";
    addMovieButton.style.backgroundColor = "var(--dvdMediumBlue)";
    addMovieButton.textContent = "Add Movie";
  }, 2500);
}
// Only styling changes.
function displayAddSucceed() {
  headSectionArticle.style.boxShadow = "0 0 15px var(--dvdSuccessGreen)";
  addMovieButton.style.backgroundColor = "var(--dvdSuccessGreen)";
  addMovieButton.textContent = "ADDED MOVIE";
  setTimeout(() => {
    headSectionArticle.style.boxShadow = "0 0 15px var(--dvdMediumBlue)";
    addMovieButton.style.backgroundColor = "var(--dvdMediumBlue)";
    addMovieButton.textContent = "Add Movie";
  }, 2500);
}
// Only styling changes.
function displayFound() {
  headSectionArticle.style.boxShadow = "0 0 15px var(--dvdSuccessGreen)";
  searchMovieButton.textContent = "MOVIE FOUND";
  searchMovieButton.style.backgroundColor = "var(--dvdSuccessGreen)";
  setTimeout(() => {
    headSectionArticle.style.boxShadow = "0 0 15px var(--dvdPink)";
    searchMovieButton.textContent = "Search Movie";
    searchMovieButton.style.backgroundColor = "var(--dvdPink)";
  }, 2500);
}

// Only styling changes.
function displayNotFound() {
  headSectionArticle.style.boxShadow = "0 0 20px var(--dvdDangerDarkRed)";
  searchMovieButton.textContent = "NOT FOUND";
  searchMovieButton.style.backgroundColor = "var(--dvdDangerDarkRed)";
  searchMovieButton.style.color = "white";
  setTimeout(() => {
    headSectionArticle.style.boxShadow = "0 0 15px var(--dvdPink)";
    searchMovieButton.textContent = "Search Movie";
    searchMovieButton.style.backgroundColor = "var(--dvdPink)";
    searchMovieButton.style.color = "black";
  }, 2500);
}

// Exports : Functions...
export {
  displayAdd,
  displaySearch,
  displayNotFound,
  displayFound,
  displayAddSucceed,
  displayAddFailed,
  clearAddInputs,
  clearSearchInput,
};
