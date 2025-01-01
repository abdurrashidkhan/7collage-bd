// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZDRREDpqR7SMsIm6VmJZ64xS7WotwtDQ",
  authDomain: "our-collage.firebaseapp.com",
  projectId: "our-collage",
  storageBucket: "our-collage.firebasestorage.app",
  messagingSenderId: "338988672278",
  appId: "1:338988672278:web:a5a3b1bba676e270521c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
