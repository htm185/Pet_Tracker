import { getApp, getApps, initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';
import { getDatabase, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "",
    authDomain: "kinhdovido.firebaseapp.com",
    databaseURL: "https://kinhdovido-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kinhdovido",
    storageBucket: "kinhdovido.firebasestorage.app",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);



export { db };

