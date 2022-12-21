// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi3f6J8_72YQOrkYE_B5vMD6-bVl7OnLI",
  authDomain: "todo-test-bcd92.firebaseapp.com",
  projectId: "todo-test-bcd92",
  storageBucket: "todo-test-bcd92.appspot.com",
  messagingSenderId: "574308356278",
  appId: "1:574308356278:web:e00c3cfb07d4eafcf9d617",
  measurementId: "G-NBW0XECTNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);