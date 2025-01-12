// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApfVmxTz6jCWj_euxjozvKfaYB3saW6Uk",
    authDomain: "wizztalk-10657.firebaseapp.com",
    projectId: "wizztalk-10657",
    storageBucket: "wizztalk-10657.appspot.com",
    messagingSenderId: "317143519835",
    appId: "1:317143519835:web:c8564536df6a68bd70a57e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);

export {fireDb,auth,storage};