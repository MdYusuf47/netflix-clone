// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuDCZtK4HCQYOBEX7dTMeF-i3DBjpRUH0",
    authDomain: "netflix-clone-b888a.firebaseapp.com",
    projectId: "netflix-clone-b888a",
    storageBucket: "netflix-clone-b888a.appspot.com",
    messagingSenderId: "1003663484550",
    appId: "1:1003663484550:web:a4384baa86260ab7d29307",
    measurementId: "G-PRRLG18P98"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;



