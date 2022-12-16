// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑
// This is the firebase module. Here my main focus is to only write
// code that we can use in several different places without rewriting the function.
// As you can see, we can call it at different places by only give the function a movieID for example.
// ❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑❑

// NOTE: version 15.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
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

// 1/4 DB Functions | Saves movieName : "String", movieGenre : "String" and movieReleaseDate "String" and stores/saves it in the Database.
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

// 2/4 DB Functions | Gets all movies from the database so we can loop it out or do something else with the info.
async function getAllMoviesFromDatabase(savedMovies) {
  savedMovies = await getDocs(collection(db, "Movies"));
  return savedMovies;
}

// 3/4 DB Functions | Removes the given movieID from the database.
async function removeFromDatabase(movieID) {
  try {
    await deleteDoc(doc(db, "Movies", movieID));
  } catch (error) {
    console.log(error);
  }
}

//4/4 DB Functions | Checks if the name of the given movie already contains in the database and return a result that we can use.
async function checkIfNameAlreadyInDatabase(nameOfTheMovie) {
  const movieName = nameOfTheMovie;
  const movieQuery = query(
    collection(db, "Movies"),
    where("name", "==", movieName)
  );
  const result = await getDocs(movieQuery);
  return result;
}

// Exports : Functions...
export {
  saveToDatabase,
  getAllMoviesFromDatabase,
  removeFromDatabase,
  checkIfNameAlreadyInDatabase,
};
