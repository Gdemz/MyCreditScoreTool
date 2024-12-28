// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Authentication functions

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
const auth = getAuth(app); // Initialize Authentication

/**
 * Log in a user and return the ID token.
 * @param email - The user's email address
 * @param password - The user's password
 * @returns The Firebase ID token as a string
 */
export const logInUser = async (email: string, password: string): Promise<string> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken(); // Retrieve ID token
    console.log("ID Token:", idToken);
    return idToken;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Export the Firebase app and authentication
export default app;
export { auth };
