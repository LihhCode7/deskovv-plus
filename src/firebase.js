// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCOXSp45jmspF92tVzGU28eWtnCSZna6tU",
  authDomain: "xdkvplus.firebaseapp.com",
  projectId: "xdkvplus",
  storageBucket: "xdkvplus.appspot.com",
  messagingSenderId: "953066459330",
  appId: "1:953066459330:web:c5a18937f668c5cc5bab5b",


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();