import { getApp, getApps, initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';
import { getDatabase, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBVMaHOEF_MV8G3nDGY5ghwBpeoFDJ3_xM",
    authDomain: "kinhdovido.firebaseapp.com",
    databaseURL: "https://kinhdovido-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kinhdovido",
    storageBucket: "kinhdovido.firebasestorage.app",
    messagingSenderId: "56568392591",
    appId: "1:56568392591:web:836fffc6279f060de539fa",
    measurementId: "G-P6H9XFR3LQ"

};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);



export { db };

