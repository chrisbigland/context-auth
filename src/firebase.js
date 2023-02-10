// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBscjCodbJ-Bvzsb9gFUjzNFq68w7YhpiA",
  authDomain: "context-auth-f7802.firebaseapp.com",
  projectId: "context-auth-f7802",
  storageBucket: "context-auth-f7802.appspot.com",
  messagingSenderId: "116648556948",
  appId: "1:116648556948:web:3b1498cc2f926f01df7781",
  measurementId: "G-50ZN4TZQ2C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
const analytics = getAnalytics(app);