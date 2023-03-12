// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWekCWrpJRE_Kp1P3EXOvx-UlzLA59lAQ",
  authDomain: "restaurant-web-3e21b.firebaseapp.com",
  projectId: "restaurant-web-3e21b",
  storageBucket: "restaurant-web-3e21b.appspot.com",
  messagingSenderId: "500681283949",
  appId: "1:500681283949:web:8d535cac2b815665022264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

