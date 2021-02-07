import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCteQ3Mf2nQFUP89BSCOf2sN5cFbTo7hy8",
    authDomain: "to-do-list-9a12b.firebaseapp.com",
    projectId: "to-do-list-9a12b",
    storageBucket: "to-do-list-9a12b.appspot.com",
    messagingSenderId: "92085843009",
    appId: "1:92085843009:web:19b5c59938f626d36c02c0"
};

const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential here
  ...firebaseConfig
});

const firestore = firebaseApp.firestore();

export default firestore;