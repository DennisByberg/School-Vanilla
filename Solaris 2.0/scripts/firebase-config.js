import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
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
  const planets = await getDocs(collection(db, "Favorites"));

  allPlanetsUL.textContent = "";
  planets.forEach((p) => {
    console.log(p.id);
    console.log(p.data());
    const liTemplate = `<li data-planet-id="${p.id}">${p.data().planet}</li>`;
    allPlanetsUL.insertAdjacentHTML("beforeend", liTemplate);
  });

  addClickEvent();
}

export { saveToDatabase, getAllPlanets };
