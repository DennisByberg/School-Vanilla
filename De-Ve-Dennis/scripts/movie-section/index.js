import { getAllMovies } from "../firebase.js";

const moviesUl = document.querySelector("#movies-section ul");

async function printAllMoviesToUl() {
  const movies = await getAllMovies();
  movies.forEach((movie) => {
    const liTemplate = `<li>${movie.data().name} | ${movie.data().genre} | ${
      movie.data().releaseDate
    }</li>`;
    moviesUl.insertAdjacentHTML("beforeend", liTemplate);
  });
}

export { printAllMoviesToUl };
