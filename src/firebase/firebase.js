import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAHiUxGPi9zT5FxeaoAX9bfO4JDRtAli_s",
    authDomain: "form-tasks.firebaseapp.com",
    projectId: "form-tasks",
    storageBucket: "form-tasks.appspot.com",
    messagingSenderId: "114668444913",
    appId: "1:114668444913:web:882a48d9915ba2f5f81d50",
    measurementId: "G-F6GTTJGVTF"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

