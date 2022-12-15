// inputs
const genreInput = document.querySelector("#genre-input");
const dateInput = document.querySelector("#date-input");
// p
const genreTxt = document.querySelector("#genre-txt");
const releaseDateTxt = document.querySelector("#date-txt");
const addOrSearchTxt = document.querySelector("#add-or-search-txt");
// buttons
const addMovieButton = document.querySelector("#add-btn");
const searchMovieButton = document.querySelector("#search-btn");
// articles
const headSectionArticle = document.querySelector("#head-section article");

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

export { displayAdd, displaySearch };
