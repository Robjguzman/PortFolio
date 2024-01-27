// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSonZmD79RMp7Z9vnwGiZJ8UqAV8NiXNg",
  authDomain: "portfolio-13ed0.firebaseapp.com",
  projectId: "portfolio-13ed0",
  storageBucket: "portfolio-13ed0.appspot.com",
  messagingSenderId: "253400965266",
  appId: "1:253400965266:web:fd0e71016d0be619b7464b",
  measurementId: "G-NC590TQ5JB",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDSonZmD79RMp7Z9vnwGiZJ8UqAV8NiXNg",
//   authDomain: "portfolio-13ed0.firebaseapp.com",
//   projectId: "portfolio-13ed0",
//   storageBucket: "portfolio-13ed0.appspot.com",
//   messagingSenderId: "253400965266",
//   appId: "1:253400965266:web:fd0e71016d0be619b7464b",
//   measurementId: "G-NC590TQ5JB",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
