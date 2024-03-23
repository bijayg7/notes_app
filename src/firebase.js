import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"


// Notes app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5cPuHEy5YNTUUeTrBvyTAHvoUD_riFyQ",
  authDomain: "notes-app-5087c.firebaseapp.com",
  projectId: "notes-app-5087c",
  storageBucket: "notes-app-5087c.appspot.com",
  messagingSenderId: "502642622621",
  appId: "1:502642622621:web:da750e75dacdb706c11474"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
