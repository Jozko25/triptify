// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAufjJJfOH2J_nlZa1Rk8M_46JnndEAeQs",
  authDomain: "triptify-f427f.firebaseapp.com",
  projectId: "triptify-f427f",
  storageBucket: "triptify-f427f.appspot.com",
  messagingSenderId: "927882944414",
  appId: "1:927882944414:web:f244a7b691e5afbea4c08f",
  measurementId: "G-DJLK148RR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);