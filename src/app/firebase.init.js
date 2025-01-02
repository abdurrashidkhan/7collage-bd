// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIDBvZy2jyW8BThL7gZJ2Kq6IqX1BY1ro",
  authDomain: "collage-67299.firebaseapp.com",
  projectId: "collage-67299",
  storageBucket: "collage-67299.firebasestorage.app",
  messagingSenderId: "908792295784",
  appId: "1:908792295784:web:5e1c900a3501feaa06a6dd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
