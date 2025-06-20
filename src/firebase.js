// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHtK1t_7q-i5JQA3hWsO75GGphoZwReDM",
  authDomain: "metal-wellness.firebaseapp.com",
  projectId: "metal-wellness",
  storageBucket: "metal-wellness.firebasestorage.app",
  messagingSenderId: "1081134536666",
  appId: "1:1081134536666:web:2495bb63763dfb779252e3",
  measurementId: "G-BRWKC4VYRS"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };