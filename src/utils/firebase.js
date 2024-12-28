// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPy_-DsSAN9y0mFYOBKAT3RuGZksQBFS0",
  authDomain: "netflix-12694.firebaseapp.com",
  projectId: "netflix-12694",
  storageBucket: "netflix-12694.firebasestorage.app",
  messagingSenderId: "432501234629",
  appId: "1:432501234629:web:7b15e1e383805b76c6c9ac",
  measurementId: "G-4YPXF64FDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);