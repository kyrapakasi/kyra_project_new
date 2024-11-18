// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEMh00c75CGLFUpgayJpB2irO-6McGHTs",
  authDomain: "frontendmid-813f1.firebaseapp.com",
  projectId: "frontendmid-813f1",
  storageBucket: "frontendmid-813f1.firebasestorage.app",
  messagingSenderId: "281367035333",
  appId: "1:281367035333:web:456e654e8f138a00595fac",
  measurementId: "G-STC3CNGX4H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
