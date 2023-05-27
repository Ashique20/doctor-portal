// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA3c8a67Wdc0VIc-9wKs5DCSaxR4KC9qM",
  authDomain: "doctor-portal-bb11d.firebaseapp.com",
  projectId: "doctor-portal-bb11d",
  storageBucket: "doctor-portal-bb11d.appspot.com",
  messagingSenderId: "724363037179",
  appId: "1:724363037179:web:ec2fec961eabcb6971635e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;