import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8f-pH5436Tqt1gMP2FihSQZJRply2lhA",
  authDomain: "solaris-2.firebaseapp.com",
  projectId: "solaris-2",
  storageBucket: "solaris-2.appspot.com",
  messagingSenderId: "531428510769",
  appId: "1:531428510769:web:02f9fc2d67b8e1309b1910",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // app
const db = getFirestore(app); // db

async function saveToDatabase(planetName) {
  try {
    await addDoc(collection(db, "Favorites"), {
      planet: planetName,
    });
  } catch (error) {
    console.log(error);
  }
}

async function removeFromDatabase(planetId) {
  try {
    await deleteDoc(doc(db, "Favorites", planetId));
  } catch (error) {
    console.log(error);
  }
}

function addClickEvent() {
  const allPlanets = document.querySelectorAll("#favoriteSlider ul li");

  allPlanets.forEach((p) => {
    p.addEventListener("click", (event) => {
      const planetId = event.target.getAttribute("data-planet-id");
      removeFromDatabase(planetId);
      getAllPlanets();
    });
  });
}

async function getAllPlanets() {
  const allPlanetsUL = document.querySelector("#favoriteSlider ul");
  const planetsInDB = await getDocs(collection(db, "Favorites"));
  allPlanetsUL.textContent = "";

  planetsInDB.forEach((p) => {
    const liTemplate = `<li data-planet-id="${p.id}">${p.data().planet}</li>`;
    allPlanetsUL.insertAdjacentHTML("beforeend", liTemplate);
  });
  const allPlanetsLi = document.querySelectorAll("#favoriteSlider ul li");
  if (allPlanetsLi.length === 0) {
    document.querySelector("#favoriteSlider h3").textContent = "";
    allPlanetsUL.innerHTML = `
    <p>You don't have any favorite planets...</p>
    <p>Go back and click on a planet and then favorite it by clicking on the star</p>
    `;
  } else {
    document.querySelector("#favoriteSlider h3").textContent =
      "Favorite Planets";
    addClickEvent();
  }
}

export { saveToDatabase, getAllPlanets, query, db, collection, where, getDocs };
