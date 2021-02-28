

import * as firebase from 'firebase';



  // <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"></script>

  // <!-- Add analytics if you need them -->
  <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-analytics.js"></script>

  // <!--Add firebase dependencies you need (here i added auth and firestore) -->
  <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"></script>

    var firebaseConfig = {
      // ... You can find config in settings, scroll down and click on cdn
      // I use cdn since it allows both external and firebase hosting
      apiKey: "AIzaSyCzJahz1z6ubN7-Y98JwymtUhu_6jyePQM",
      authDomain: "mobile-19d93.firebaseapp.com",
      databaseURL: "https://mobile-19d93-default-rtdb.firebaseio.com",
      projectId: "mobile-19d93",
      storageBucket: "mobile-19d93.appspot.com",
      messagingSenderId: "595589765129",
      appId: "1:595589765129:web:9dfcd7e1552791f04b40d8",
      measurementId: "G-K1HXZK61QF"
   
   };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
