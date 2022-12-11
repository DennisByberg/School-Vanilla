// NOTE: version 15.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  // deleteDoc,
  // doc,
  // query,
  // where,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Maybe i need to hide this info...?
const firebaseConfig = {
  apiKey: "AIzaSyBXWfDom0NQu755rtaXQ0DzFfiXaH-jPls",
  authDomain: "de-ve-dennis.firebaseapp.com",
  projectId: "de-ve-dennis",
  storageBucket: "de-ve-dennis.appspot.com",
  messagingSenderId: "1096734931244",
  appId: "1:1096734931244:web:847e76e9f9f01c19635489",
};

const app = initializeApp(firebaseConfig); // app.
const db = getFirestore(app); // db.

// 1/x DB Functions | This one saves movieName : "String", movieGenre : "String" and movieReleaseDate "String" and stores/saves it in the Database.
async function saveToDatabase(movieName, movieGenre, movieReleaseDate) {
  try {
    await addDoc(collection(db, "Movies"), {
      name: movieName,
      genre: movieGenre,
      releaseDate: movieReleaseDate,
    });
  } catch (error) {
    console.log(error);
  }
}

// 2/x DB Functions | This one gets all movies from the database so we can loop it out or do something else with the info.
async function getAllMovies(savedMovies) {
  savedMovies = await getDocs(collection(db, "Movies"));
  return savedMovies;
}

// Exports...
export { saveToDatabase, getAllMovies };