const firebaseConfig = {
    apiKey: "AIzaSyDk1UgfIbXomLDJqi473t73dqC9YaPuSHQ",
    authDomain: "memorialwebsite-82edf.firebaseapp.com",
    databaseURL: "https://memorialwebsite-82edf-default-rtdb.firebaseio.com",
    projectId: "memorialwebsite-82edf",
    storageBucket: "memorialwebsite-82edf.appspot.com",
    messagingSenderId: "1029058327991",
    appId: "1:1029058327991:web:411d72a5494979eae8a432",
    measurementId: "G-7N1DDTDBLV"
  };

    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   //reference your database
   const db = firebase.database();

   function save() {
    var name = document.getElementById('tbName').value;
    var comment = document.getElementById('txComment').value;

    db.ref('users/').push().set({
        name : name,
        comment : comment
    })
    alert('Saved')
   }


   