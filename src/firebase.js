import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDzA385dOth1qvOwYo4q5PjTeHKxwHqLTs",
    authDomain: "fir-react-6980b.firebaseapp.com",
    databaseURL: "https://fir-react-6980b.firebaseio.com",
    projectId: "fir-react-6980b",
    storageBucket: "fir-react-6980b.appspot.com",
    messagingSenderId: "674980101710",
    appId: "1:674980101710:web:aaad31314714e4b5b10d1f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}