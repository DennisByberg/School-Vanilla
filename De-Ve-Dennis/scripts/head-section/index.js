import { saveToDatabase } from "../firebase.js";
import { printAllMoviesToUl } from "../movie-section/index.js";

const nameInput = document.querySelector("#name-input");
const genreInput = document.querySelector("#genre-input");
const dateInput = document.querySelector("#date-input");
const addToCollectionButton = document.querySelector("#add-btn");

// This function activates when you click the "Add To Collection Button" and saves name, genre and date and adds it to the db.
function addToCollection() {
  addToCollectionButton.addEventListener("click", () => {
    saveToDatabase(nameInput.value, genreInput.value, dateInput.value);
    printAllMoviesToUl();
  });
}

// Exports...
export { addToCollection };
