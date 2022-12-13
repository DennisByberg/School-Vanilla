import { getAllMovies, removeFromDatabase } from "../firebase.js";

const moviesUl = document.querySelector("#movies-section ul");

async function printAllMoviesToUl() {
  const movies = await getAllMovies();
  moviesUl.textContent = "";
  if (movies.size > 0) {
    // clean Ul before printing it if updated...
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

function printNoMoviesInDB() {
  moviesUl.innerHTML = `<p>Whoops... The list is empty</p>`;
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
export { printAllMoviesToUl };
