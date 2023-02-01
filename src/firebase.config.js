import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI-hDGEO9cC60LVci1c_mXrKvOeBJWMlo",
  authDomain: "house-marketplace-app-1d53a.firebaseapp.com",
  projectId: "house-marketplace-app-1d53a",
  storageBucket: "house-marketplace-app-1d53a.appspot.com",
  messagingSenderId: "314665634200",
  appId: "1:314665634200:web:53e195863edee66fec03ed",
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
