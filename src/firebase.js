import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBGT0XiGjtZOVnpypbOOtzRvoKXMX8OO7g",
  authDomain: "drive-51b0d.firebaseapp.com",
  projectId: "drive-51b0d",
  storageBucket: "drive-51b0d.appspot.com",
  messagingSenderId: "424766310266",
  appId: "1:424766310266:web:05dc724d70a7165f1338c3",
  measurementId: "G-R0C58RN444"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage =getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, storage, auth, provider }
