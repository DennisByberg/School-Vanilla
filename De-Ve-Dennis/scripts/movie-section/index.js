// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// Here I have all the functional code for the movie section which is the 2nd page I have.
// Here I import functions from a styling module that is in the same folder called...
// ... displayHandler and i also import database functions from the firebase module...
// ...if I need to change something in the database.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

import { getAllMoviesFromDatabase, removeFromDatabase } from "../firebase.js"; //db.
import { resetUl, printNoMoviesInDB } from "./displayHandler.js";

// <ul>'s...
const moviesUl = document.querySelector("#movies-section ul");
// <p>'s...
const noMoviesPTag = document.querySelector("#no-movies-to-see-txt");

// Checks if we got at least 1 movie in the database. If we cant find any movie in database we print that we got no movies, if we find at least 1 movie we loop through all movies in the db and creates movie-containers for them and then adds a onclick on the x button.
async function printAllMoviesToUl() {
  const movies = await getAllMoviesFromDatabase();
  resetUl();

  if (movies.size > 0) {
    movies.forEach((movie) => {
      const liTemplate = `
      <div class="movie-container">
      <button data-movie-id="${movie.id}" class="delete-btn">X</button>
      <li>
      <p>Name: ${movie.data().name}</p>
      <p>Genre: ${movie.data().genre}</p>
      <p>Release Date: ${movie.data().releaseDate}</p>
      </li>
      </div>
      `;
      moviesUl.insertAdjacentHTML("beforeend", liTemplate);
    });
    addDeleteOnClick();
  } else {
    printNoMoviesInDB();
  }
}

// Loops through all buttons in the ul and giving them different data-movie id. so we can delete containers one by one.
function addDeleteOnClick() {
  const allButtons = document.querySelectorAll("#movies-section ul button");
  allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const movieID = e.target.getAttribute("data-movie-id");
      removeFromDatabase(movieID);
      printAllMoviesToUl();
    });
  });
}

// Exports : functions.
export { printAllMoviesToUl };

// Exports : Variables.
export { moviesUl, noMoviesPTag };
