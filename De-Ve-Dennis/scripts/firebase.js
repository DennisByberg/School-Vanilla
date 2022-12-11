import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  // getDocs,
  // deleteDoc,
  // doc,
  // query,
  // where,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBXWfDom0NQu755rtaXQ0DzFfiXaH-jPls",
  authDomain: "de-ve-dennis.firebaseapp.com",
  projectId: "de-ve-dennis",
  storageBucket: "de-ve-dennis.appspot.com",
  messagingSenderId: "1096734931244",
  appId: "1:1096734931244:web:847e76e9f9f01c19635489",
};

const app = initializeApp(firebaseConfig); // app
const db = getFirestore(app); // db

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

// My Exports...
export { saveToDatabase };
