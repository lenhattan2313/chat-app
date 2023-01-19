// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDsC0pVmIzOui_jyFv41r3OSgHFRoDQByE",
  authDomain: "chat-app-f9093.firebaseapp.com",
  projectId: "chat-app-f9093",
  storageBucket: "chat-app-f9093.appspot.com",
  messagingSenderId: "446046298850",
  appId: "1:446046298850:web:be84e27918577dfd0134bb",
  measurementId: "G-47MFVFJ7BE",
};

const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);

const auth = getAuth(firebase);
const db = getFirestore(firebase);
export { auth, db };
