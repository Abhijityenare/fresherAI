// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fresherai-de5d8.firebaseapp.com",
  projectId: "fresherai-de5d8",
  storageBucket: "fresherai-de5d8.firebasestorage.app",
  messagingSenderId: "976786050332",
  appId: "1:976786050332:web:073a534aa65b29411cbed9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}