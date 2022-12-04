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

export async function getAllHighScores() {
  const highScores = await getDocs(collection(db, `HighScore`));
  const ul = document.querySelector(".slider ul");

  let threeWins = []; // 3W
  let twoWins = []; // 2W
  let oneWins = []; // 1W
  let zeroWins = []; // 0W

  ul.textContent = ""; // CLEAR

  // Sort 1
  highScores.forEach((highScore) => {
    if (highScore.data().wins === 3) {
      const template = `<li>${highScore.data().username.toUpperCase()} | ${
        highScore.data().wins
      } W | ${highScore.data().draws} D | ${highScore.data().losses} L </li>`;
      threeWins.push(template);
    } else if (highScore.data().wins === 2) {
      const template = `<li>${highScore.data().username.toUpperCase()} | ${
        highScore.data().wins
      } W | ${highScore.data().draws} D | ${highScore.data().losses} L </li>`;
      twoWins.push(template);
    } else if (highScore.data().wins === 1) {
      const template = `<li>${highScore.data().username.toUpperCase()} | ${
        highScore.data().wins
      } W | ${highScore.data().draws} D | ${highScore.data().losses} L </li>`;
      oneWins.push(template);
    } else {
      const template = `<li>${highScore.data().username.toUpperCase()} | ${
        highScore.data().wins
      } W | ${highScore.data().draws} D | ${highScore.data().losses} L </li>`;
      zeroWins.push(template);
    }
  });

  // Sort 2
  for (let i = 0; i < threeWins.length; i++) {
    ul.insertAdjacentHTML("beforeend", threeWins[i]);
  }
  for (let i = 0; i < twoWins.length; i++) {
    ul.insertAdjacentHTML("beforeend", twoWins[i]);
  }
  for (let i = 0; i < oneWins.length; i++) {
    ul.insertAdjacentHTML("beforeend", oneWins[i]);
  }
  for (let i = 0; i < zeroWins.length; i++) {
    ul.insertAdjacentHTML("beforeend", zeroWins[i]);
  }
}
