// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1UjHdhhHHni1OOB7vIPlIDBJsjxOhbyo",
  authDomain: "netflixgpt-97ef6.firebaseapp.com",
  projectId: "netflixgpt-97ef6",
  storageBucket: "netflixgpt-97ef6.firebasestorage.app",
  messagingSenderId: "109850378049",
  appId: "1:109850378049:web:c424e6f2eb9f33d343ebc0",
  measurementId: "G-YRB2GZCFM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();