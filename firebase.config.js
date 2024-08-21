// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd_Ev_dRdJXhNGHpMzkpQtZn7kfVKeswI",
  authDomain: "project-food-order-e3209.firebaseapp.com",
  projectId: "project-food-order-e3209",
  storageBucket: "project-food-order-e3209.appspot.com",
  messagingSenderId: "1013680672712",
  appId: "1:1013680672712:web:08f0cf0d237a205b5efafd",
  measurementId: "G-WVV9KWW1C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)