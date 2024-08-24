import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZccYb_8M9VyuSHRGnr08jNUxaoeTrz5o",
  authDomain: "complete-welder-427123-c6.firebaseapp.com",
  projectId: "complete-welder-427123-c6",
  storageBucket: "complete-welder-427123-c6.appspot.com",
  messagingSenderId: "220769308710",
  appId: "1:220769308710:web:5432f7eb0f28c6a3bc96e7",
  measurementId: "G-C1Z6HBLYN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };
