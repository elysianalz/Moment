 import firebase from 'firebase/app';
 import 'firebase/auth';
 import 'firebase/firestore';
 import 'firebase/storage';

 var firebaseConfig = {
    apiKey: "AIzaSyCWU-9EjbzMI9NGIg9HfSBBIs9kzjEctbM",
    authDomain: "moment-995ae.firebaseapp.com",
    databaseURL: "https://moment-995ae.firebaseio.com",
    projectId: "moment-995ae",
    storageBucket: "moment-995ae.appspot.com",
    messagingSenderId: "788489562027",
    appId: "1:788489562027:web:f0919bb9d06988dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;