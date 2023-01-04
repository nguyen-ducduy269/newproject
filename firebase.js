// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxzgw7fOEsS9Ctjmy8psGF2TDAVQtosRU",
  authDomain: "newproject-6b715.firebaseapp.com",
  projectId: "newproject-6b715",
  storageBucket: "newproject-6b715.appspot.com",
  messagingSenderId: "262978420003",
  appId: "1:262978420003:web:b06ce57671f1b1ba73a096",
  measurementId: "G-M3SXS4ZZQ8",
};

// Initialize Firebase
export const db = getFirestore(app);
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
