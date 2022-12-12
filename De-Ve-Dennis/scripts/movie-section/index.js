import { getAllMovies } from "../firebase.js";

const moviesUl = document.querySelector("#movies-section ul");

async function printAllMoviesToUl() {
  const movies = await getAllMovies();

  // clean Ul before printing it if updated...
  moviesUl.textContent = "";

  movies.forEach((movie) => {
    const liTemplate = `
    <div class="movie-container">
      <button class="delete-btn">X</button>
      <li>
        <p>Name: ${movie.data().name}</p>
        <p>Genre: ${movie.data().genre}</p>
        <p>Release Date: ${movie.data().releaseDate}</p>
      </li>
    </div>
    `;

    moviesUl.insertAdjacentHTML("beforeend", liTemplate);
  });
}

export { printAllMoviesToUl };
