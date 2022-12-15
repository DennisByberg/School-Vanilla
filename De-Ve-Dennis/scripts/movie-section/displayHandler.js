import { moviesUl, noMoviesPTag } from "./index.js";

function printNoMoviesInDB() {
  moviesUl.style.display = "none";
  noMoviesPTag.style.display = "flex";
}

function resetUl() {
  moviesUl.style.display = "grid";
  moviesUl.textContent = "";
  noMoviesPTag.style.display = "none";
}

export { printNoMoviesInDB, resetUl };
