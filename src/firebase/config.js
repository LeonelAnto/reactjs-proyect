import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBfW2HElf7SGhG60VfASbR7wUptvI6h0OY",
    authDomain: "proyect-reactjs-e6121.firebaseapp.com",
    projectId: "proyect-reactjs-e6121",
    storageBucket: "proyect-reactjs-e6121.firebasestorage.app",
    messagingSenderId: "1070222616798",
    appId: "1:1070222616798:web:c3e0de7eec1ad33c877a4f"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)