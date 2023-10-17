// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCHOcKb9ol1qKnu92M3no1pxhTVZW965Q",
  authDomain: "facebookmessenger-4183b.firebaseapp.com",
  projectId: "facebookmessenger-4183b",
  storageBucket: "facebookmessenger-4183b.appspot.com",
  messagingSenderId: "516264307354",
  appId: "1:516264307354:web:0ba362f3ee81a8728a4d23",
  measurementId: "G-5ND5TYRGW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);