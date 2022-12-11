import { saveToDatabase } from "../firebase.js";

const nameInput = document.querySelector("#name-input");
const genreInput = document.querySelector("#genre-input");
const dateInput = document.querySelector("#date-input");
const addToCollectionButton = document.querySelector("#add-btn");

function addToCollection() {
  addToCollectionButton.addEventListener("click", () => {
    saveToDatabase(nameInput.value, genreInput.value, dateInput.value);
  });
}

export { addToCollection };
