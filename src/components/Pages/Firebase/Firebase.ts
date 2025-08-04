// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4YY1GON8DAJbQqZbU8AlHphoLp9d5Rw",
  authDomain: "authentication-pharmadoor.firebaseapp.com",
  projectId: "authentication-pharmadoor",
  storageBucket: "authentication-pharmadoor.firebasestorage.app",
  messagingSenderId: "525166565286",
  appId: "1:525166565286:web:21b866ac3169c946de6167",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
