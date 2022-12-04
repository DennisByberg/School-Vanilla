import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlRgYfOxcOmRuooj3YiTifCy0Ba_dy01Q",
  authDomain: "rock-paper-scissor-app.firebaseapp.com",
  projectId: "rock-paper-scissor-app",
  storageBucket: "rock-paper-scissor-app.appspot.com",
  messagingSenderId: "473565817042",
  appId: "1:473565817042:web:20dd75bd86598faffce50b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // app
const db = getFirestore(app); // db

export async function saveToDatabase(
  playerUsername,
  playerWins,
  playerDraws,
  playerLosses
) {
  try {
    await addDoc(collection(db, `HighScore`), {
      username: playerUsername,
      wins: playerWins,
      draws: playerDraws,
      losses: playerLosses,
    });
  } catch (error) {
    console.log(error);
  }
}
