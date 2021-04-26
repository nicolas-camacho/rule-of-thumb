import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCI8y0vN43lmvoN_qYuWRHg4GGU97CmS74",
    authDomain: "rule-of-thumb-f1394.firebaseapp.com",
    projectId: "rule-of-thumb-f1394",
    storageBucket: "rule-of-thumb-f1394.appspot.com",
    messagingSenderId: "663712988178",
    appId: "1:663712988178:web:defc5534fba49a4e382ccb"
}

firebase.initializeApp(firebaseConfig);

export default firebase