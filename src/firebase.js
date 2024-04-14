import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBGT0XiGjtZOVnpypbOOtzRvoKXMX8OO7g",
  authDomain: "drive-51b0d.firebaseapp.com",
  projectId: "drive-51b0d",
  storageBucket: "drive-51b0d.appspot.com",
  messagingSenderId: "424766310266",
  appId: "1:424766310266:web:05dc724d70a7165f1338c3",
  measurementId: "G-R0C58RN444"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }
