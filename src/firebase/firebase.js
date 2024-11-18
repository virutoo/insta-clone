import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdKXsuHkAQEROj2mibaZJj5xOh65zGjvo",
  authDomain: "insta-clone-5df96.firebaseapp.com",
  projectId: "insta-clone-5df96",
  storageBucket: "insta-clone-5df96.firebasestorage.app",
  messagingSenderId: "627525352748",
  appId: "1:627525352748:web:1ada3fefb111183d19c089",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
