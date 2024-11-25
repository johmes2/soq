// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkhGKUTHuJDSn_ZWDC6oWRPCRy-ta10c0",
    authDomain: "project-1-5b4bd.firebaseapp.com",
    projectId: "project-1-5b4bd",
    storageBucket: "project-1-5b4bd.appspot.com",
    messagingSenderId: "164037063325",
    appId: "1:164037063325:web:6cd1610f52d25cb5575a74",
    measurementId: "G-LLRRJLBBRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
