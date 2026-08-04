import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqB8eBOihVbVkSRevVwxK-6Z-uhMMgDxw",
  authDomain: "miami-spice-tracker.firebaseapp.com",
  projectId: "miami-spice-tracker",
  storageBucket: "miami-spice-tracker.firebasestorage.app",
  messagingSenderId: "87621989020",
  appId: "1:87621989020:web:5014a40e656a4206423359",
  measurementId: "G-ZKVW3Q5B66",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
