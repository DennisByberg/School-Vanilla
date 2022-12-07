import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
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
