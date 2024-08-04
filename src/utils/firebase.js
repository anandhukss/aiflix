// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-KQQpwGJ_dSrfOQdlEWcvKDB3u_sWjnY",
    authDomain: "aiflix-e4bb8.firebaseapp.com",
    projectId: "aiflix-e4bb8",
    storageBucket: "aiflix-e4bb8.appspot.com",
    messagingSenderId: "346142762578",
    appId: "1:346142762578:web:d09130f503424f8db2a18b",
    measurementId: "G-45R8W64PJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()