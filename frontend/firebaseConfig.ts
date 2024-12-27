// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import other Firebase services as needed (e.g., Firestore, Authentication)
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIS7-1ZTNL5iY-g28bs6587F4am09UReI",
  authDomain: "mycreditscoretool.firebaseapp.com",
  projectId: "mycreditscoretool",
  storageBucket: "mycreditscoretool.appspot.com",
  messagingSenderId: "911557818138",
  appId: "1:911557818138:web:d75dbadbfae64d51d5dea3",
  measurementId: "G-0P2309ETFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the Firebase app for use in other parts of your project
export default app;
