import firebase from "firebase/app";  
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyAr3WmP_rMG7Ej-6e8m_2NBXutcOUvsOoY",
    authDomain: "libhuha-73130.firebaseapp.com",
    databaseURL: "https://libhuha-73130-default-rtdb.firebaseio.com",
    projectId: "libhuha-73130",
    storageBucket: "libhuha-73130.appspot.com",
    messagingSenderId: "862838912436",
    appId: "1:862838912436:web:0b6ca3116e49f24531aee1",
    measurementId: "G-V87MH825Y9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;