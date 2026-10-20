import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXQ7sb-OkwBa8SGY5aQFqCk3wOAjNB9WE",
  authDomain: "fir-education-b0e8c.firebaseapp.com",
  projectId: "fir-education-b0e8c",
  storageBucket: "fir-education-b0e8c.firebasestorage.app",
  messagingSenderId: "959321063579",
  appId: "1:959321063579:web:74717a4adca3a30d3fc63e",
  measurementId: "G-QRJPKZHSPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);