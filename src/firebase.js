import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
// Default indexedDB persistence can fail with "Database is closing/hidden" when
// the sign-in popup steals focus from the opener tab; localStorage doesn't have
// that race.
setPersistence(auth, browserLocalPersistence);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
