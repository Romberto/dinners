import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// todo перенести в .env
const firebaseConfig = {
  apiKey: "AIzaSyACTx-pjpRH-OBRIWYGh52g_ia-g6rR-e8",
  authDomain: "dinners-b0d6f.firebaseapp.com",
  projectId: "dinners-b0d6f",
  storageBucket: "dinners-b0d6f.firebasestorage.app",
  messagingSenderId: "705700369483",
  appId: "1:705700369483:web:f58a04084b62682e5d69ce",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
