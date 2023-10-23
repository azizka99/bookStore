// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM6m2SFkfLjsjddiPT2JMWdpgRDsS-rEg",
  authDomain: "bookstore-9c864.firebaseapp.com",
  databaseURL: "https://bookstore-9c864-default-rtdb.firebaseio.com",
  projectId: "bookstore-9c864",
  storageBucket: "bookstore-9c864.appspot.com",
  messagingSenderId: "331163835805",
  appId: "1:331163835805:web:e772774fa4016e4040e374"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);