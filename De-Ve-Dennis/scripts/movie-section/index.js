import { getAllMoviesFromDatabase, removeFromDatabase } from "../firebase.js"; //db.
import { resetUl, printNoMoviesInDB } from "./displayHandler.js";

const moviesUl = document.querySelector("#movies-section ul");
const noMoviesPTag = document.querySelector("#no-movies-to-see-txt");

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

// Export : functions.
export { printAllMoviesToUl };

// Export : Variables.
export { moviesUl, noMoviesPTag };
