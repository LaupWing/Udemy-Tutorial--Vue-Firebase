import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBc8PDhpWwVA9chvnSLaoYiMu0j2x9YRsk",
    authDomain: "smootie.firebaseapp.com",
    databaseURL: "https://smootie.firebaseio.com",
    projectId: "smootie",
    storageBucket: "smootie.appspot.com",
    messagingSenderId: "664653462109",
    appId: "1:664653462109:web:c5f5753a3d95cd03"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({timestampsInSnapshots:true})
export default firebaseApp.firestore()