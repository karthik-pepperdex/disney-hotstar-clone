import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAotf0hMy18RAou6WSlU_eUwPRcY3MCYDk",
    authDomain: "disney-plus-clone-eae3c.firebaseapp.com",
    projectId: "disney-plus-clone-eae3c",
    storageBucket: "disney-plus-clone-eae3c.appspot.com",
    messagingSenderId: "53704354583",
    appId: "1:53704354583:web:b3ba1ccea1a2dc948ba552",
    measurementId: "G-9054S27MKM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;