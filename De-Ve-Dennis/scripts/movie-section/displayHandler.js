// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// Nothing but styling changes for the movie-section in this module.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

import { moviesUl, noMoviesPTag } from "./index.js";

// Only styling changes.
function printNoMoviesInDB() {
  moviesUl.style.display = "none";
  noMoviesPTag.style.display = "flex";
}

// Only styling changes.
function resetUl() {
  moviesUl.style.display = "grid";
  moviesUl.textContent = "";
  noMoviesPTag.style.display = "none";
}

// Exports : Functions...
export { printNoMoviesInDB, resetUl };
