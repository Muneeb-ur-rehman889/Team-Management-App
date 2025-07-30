import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrHtcyBvQ3ktIPLJrvng9fnvucmptFM5s",
  authDomain: "practice-40201.firebaseapp.com",
  projectId: "practice-40201",
  storageBucket: "practice-40201.appspot.com", // 
  messagingSenderId: "702026210522",
  appId: "1:702026210522:web:03a0a4ade1e7b72babd9e3",
  measurementId: "G-7SE1SKTP59"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// ✅ Get Auth instance (without persistence setting)
const auth = getAuth(app);

export default { app, auth };
