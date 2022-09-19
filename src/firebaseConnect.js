import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyADsG78h7cA__1naOOGF2gRHQZJxHyRv4U",
    authDomain: "notereact-fab57.firebaseapp.com",
    databaseURL: "https://notereact-fab57-default-rtdb.firebaseio.com",
    projectId: "notereact-fab57",
    storageBucket: "notereact-fab57.appspot.com",
    messagingSenderId: "502154490769",
    appId: "1:502154490769:web:d4780206515f40b49e2030",
    measurementId: "G-87Z70S10ZB"
  };
  
  // Initialize Firebase
  

  export const firebaseConnect = firebase.initializeApp(firebaseConfig)